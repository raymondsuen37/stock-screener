"use client";

import { Stock } from "@/types/stock";

const categoryColor: Record<string, string> = {
  "討論度爆發": "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
  "量價齊升": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  "爭議／風險警報": "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
  "深度研究候選": "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
};

const actionColor: Record<string, string> = {
  "深度研究": "text-blue-600 dark:text-blue-400 font-medium",
  "加入 watchlist": "text-emerald-600 dark:text-emerald-400",
  "等待更多數據": "text-zinc-500",
  "風險覆核": "text-amber-600 dark:text-amber-400",
  "不建議現階段跟進": "text-red-600 dark:text-red-400",
};

export default function StockTable({
  stocks,
  onSelect,
}: {
  stocks: Stock[];
  onSelect: (ticker: string) => void;
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
      <table className="w-full text-sm text-left">
        <thead className="bg-zinc-50 dark:bg-zinc-800/80 text-xs uppercase text-zinc-500">
          <tr>
            <th className="px-3 py-3 font-medium">#</th>
            <th className="px-3 py-3 font-medium">代號</th>
            <th className="px-3 py-3 font-medium">公司</th>
            <th className="px-3 py-3 font-medium text-right">升跌%</th>
            <th className="px-3 py-3 font-medium text-right">量倍</th>
            <th className="px-3 py-3 font-medium">催化劑</th>
            <th className="px-3 py-3 font-medium">分類</th>
            <th className="px-3 py-3 font-medium">行動</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
          {stocks.map((s) => (
            <tr
              key={s.ticker}
              className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 cursor-pointer transition-colors"
              onClick={() => onSelect(s.ticker)}
            >
              <td className="px-3 py-2.5 text-zinc-500">{s.rank}</td>
              <td className="px-3 py-2.5 font-semibold text-zinc-900 dark:text-zinc-50">
                {s.ticker}
              </td>
              <td className="px-3 py-2.5 text-zinc-700 dark:text-zinc-300">
                {s.name}
              </td>
              <td
                className={`px-3 py-2.5 text-right font-medium ${
                  s.changePct >= 0
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {s.changePct >= 0 ? "+" : ""}
                {s.changePct.toFixed(1)}%
              </td>
              <td className="px-3 py-2.5 text-right text-zinc-600 dark:text-zinc-400">
                {s.volumeMultiple}×
              </td>
              <td className="px-3 py-2.5 max-w-[220px] truncate text-zinc-600 dark:text-zinc-400">
                {s.catalyst}
              </td>
              <td className="px-3 py-2.5">
                <span
                  className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                    categoryColor[s.category] || ""
                  }`}
                >
                  {s.category}
                </span>
              </td>
              <td className={`px-3 py-2.5 ${actionColor[s.action] || ""}`}>
                {s.action}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
