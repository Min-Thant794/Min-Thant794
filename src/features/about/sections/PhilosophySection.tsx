type PhilosophyCardProps = {
  icon: string;
  title: string;
  description: string;
};

const PhilosophyCard = ({ icon, title, description }: PhilosophyCardProps) => {
  return (
    <div className="space-y-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container-high">
        <span className="material-symbols-outlined text-primary">{icon}</span>
      </div>

      <h4 className="font-headline text-xl font-bold">{title}</h4>

      <p className="text-sm leading-relaxed text-on-surface-variant">
        {description}
      </p>
    </div>
  );
};

const PhilosophySection = () => {
    return (
        <div className="relative overflow-hidden rounded-xl bg-surface-container-low p-5 sm:p-8 lg:p-20">
            <div className="absolute top-0 right-0 h-full w-1/3 bg-linear-to-l from-primary/5 to-transparent" />

            <div className="relative z-10 max-w-3xl">
                <span className="mb-4 block font-label text-xs uppercase tracking-[0.2em] text-tertiary">
                  Development Mindset
                </span>

                <h3 className="mb-8 font-headline text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                  Focused on building{" "}
                  <span className="italic text-primary">practical and user-friendly software.</span>
                </h3>

                <div className="grid gap-10 md:grid-cols-2">
                <PhilosophyCard
                  icon="psychology"
                  title="Purpose Before Features"
                  description="I try to understand the real problem before adding features. This helps me build applications that are useful, clear, and easier for users to interact with."
                />

                <PhilosophyCard
                  icon="terminal"
                  title="Learning Through Building"
                  description="Most of my growth comes from creating projects, fixing errors, improving code structure, and learning how frontend and backend systems work together."
                />
                </div>
            </div>
        </div>
    )
}

export default PhilosophySection;
