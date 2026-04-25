const techList = ["REST APIs", "Auth (JWT)", "MongoDB", "Postman"];

const BackendApiCard = () => {
    return (
        <section className="rounded-xl border border-outline-variant/10 bg-surface-container-low p-5 sm:p-8 md:col-span-6">
            <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                    <span className="material-symbols-outlined">
                        database
                    </span>
                </div>
                <h2 className="font-headline text-xl font-bold sm:text-2xl">
                    Backend &amp; API
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col items-start gap-6 rounded-xl border border-outline-variant/5 bg-surface-container-lowest p-5 sm:flex-row sm:p-6">
                    <div className="grow">
                        <h3 className="font-headline font-bold text-lg mb-1">
                            Node.js + Express
                        </h3>
                        <p className="text-sm text-on-surface-variant">
                            Scalable server-side logic and RESTful architecture.
                        </p>
                    </div>

                    <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-surface-container-highest">
                        <svg className="w-full h-full -rotate-90 absolute">
                            <circle
                            className="text-secondary-container/20"
                            cx={32}
                            cy={32}
                            r={28}
                            fill="transparent"
                            stroke="currentColor"
                            strokeWidth={4}
                            />
                            <circle
                            className="text-secondary"
                            cx={32}
                            cy={32}
                            r={28}
                            fill="transparent"
                            stroke="currentColor"
                            strokeWidth={4}
                            strokeDasharray={175}
                            strokeDashoffset={35}
                            />
                        </svg>
                        <span className="text-xs font-label">
                            80%
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex-1 h-px bg-outline-variant/20"/>
                    <span className="text-[10px] font-label text-outline-variant uppercase tracking-widest">
                        Technologies
                    </span>
                    <div className="flex-1 h-px bg-outline-variant/20"/>
                </div>

                <div className="flex flex-wrap gap-2">
                    {
                        techList.map((tech) => (
                            <span
                            key={tech}
                            className="px-4 py-2 rounded-full bg-surface-container-highest text-sm font-label hover:text-on-primary transition-all cursor-default"
                            >
                                {tech}
                            </span>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default BackendApiCard;
