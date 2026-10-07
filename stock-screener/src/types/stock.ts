export type Category =
  | "討論度爆發"
  | "量價齊升"
  | "爭議／風險警報"
  | "深度研究候選";

export type Action =
  | "深度研究"
  | "加入 watchlist"
  | "等待更多數據"
  | "風險覆核"
  | "不建議現階段跟進";

export interface Stock {
  rank: number;
  ticker: string;
  name: string;
  changePct: number;
  volumeMultiple: number;
  catalyst: string;
  category: Category;
  action: Action;
  pe?: string;
  ps?: string;
  evEbitda?: string;
  revGrowth?: string;
  grossMargin?: string;
  bull: string;
  bear: string;
  risks: string[];
  summary: string;
  infoQuality: number; // 0-100
}

export interface ReportMeta {
  date: string;
  asOf: string;
  pool: string;
  dataCompleteness: string;
  overview: string;
  mainRisks: string[];
  observationPoints: string[];
  dataGaps: string[];
}
