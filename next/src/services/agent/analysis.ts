export type Analysis = {
  reasoning: string;
  action: "reason" | "search" | "维基百科" | "code" | "xiaohongshu" | "财务报表";
  arg: string;
};
