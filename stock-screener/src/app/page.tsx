"use client";

import { useState } from "react";
import { stocks, reportMeta } from "@/lib/sample-data";
import OverviewCard from "@/components/OverviewCard";
import StockTable from "@/components/StockTable";
import StockDetail from "@/components/StockDetail";
import { Stock } from "@/types/stock";

export default function Home() {
  const [selected, setSelected] = useState<Stock | null>(null);

  const handleSelect = (ticker: string) => {
    const s = stocks.find((x) => x.ticker === ticker) || null;
    setSelected(s);
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              每日 AI 股票 Screener
            </h1>
            <p className="text-xs text-zinc-500 mt-0.5">
              日期 {reportMeta.date} · 資料截至 {reportMeta.asOf}
            </p>
          </div>
          <div className="text-xs text-zinc-500">
            資料完整度：{reportMeta.dataCompleteness}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        {/* Overview */}
        <OverviewCard meta={reportMeta} />

        {/* Table */}
        <section>
          <h2 className="text-lg font-semibold mb-3">今日 Top 15</h2>
          <StockTable stocks={stocks} onSelect={handleSelect} />
        </section>

        {/* Risk & Observation */}
        <div className="grid gap-4 md:grid-cols-2">
          <section className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5">
            <h2 className="text-base font-semibold mb-3">風險覆核清單</h2>
            <ul className="text-sm space-y-2 text-zinc-700 dark:text-zinc-300">
              {reportMeta.mainRisks.map((r, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-amber-500 font-medium">{i + 1}.</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5">
            <h2 className="text-base font-semibold mb-3">明日觀察點</h2>
            <ul className="text-sm space-y-2 text-zinc-700 dark:text-zinc-300">
              {reportMeta.observationPoints.map((r, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-blue-500 font-medium">{i + 1}.</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Data gaps */}
        <section className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5">
          <h2 className="text-base font-semibold mb-3">資料缺口</h2>
          <ul className="text-sm space-y-1 text-zinc-600 dark:text-zinc-400">
            {reportMeta.dataGaps.map((g, i) => (
              <li key={i}>• {g}</li>
            ))}
          </ul>
        </section>

        {/* Disclaimer */}
        <section className="rounded-xl border border-amber-200 dark:border-amber-900/50 bg-amber-50 dark:bg-amber-950/30 p-5 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <h2 className="font-semibold mb-2 text-amber-800 dark:text-amber-300">
            重要聲明
          </h2>
          <p>
            本報告只係基於公開市場數據、公司公告、SEC
            申報及媒體報導嘅研究整理，並非投資建議、要約、招攬或保證。AI
            可能會錯誤理解資料、遺漏重要風險或無法即時核實所有資訊。所有關鍵數字、日期、財務數據及主張，均應以公司原始公告、監管申報、官方財報及可靠市場數據源作最終核實。投資涉及風險，過往表現不代表未來表現。
          </p>
        </section>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-4 text-center text-xs text-zinc-500">
        AI Stock Screener · 證據為本 · 非投資建議
      </footer>

      {selected && (
        <StockDetail stock={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
