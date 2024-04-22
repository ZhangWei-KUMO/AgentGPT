import { env } from "../env/client.mjs";
import type { RequestBody } from "../utils/interfaces";

type TextStream = ReadableStreamDefaultReader<Uint8Array>;
// 从后端获取包含文本流的Stream
const fetchData = async (
  url: string,
  body: RequestBody,
  onError: (message: unknown) => void
): Promise<TextStream | undefined> => {
  url = env.NEXT_PUBLIC_BACKEND_URL + url;
  const response = await fetch(url, {
    method: "POST",
    cache: "no-cache",
    keepalive: true,
    headers: {
      "ccess-Control-Allow-Credential":"true",
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
      "Content-Type": "application/json",
      Accept: "text/event-stream",
    },
    body: JSON.stringify(body),
  });

  if (response.status === 409) {
    // TODO: Return the entire object
    const error = (await response.json()) as { error: string; detail: string };
    onError(error.detail);
  }
  
  let promiseTextStream = response.body?.getReader();
  return promiseTextStream;
};

async function readStream(reader: TextStream): Promise<string | null> {
  const result = await reader.read();
  return result.done ? null : new TextDecoder().decode(result.value);
}

// 对文本流进行处理
async function processStream(
  reader: TextStream,
  onStart: () => void,
  onText: (text: string) => void,
  onError: (error: unknown) => void,
  shouldClose: () => boolean
): Promise<void> {
  onStart();
  while (true) {
    if (shouldClose()) {
      await reader.cancel();
      return;
    }

    const text = await readStream(reader);
    if (text === null) break;
    onText(text);
  }
  
}

export const streamText = async (
  url: string,
  body: RequestBody,
  onStart: () => void,
  onText: (text: string) => void,
  onError: (error: unknown) => void,
  shouldClose: () => boolean
) => {
  const reader = await fetchData(url, body, onError);
  if (!reader) {
    console.error("Reader is undefined!");
    return;
  }

  await processStream(reader, onStart, onText, onError, shouldClose);
};
