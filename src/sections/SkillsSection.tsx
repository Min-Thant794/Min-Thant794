const SkillsSection = () => {
  return (
    <section id="skills" className="scroll-mt-24 py-32">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-20">
          <h2 className="mb-4 font-headline text-4xl font-bold md:text-5xl">
            Technical Arsenal
          </h2>
          <p className="max-w-2xl text-on-surface-variant">
            A focused collection of technologies I use to bring digital ideas to life.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="ghost-border group rounded-2xl bg-surface-container p-8 transition-all hover:bg-surface-container-high">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined">responsive_layout</span>
            </div>
            <h3 className="mb-4 font-headline text-xl font-bold">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "JavaScript", "Tailwind", "HTML/CSS"].map((item) => (
                <span key={item} className="rounded-full bg-surface-container-highest px-3 py-1 text-xs uppercase tracking-wider text-on-surface-variant">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="ghost-border group rounded-2xl bg-surface-container p-8 transition-all hover:bg-surface-container-high">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-tertiary/10 text-tertiary transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined">database</span>
            </div>
            <h3 className="mb-4 font-headline text-xl font-bold">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Express", "REST APIs", "MongoDB"].map((item) => (
                <span key={item} className="rounded-full bg-surface-container-highest px-3 py-1 text-xs uppercase tracking-wider text-on-surface-variant">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="ghost-border group rounded-2xl bg-surface-container p-8 transition-all hover:bg-surface-container-high">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined">terminal</span>
            </div>
            <h3 className="mb-4 font-headline text-xl font-bold">Programming</h3>
            <div className="flex flex-wrap gap-2">
              {["JS/ES6+", "Python", "Java SE"].map((item) => (
                <span key={item} className="rounded-full bg-surface-container-highest px-3 py-1 text-xs uppercase tracking-wider text-on-surface-variant">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="ghost-border group rounded-2xl bg-surface-container p-8 transition-all hover:bg-surface-container-high">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-on-surface-variant/10 text-on-surface-variant transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined">build</span>
            </div>
            <h3 className="mb-4 font-headline text-xl font-bold">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {["Git", "Figma", "VS Code", "Unity"].map((item) => (
                <span key={item} className="rounded-full bg-surface-container-highest px-3 py-1 text-xs uppercase tracking-wider text-on-surface-variant">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection