# 每日 AI 股票 Screener（Next.js / React）

證據為本、繁體中文（香港用語）嘅每日股票篩選儀表板。

## 功能

- 30 秒速覽 + 主要風險／觀察點
- Top 15 表格（升跌、量倍、催化劑、分類、推薦行動）
- 點擊股票可睇詳細摘要、Bull / Bear 觀點、風險、估值參考
- 風險覆核清單、明日觀察點、資料缺口、重要聲明
- 響應式設計，支援 Dark Mode

## 技術棧

- Next.js 16（App Router）
- React 19 + TypeScript
- Tailwind CSS 4
- 純前端示範（數據目前用 `src/lib/sample-data.ts`）

## 本地運行

```bash
cd stock-screener
npm install
npm run dev
```

打開 http://localhost:3000

## 部署

推薦用 Vercel：

1. 將整個資料夾推上 GitHub
2. 到 vercel.com Import 專案
3. 一鍵 Deploy

或者：

```bash
npx vercel
```

## 如何更新每日數據

編輯 `src/lib/sample-data.ts`：

- `reportMeta`：日期、速覽、風險、觀察點
- `stocks`：Top 15 股票陣列

之後重新 build / 部署即可。

之後可以再加：

- 後端 API 自動拉取成交量／業績
- 連接 Grok Automations 每日自動更新 JSON
- 登入 + 歷史記錄

## 重要聲明

本工具只係研究整理介面，**並非投資建議**。所有數據應以公司原始公告及可靠市場數據源作最終核實。
