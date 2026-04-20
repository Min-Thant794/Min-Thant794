const ProjectsHeader = () => {
    return (
        <header className="mb-24">
            <span className="mb-4 block font-label text-sm uppercase tracking-widest text-primary">
                Case Studies
            </span>

            <h1 className="font-headline text-6xl font-bold leading-none tracking-tighter text-on-surface md:text-8xl">
                Engineering{" "}
                <span className="bg-[linear-gradient(135deg,#a0ffc3_0%,#7ae6ff_100%)] bg-clip-text text-transparent">
                Impact.
                </span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-on-surface-variant">
                Deep dives into technical architectures, problem-solving, and full-stack
                execution of complex web ecosystems.
            </p>
        </header>
    )
}

export default ProjectsHeader;