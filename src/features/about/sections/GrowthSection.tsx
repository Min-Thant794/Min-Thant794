const tags = [
  "React Development",
  "Node.js Backend",
  "Project-Based Learning",
];

const GrowthSection = () => {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="glass-panel flex flex-col justify-between rounded-xl p-5 sm:p-8 md:col-span-2 lg:p-10">
                <div>
                <h3 className="mb-4 font-headline text-2xl font-bold">
                    Growing Through Real Projects
                </h3>

                <p className="mb-6 leading-relaxed text-on-surface-variant">
                    My growth as a developer has come from building practical projects such as my
                    Integrated Rental Booking System and a Shopping Progressive Web App developed
                    with my mentor. These projects helped me understand authentication, CRUD
                    operations, database design, API integration, and frontend user experience.
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
                Continuous Improvement
                </h3>

                <p className="text-sm leading-relaxed text-on-surface-variant">
                I am actively building full-stack applications with <span className="text-tertiary font-semibold">React</span> and <span className="text-tertiary font-semibold">Node.js</span> while
                learning <span className="text-secondary font-semibold">Java</span> for stronger backend fundamentals. My next focus is <span className="text-tertiary font-semibold">DevOps</span>,
                where I aim to understand deployment pipelines, cloud environments, and system
                scalability.
                </p>
            </div>
        </div>
    )
}

export default GrowthSection;
