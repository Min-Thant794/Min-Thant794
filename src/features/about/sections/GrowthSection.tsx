const tags = [
  "Full-Stack Thinking",
  "Scalable Systems",
  "Performance Optimization",
];

const GrowthSection = () => {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="glass-panel flex flex-col justify-between rounded-xl p-5 sm:p-8 md:col-span-2 lg:p-10">
                <div>
                <h3 className="mb-4 font-headline text-2xl font-bold">
                    Bridging the Gap
                </h3>

                <p className="mb-6 leading-relaxed text-on-surface-variant">
                    The leap from a student to a full-stack developer was defined by my
                    first few real-world applications. No longer was I coding for a
                    grade; I was coding for accessibility, scalability, and security. I
                    realized that full-stack development is the ultimate form of digital
                    architecture.
                </p>
                </div>

                <div className="flex flex-wrap gap-3">
                {tags.map((tag) => (
                    <span
                    key={tag}
                    className="rounded-full border border-outline-variant/10 bg-surface-container-highest px-4 py-1.5 text-xs text-on-surface-variant"
                    >
                    {tag}
                    </span>
                ))}
                </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-surface-container p-5 sm:p-8 lg:p-10">
                <div className="absolute inset-0 bg-primary opacity-0 transition-opacity duration-500 group-hover:opacity-5" />

                <span
                className="material-symbols-outlined mb-6 text-4xl text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
                >
                bolt
                </span>

                <h3 className="mb-4 font-headline text-2xl font-bold">
                Kinetic Energy
                </h3>

                <p className="text-sm leading-relaxed text-on-surface-variant">
                In software, standing still is falling behind. I thrive in the rapid
                evolution of the web ecosystem, constantly absorbing new frameworks
                while respecting the fundamentals of computer science.
                </p>
            </div>
        </div>
    )
}

export default GrowthSection;
