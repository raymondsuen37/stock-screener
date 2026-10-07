import { ReportMeta } from "@/types/stock";

export default function OverviewCard({ meta }: { meta: ReportMeta }) {
  return (
    <section className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow-sm">
      <h2 className="text-lg font-semibold mb-3 text-zinc-900 dark:text-zinc-50">
        30 秒速覽
      </h2>
      <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 whitespace-pre-line">
        {meta.overview}
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div>
          <h3 className="text-xs font-medium uppercase tracking-wide text-zinc-500 mb-1">
            主要風險
          </h3>
          <ul className="text-sm space-y-1 text-zinc-700 dark:text-zinc-300">
            {meta.mainRisks.slice(0, 3).map((r, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-amber-500">•</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-medium uppercase tracking-wide text-zinc-500 mb-1">
            明日觀察點
          </h3>
          <ul className="text-sm space-y-1 text-zinc-700 dark:text-zinc-300">
            {meta.observationPoints.slice(0, 3).map((r, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-blue-500">•</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
