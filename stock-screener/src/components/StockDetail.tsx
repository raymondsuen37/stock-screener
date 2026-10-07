import { Stock } from "@/types/stock";

export default function StockDetail({
  stock,
  onClose,
}: {
  stock: Stock;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-zinc-900 shadow-xl border border-zinc-200 dark:border-zinc-700">
        <div className="sticky top-0 flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 px-5 py-4 bg-white dark:bg-zinc-900">
          <div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              {stock.ticker}
            </h2>
            <p className="text-sm text-zinc-500">{stock.name}</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500"
            aria-label="關閉"
          >
            ✕
          </button>
        </div>

        <div className="p-5 space-y-4">
          <div className="flex flex-wrap gap-3 text-sm">
            <span
              className={`font-semibold ${
                stock.changePct >= 0 ? "text-emerald-600" : "text-red-600"
              }`}
            >
              {stock.changePct >= 0 ? "+" : ""}
              {stock.changePct.toFixed(1)}%
            </span>
            <span className="text-zinc-500">量倍 {stock.volumeMultiple}×</span>
            <span className="text-zinc-500">資訊品質 {stock.infoQuality}/100</span>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase text-zinc-500 mb-1">
              催化劑
            </h3>
            <p className="text-sm text-zinc-800 dark:text-zinc-200">
              {stock.catalyst}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase text-zinc-500 mb-1">
              摘要
            </h3>
            <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {stock.summary}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-emerald-50 dark:bg-emerald-900/20 p-3">
              <h4 className="text-xs font-medium text-emerald-700 dark:text-emerald-400 mb-1">
                Bull 觀點
              </h4>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                {stock.bull}
              </p>
            </div>
            <div className="rounded-lg bg-red-50 dark:bg-red-900/20 p-3">
              <h4 className="text-xs font-medium text-red-700 dark:text-red-400 mb-1">
                Bear 觀點
              </h4>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                {stock.bear}
              </p>
            </div>
          </div>

          {(stock.pe || stock.ps || stock.revGrowth || stock.grossMargin) && (
            <div>
              <h3 className="text-xs font-medium uppercase text-zinc-500 mb-2">
                估值／財務參考
              </h3>
              <div className="flex flex-wrap gap-2 text-sm">
                {stock.pe && (
                  <span className="px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800">
                    P/E {stock.pe}
                  </span>
                )}
                {stock.ps && (
                  <span className="px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800">
                    P/S {stock.ps}
                  </span>
                )}
                {stock.revGrowth && (
                  <span className="px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800">
                    收入增長 {stock.revGrowth}
                  </span>
                )}
                {stock.grossMargin && (
                  <span className="px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800">
                    毛利率 {stock.grossMargin}
                  </span>
                )}
              </div>
            </div>
          )}

          <div>
            <h3 className="text-xs font-medium uppercase text-zinc-500 mb-1">
              主要風險
            </h3>
            <ul className="text-sm space-y-1 text-zinc-700 dark:text-zinc-300">
              {stock.risks.map((r, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-amber-500">•</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
            <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              推薦行動：
            </span>{" "}
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              {stock.action}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
