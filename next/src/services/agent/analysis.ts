export type Analysis = {
  reasoning: string;
  action: "reason" | "search" | "wikipedia" | "image" | "code" | "collect";
  arg: string;
};
