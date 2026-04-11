const EducationSection = () => {
  return (
    <div id="education" className="scroll-mt-24">
      <h2 className="mb-12 flex items-center gap-4 font-headline text-4xl font-bold">
        <span className="material-symbols-outlined text-tertiary">school</span>
        Education
      </h2>

      <div className="space-y-8">
        <div className="ghost-border rounded-2xl bg-surface-container p-6">
          <div className="mb-2 flex items-start justify-between">
            <h3 className="text-lg font-bold text-on-surface">BSc (Hons) in Computing</h3>
            <span className="text-sm text-tertiary">2021 — PRESENT</span>
          </div>
          <p className="mb-4 text-on-surface-variant">Coventry University</p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded bg-surface-container-highest px-2 py-1 text-[10px] uppercase tracking-widest text-on-surface-variant">
              Current Grade: First Class
            </span>
          </div>
        </div>

        <div className="ghost-border rounded-2xl bg-surface-container p-6">
          <div className="mb-2 flex items-start justify-between">
            <h3 className="text-lg font-bold text-on-surface">L4 Diploma in Computing</h3>
            <span className="text-sm text-tertiary">COMPLETED</span>
          </div>
          <p className="text-on-surface-variant">NCC Education</p>
        </div>

        <div className="ghost-border rounded-2xl bg-surface-container p-6">
          <div className="mb-2 flex items-start justify-between">
            <h3 className="text-lg font-bold text-on-surface">Japanese Language Proficiency</h3>
            <span className="text-sm text-tertiary">CERTIFIED</span>
          </div>
          <p className="text-on-surface-variant">JLPT N4 Certificate</p>
        </div>
      </div>
    </div>
  );
}

export default EducationSection