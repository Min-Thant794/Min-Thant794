const ProjectsHeader = () => {
  return (
    <header className="mb-16 md:mb-24">
      <span className="mb-4 block font-label text-sm uppercase tracking-widest text-primary">
        Featured Projects
      </span>

      <h1 className="font-headline text-4xl font-bold leading-tight text-on-surface sm:text-5xl md:text-7xl lg:text-8xl">
        Practical{" "}
        <span className="bg-[linear-gradient(135deg,#a0ffc3_0%,#7ae6ff_100%)] bg-clip-text text-transparent">
          Build.
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-on-surface-variant sm:text-lg md:mt-8 md:text-xl">
        A collection of projects where I applied different technologies and tools
        to build real-world solutions, focusing on functionality, user experience,
        and clean design.
      </p>
    </header>
  );
};

export default ProjectsHeader;
