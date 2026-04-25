const HeroHeader = () => {
    return (
        <header className="relative mb-16 md:mb-24" id="skills">
            <div className="absolute -left-20 -top-20 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />

            <span className="font-label text-primary tracking-[0.2em] uppercase text-xs mb-4 block">
                Engineered Expertise
            </span>

            <h1 className="mb-6 font-headline text-4xl font-bold leading-tight sm:text-5xl md:text-7xl lg:text-8xl">
                Technical <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-tertiary">
                Ecosystem
                </span>
            </h1>

            <p className="max-w-2xl text-on-surface-variant text-lg leading-relaxed">
                A breakdown of the technologies and methodologies I use to architect
                digital experiences. From low-level logic to high-fidelity interfaces.
            </p>
        </header>
    )
}

export default HeroHeader;
