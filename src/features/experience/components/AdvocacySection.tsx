const AdvocacySection = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-surface-container-low p-5 sm:p-8 lg:p-12">
      <div className="absolute right-0 top-0 hidden p-12 opacity-10 sm:block">
        <span
          className="material-symbols-outlined text-[160px] text-primary"
          data-weight="fill"
        >
          eco
        </span>
      </div>

      <div className="relative z-10">
        <span className="mb-2 block font-label text-xs uppercase tracking-widest text-primary">
          Community & Earth
        </span>

        <h2 className="mb-8 font-headline text-3xl font-bold sm:text-4xl">
          Environmental Advocacy
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <span className="material-symbols-outlined text-primary">
                  forest
                </span>
              </div>
              <div>
                <h4 className="mb-2 font-headline text-xl font-bold">
                  Sustainable Initiatives
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Organized and participated in local reforestation projects and
                  plastic-free campaigns within university grounds.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-tertiary/10">
                <span className="material-symbols-outlined text-tertiary">
                  recycling
                </span>
              </div>
              <div>
                <h4 className="mb-2 font-headline text-xl font-bold">
                  Technical Efficiency
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Advocating for green coding by optimizing software to reduce
                  server energy consumption and digital carbon footprints.
                </p>
              </div>
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-2xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD858Q1Sx1gnGuiyMecHmUjlXZiEZi84mPHpVH_FndBKhDSf_5AnMa3B5-dDqiX9s1yf8G-Sh3WeFx_83XQidrTXXJkftVkv4Bw3Xsp-_ANofCzOXOCI-CV4G71KgIpz1Xhb6jwWbfoB5i8kN8MHYikk29lqxB98VtgZ7o_arK6j1AGdAWJjlfaccpOLcavcqhAuTINmCKi6sUJYd9kJ-e7GPkOmz9JMu0DkHsx_4uLIqmX7d7_3mQ6OPWQ4q4kHAJM7tSv8wwSXds"
              alt="Lush green forest floor with soft morning light"
              className="h-full w-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-linear-to-t from-surface-container-low to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvocacySection;
