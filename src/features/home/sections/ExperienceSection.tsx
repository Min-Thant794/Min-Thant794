const ExperienceSection = () => {
  return (
    <div id="experience" className="scroll-mt-24">
      <h2 className="mb-10 flex items-start gap-3 font-headline text-3xl font-bold leading-tight sm:items-center sm:gap-4 sm:text-4xl md:mb-12">
        <span className="material-symbols-outlined text-primary">work</span>
        Experience & Involvement
      </h2>

      <div className="space-y-12">
        <div className="relative pl-8 before:absolute before:bottom-0 before:left-0 before:top-2 before:w-0.5 before:bg-outline-variant">
          <div className="absolute -left-1.25 top-1.5 h-3 w-3 rounded-full bg-primary shadow-[0_0_10px_rgba(160,255,195,0.5)]" />
          <h3 className="text-xl font-bold text-on-surface">Shopping PWA (Mentored Project)</h3>
          <p className="mb-2 text-sm uppercase tracking-wider text-primary">
            Personal Development
          </p>
          <p className="text-on-surface-variant">
            Developed a full-stack shopping PWA under mentorship with offline support, JWT authentication, and optimized performance through caching and responsive design.
          </p>
        </div>

        <div className="relative pl-8 before:absolute before:bottom-0 before:left-0 before:top-2 before:w-0.5 before:bg-outline-variant">
          <div className="absolute -left-1.25 top-1.5 h-3 w-3 rounded-full bg-outline-variant" />
          <h3 className="text-xl font-bold text-on-surface">Volunteer Facilitator</h3>
          <p className="mb-2 text-sm uppercase tracking-wider text-primary">
            NVL University Graduation Ceremony
          </p>
          <p className="text-on-surface-variant">
            Assisted with event coordination, attendee guidance, and on-site logistics during the university graduation ceremony, contributing to an organized and smooth event experience.
          </p>
        </div>

        <div className="relative pl-8 before:absolute before:bottom-0 before:left-0 before:top-2 before:w-0.5 before:bg-outline-variant">
          <div className="absolute -left-1.25 top-1.5 h-3 w-3 rounded-full bg-outline-variant" />
          <h3 className="text-xl font-bold text-on-surface">Environmental Volunteer</h3>
          <p className="mb-2 text-sm uppercase tracking-wider text-primary">
            Keep Our Environment Clean Activity
          </p>
          <p className="text-on-surface-variant">
            Contributed to community environmental initiatives through cleanup participation and awareness efforts, strengthening teamwork, responsibility, and community engagement skills.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection
