import profileImage from "../../../assets/images/presenterAtPSBAcademy.png"

const HeroSection = () => {
    return (
        <section
        id="about"
        className="mb-20 grid grid-cols-1 items-end gap-10 py-12 md:mb-28 md:py-16 lg:mb-32 lg:grid-cols-12 lg:gap-12 lg:py-20"
        >
            <div className="lg:col-span-8">
                <span className="mb-4 block font-label text-xs uppercase tracking-[0.2em] text-primary">
                Architecting Digital Experiences
                </span>

                <h1 className="mb-8 font-headline text-4xl font-bold leading-tight sm:text-5xl md:text-7xl lg:text-8xl">
                The Journey of <br />
                <span className="text-glow text-primary">Full-Stack</span> Focus.
                </h1>

                <p className="max-w-2xl font-body text-base leading-relaxed text-on-surface-variant sm:text-lg md:text-xl">
                Bridging the gap between academic theory and technical reality. A look
                into the evolution of an engineer committed to solving complex
                problems through elegant code.
                </p>
            </div>

            <div className="hidden lg:col-span-4 lg:block">
                <div className="glass-panel aspect-square overflow-hidden rounded-xl p-2">
                <img
                    src={profileImage}
                    alt="Professional portrait of Min Thant Tun"
                    className="h-full w-full rounded-lg object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
                </div>
            </div>
        </section>
    )
}

export default HeroSection;
