import type { TimelineItemType } from "../types";

type TimelineItemProps = {
  item: TimelineItemType;
};

const TimelineItem = ({ item }: TimelineItemProps) => {
  const isLeft = item.side === "left";
  const dotClass =
    item.dotColor === "tertiary"
      ? "bg-tertiary shadow-[0_0_15px_rgba(122,230,255,0.5)]"
      : "bg-primary shadow-[0_0_15px_rgba(160,255,195,0.5)]";

  return (
    <section className="relative mb-32">
      <div className="flex flex-col items-center md:flex-row">
        {isLeft ? (
          <>
            <div className="order-2 mb-8 md:order-1 md:mb-0 md:w-1/2 md:pr-16 md:text-right">
              <span
                className={`mb-2 block font-label text-xs uppercase tracking-widest ${
                  item.dotColor === "tertiary" ? "text-tertiary" : "text-primary"
                }`}
              >
                {item.label}
              </span>

              <h3 className="mb-4 font-headline text-3xl font-bold text-on-surface">
                {item.title}
              </h3>

              <p className="leading-relaxed text-on-surface-variant">
                {item.description}
              </p>

              {item.badges && (
                <div className="mt-6 flex flex-wrap gap-2 md:justify-end">
                  {item.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full bg-surface-container-highest px-3 py-1 font-label text-xs text-on-surface"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div
              className={`absolute left-0 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background md:left-1/2 md:block md:transform ${dotClass}`}
            />

            <div className="order-1 mb-4 md:order-2 md:mb-0 md:w-1/2 md:pl-16">
              <div className="font-headline text-5xl font-bold tracking-tighter text-outline-variant/20">
                {item.year}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mb-4 md:mb-0 md:w-1/2 md:pr-16 md:text-right">
              <div className="font-headline text-5xl font-bold tracking-tighter text-outline-variant/20">
                {item.year}
              </div>
            </div>

            <div
              className={`absolute left-0 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background md:left-1/2 md:block md:transform ${dotClass}`}
            />

            <div className="md:w-1/2 md:pl-16">
              <span
                className={`mb-2 block font-label text-xs uppercase tracking-widest ${
                  item.dotColor === "tertiary" ? "text-primary" : "text-tertiary"
                }`}
              >
                {item.label}
              </span>

              <h3 className="mb-4 font-headline text-3xl font-bold text-on-surface">
                {item.title}
              </h3>

              <div className="rounded-xl border border-outline-variant/10 bg-surface-container-low p-6 transition-colors hover:border-primary/30">
                <p className="leading-relaxed text-on-surface-variant">
                  {item.description}
                </p>

                {item.highlight && (
                  <div className="mt-4 flex items-center gap-2 font-label text-sm text-primary">
                    <span className="material-symbols-outlined text-sm">
                      verified
                    </span>
                    <span>{item.highlight}</span>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default TimelineItem;