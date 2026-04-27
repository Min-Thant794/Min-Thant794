import volunteerImage from "../../../assets/images/worldCleanupDayMyanmar.png"

const AdvocacySection = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-surface-container-low p-5 sm:p-8 lg:p-12">
      <div className="absolute right-0 top-0 hidden p-12 opacity-10 sm:block">
        <span
          className="material-symbols-outlined text-[160px] text-primary"
          data-weight="fill"
        >
          volunteer_activism
        </span>
      </div>

      <div className="relative z-10">
        <span className="mb-2 block font-label text-xs uppercase tracking-widest text-primary">
          Community & Contribution
        </span>

        <h2 className="mb-8 font-headline text-3xl font-bold sm:text-4xl">
          Volunteering & Community Involvement
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <span className="material-symbols-outlined text-primary">
                  school
                </span>
              </div>

              <div>
                <h4 className="mb-2 font-headline text-xl font-bold">
                  University Event Support
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Volunteered at NVL University&apos;s graduation ceremony,
                  supporting event activities and helping the university community.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-tertiary/10">
                <span className="material-symbols-outlined text-tertiary">
                  eco
                </span>
              </div>

              <div>
                <h4 className="mb-2 font-headline text-xl font-bold">
                  Environmental Activity
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Participated in the “World Cleanup Day Myanmar” activity,
                  contributing to community awareness and environmental responsibility.
                </p>
              </div>
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-2xl">
            <img
              src={volunteerImage}
              alt="Community and environmental volunteering"
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