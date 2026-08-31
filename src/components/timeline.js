import timelineData from "@/data/timeline.json";
import "../css/timeline.css";

export default function Timeline() {
  return (
    <section className="mt-20 w-full">
      <h2 className="mb-8 text-3xl font-bold tracking-tight text-white">My journey</h2>

      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[var(--border)]" />

        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;
          const displayMonth = item.month ? item.month : "";
          const displayYear = item.year;

          return (
            <div
              key={`${item.year}-${item.month}-${item.title}`}
              className={`group relative mb-8 flex w-full items-center ${
                isLeft ? "justify-start" : "justify-end"
              }`}
            >
              <div className="timeline-node absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--border)] bg-[var(--surface)] shadow-[0_0_25px_rgba(110,231,183,0.14)] transition-all duration-300 group-hover:-translate-y-[6px] group-hover:scale-[1.05]">
                <div className="timeline-node-inner">
                  <span className="timeline-node-month">
                    {displayMonth ? `${displayMonth}` : displayYear}
                  </span>
                  {displayMonth && <span className="timeline-node-year">{displayYear}</span>}
                </div>
              </div>

              <div
                className={`timeline-card relative w-full max-w-[42%] rounded-2xl border border-[var(--border)] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[var(--accent)] group-hover:shadow-[0_0_25px_rgba(110,231,183,0.12)] ${
                  isLeft ? "mr-auto" : "ml-auto"
                }`}
              >
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
                    {item.type}
                  </span>
                  <span className="timeline-card_date text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                    {item.month ? `${item.month} ${item.year}` : item.year}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.description}</p>

                {item.school && (
                  <p className="mt-3 text-xs text-zinc-500">{item.school}</p>
                )}

                {item.refs && item.refs.length > 0 && (
                  <div className="timeline-refs mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:max-h-40 group-hover:opacity-100">
                    <div className="rounded-xl border border-[var(--border)] bg-black/20 p-3">
                      <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
                        References
                      </p>
                      <ul className="space-y-2">
                        {item.refs.map((ref) => (
                          <li key={ref.url}>
                            <a
                              href={ref.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs text-[var(--sky)] transition-colors hover:text-[var(--accent)]"
                            >
                              {ref.label}
                              <span aria-hidden="true">↗</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

