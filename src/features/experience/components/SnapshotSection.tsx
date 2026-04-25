const SnapshotSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-20 lg:px-8">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="flex flex-col justify-between rounded-3xl border border-outline-variant/10 bg-surface-container p-5 sm:p-8 md:col-span-2">
          <div>
            <h4 className="mb-4 font-headline text-2xl font-bold">
              Thesis: Cloud Computing Optimization
            </h4>
            <p className="leading-relaxed text-on-surface-variant">
              During my final year at Coventry University, I engineered a
              framework for reducing latency in distributed systems using edge
              computing principles.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <span className="flex items-center gap-2 font-label text-sm text-primary">
              <span className="material-symbols-outlined">description</span>
              Read Abstract
            </span>
          </div>
        </div>

        <div className="group flex cursor-pointer flex-col justify-between rounded-3xl bg-primary p-5 transition-colors hover:bg-primary/90 sm:p-8">
          <span className="material-symbols-outlined text-4xl text-on-primary-fixed">
            terminal
          </span>

          <div className="text-on-primary-fixed">
            <h4 className="font-headline text-xl font-bold">Skills Matrix</h4>
            <p className="mt-2 text-sm opacity-80">
              View technical stack proficiency and architectural expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SnapshotSection;
