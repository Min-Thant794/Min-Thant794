const ProjectsHeader = () => {
  return (
    <header className="mb-16 md:mb-24">
      <span className="mb-4 block font-label text-sm uppercase tracking-widest text-primary">
        Case Studies
      </span>

      <h1 className="font-headline text-4xl font-bold leading-tight text-on-surface sm:text-5xl md:text-7xl lg:text-8xl">
        Engineering{" "}
        <span className="bg-[linear-gradient(135deg,#a0ffc3_0%,#7ae6ff_100%)] bg-clip-text text-transparent">
          Impact.
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-on-surface-variant sm:text-lg md:mt-8 md:text-xl">
        Deep dives into technical architectures, problem-solving, and full-stack
        execution of complex web ecosystems.
      </p>
    </header>
  );
};

export default ProjectsHeader;
