const ExperienceSection = () => {
  return (
    <div id="experience" className="scroll-mt-24">
      <h2 className="mb-12 flex items-center gap-4 font-headline text-4xl font-bold">
        <span className="material-symbols-outlined text-primary">work</span>
        Experience
      </h2>

      <div className="space-y-12">
        <div className="relative pl-8 before:absolute before:bottom-0 before:left-0 before:top-2 before:w-0.5 before:bg-outline-variant">
          <div className="absolute left-[-5px] top-1.5 h-3 w-3 rounded-full bg-primary shadow-[0_0_10px_rgba(160,255,195,0.5)]" />
          <h3 className="text-xl font-bold text-on-surface">Volunteer Facilitator</h3>
          <p className="mb-2 text-sm uppercase tracking-wider text-primary">
            NVL University Graduation
          </p>
          <p className="text-on-surface-variant">
            Coordinated logistics and attendee registration for major university events,
            ensuring seamless flow and professional environment.
          </p>
        </div>

        <div className="relative pl-8 before:absolute before:bottom-0 before:left-0 before:top-2 before:w-0.5 before:bg-outline-variant">
          <div className="absolute left-[-5px] top-1.5 h-3 w-3 rounded-full bg-outline-variant" />
          <h3 className="text-xl font-bold text-on-surface">Environmental Volunteer</h3>
          <p className="mb-2 text-sm uppercase tracking-wider text-primary">
            Eco-Initiative
          </p>
          <p className="text-on-surface-variant">
            Led local cleanup drives and awareness campaigns about sustainable digital
            waste management.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection