const EducationSection = () => {
  return (
    <div id="education" className="scroll-mt-24">
      <h2 className="mb-10 flex items-center gap-4 font-headline text-3xl font-bold sm:text-4xl md:mb-12">
        <span className="material-symbols-outlined text-tertiary">school</span>
        Education
      </h2>

      <div className="space-y-8">
        <div className="ghost-border grid gap-4 rounded-2xl bg-surface-container p-5 sm:grid-cols-6 sm:p-6">
          <div className="sm:col-span-5">
            <div className="mb-2 flex items-start justify-between">
              <h3 className="text-lg font-bold text-on-surface">BSc (Hons) in Computing</h3>
            </div>
            <p className="text-on-surface-variant">Coventry University</p>
          </div>
          <div className="flex flex-wrap justify-between gap-3 sm:flex-col sm:items-end">
            <div className="text-sm text-tertiary">COMPLETED</div>
            <div className="text-sm tracking-wide">2024-2026</div>
          </div>
        </div>

        <div className="ghost-border grid gap-4 rounded-2xl bg-surface-container p-5 sm:grid-cols-6 sm:p-6">
          <div className="sm:col-span-5">
            <div className="mb-2 flex items-start justify-between">
              <h3 className="text-lg font-bold text-on-surface">L4 Diploma in Computing</h3>
            </div>
            <p className="text-on-surface-variant">NCC Education</p>
          </div>
          <div className="flex flex-wrap justify-between gap-3 sm:flex-col sm:items-end">
              <div className="text-sm text-tertiary">COMPLETED</div>
              <div className="text-sm tracking-wide">2023-2024</div>
            </div>
        </div>

        <div className="ghost-border grid gap-4 rounded-2xl bg-surface-container p-5 sm:grid-cols-6 sm:p-6">
          <div className="sm:col-span-5">
            <div className="mb-2 flex items-start justify-between">
              <h3 className="text-lg font-bold text-on-surface">Japanese Language Proficiency</h3>
            </div>
            <p className="text-on-surface-variant">JLPT N4 Certificate</p>
          </div>
          <div className="flex flex-wrap justify-between gap-3 sm:flex-col sm:items-end">
              <div className="text-sm text-tertiary">CERTIFIED</div>
              <div className="text-sm tracking-wide">2022</div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default EducationSection
