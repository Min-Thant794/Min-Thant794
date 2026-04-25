import SkillProgressBar from "../../../components/ui/SkillProgressBar";

const techList = ["REST APIs", "Auth (JWT)", "MongoDB", "Supabase", "Redis", "Socket.IO", "Postman"];

const BackendApiCard = () => {
    return (
        <section className="group relative overflow-hidden rounded-xl border border-outline-variant/10 bg-surface-container-low p-5 sm:p-8 md:col-span-8">
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
                <SkillProgressBar
                title="Node.js + Express"
                description="Scalable server-side logic and RESTful architecture"
                />

                <div className="flex items-center gap-4">
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
