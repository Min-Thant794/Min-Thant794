import profileImage from "../../../assets/images/presenterAtPSBAcademy.png"

const HeroSection = () => {
    return (
        <section
        id="about"
        className="mb-20 grid grid-cols-1 items-end gap-10 py-12 md:mb-28 md:py-16 lg:mb-32 lg:grid-cols-12 lg:gap-12 lg:py-20"
        >
            <div className="lg:col-span-8">
                <span className="mb-4 block font-label text-xs uppercase tracking-[0.2em] text-primary">
                    Computer Science Graduate • Full-Stack Developer
                    </span>

                    <h1 className="mb-8 font-headline text-4xl font-bold leading-tight sm:text-3xl md:text-5xl lg:text-7xl">
                    Building my path in <br />
                    <span className="text-glow text-primary">Full-Stack</span> Development.
                    </h1>

                    <p className="max-w-2xl font-body text-base leading-relaxed text-on-surface-variant sm:text-lg md:text-xl">
                    I am a Computer Science graduate focused on React, Node.js, Express, and
                    MongoDB. My journey is built through academic projects, mentor-guided
                    development, and continuous practice in building real-world web applications.
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
