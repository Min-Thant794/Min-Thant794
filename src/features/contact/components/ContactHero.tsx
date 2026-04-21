const ContactHero = () => {
    return (
        <header className="mb-20">
            <span className="mb-4 block font-headline text-sm uppercase tracking-[0.2em] text-primary">
                Get In Touch
            </span>

            <h1 className="mb-6 font-headline text-5xl font-bold leading-none tracking-tighter md:text-7xl">
                Let&apos;s architect the <br />
                <span className="bg-linear-to-r from-primary to-tertiary bg-clip-text text-transparent">
                next generation
                </span>{" "}
                of web.
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-on-surface-variant">
                Whether you have a specific project in mind or just want to chat about
                system architecture and kinetic design, my inbox is always open.
            </p>
        </header>
    )
}

export default ContactHero;