export type Analysis = {
  reasoning: string;
  action: "reason" | "search" | "wikipedia" | "code" | "collect"
  arg: string;
};
