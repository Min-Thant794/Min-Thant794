const ExperienceSection = () => {
  return (
    <div id="experience" className="scroll-mt-24">
      <h2 className="mb-10 flex items-start gap-3 font-headline text-3xl font-bold leading-tight sm:items-center sm:gap-4 sm:text-4xl md:mb-12">
        <span className="material-symbols-outlined text-primary">work</span>
        Experience & Involvement
      </h2>

      <div className="space-y-12">

        {/* Car Rental System */}
        <div className="relative pl-8 before:absolute before:bottom-0 before:left-0 before:top-2 before:w-0.5 before:bg-outline-variant">
          <div className="absolute -left-1.25 top-1.5 h-3 w-3 rounded-full bg-primary shadow-[0_0_10px_rgba(160,255,195,0.5)]" />
          <h3 className="text-xl font-bold text-on-surface">
            Integrated Rental Booking System (BSc Individual Project)
          </h3>
          <p className="mb-2 text-sm uppercase tracking-wider text-primary">
            Full-Stack Development
          </p>
          <p className="text-on-surface-variant">
            Designed and developed a full-stack car rental platform with role-based access for admin and customers, including booking management, user verification, and real-time availability updates. Implemented RESTful APIs, authentication, and dynamic dashboard metrics using React, Node.js, Express, and MongoDB.
          </p>
        </div>

        {/* Shopping PWA */}
        <div className="relative pl-8 before:absolute before:bottom-0 before:left-0 before:top-2 before:w-0.5 before:bg-outline-variant">
          <div className="absolute -left-1.25 top-1.5 h-3 w-3 rounded-full bg-primary shadow-[0_0_10px_rgba(160,255,195,0.5)]" />
          <h3 className="text-xl font-bold text-on-surface">
            Shopping PWA (Mentored Project)
          </h3>
          <p className="mb-2 text-sm uppercase tracking-wider text-primary">
            Full-Stack Development
          </p>
          <p className="text-on-surface-variant">
            Built a full-stack progressive web application under mentorship with JWT authentication, offline support, and optimized performance through caching and responsive design. Collaborated on backend architecture and real-world development practices.
          </p>
        </div>

        {/* Volunteer */}
        <div className="relative pl-8 before:absolute before:bottom-0 before:left-0 before:top-2 before:w-0.5 before:bg-outline-variant">
          <div className="absolute -left-1.25 top-1.5 h-3 w-3 rounded-full bg-outline-variant" />
          <h3 className="text-xl font-bold text-on-surface">
            Volunteer Facilitator
          </h3>
          <p className="mb-2 text-sm uppercase tracking-wider text-primary">
            NVL University Graduation Ceremony
          </p>
          <p className="text-on-surface-variant">
            Assisted with event coordination, attendee guidance, and on-site logistics, contributing to a smooth and organized event experience.
          </p>
        </div>

      </div>
    </div>
  );
}

export default ExperienceSection;