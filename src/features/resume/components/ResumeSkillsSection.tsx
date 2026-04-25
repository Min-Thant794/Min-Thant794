import { resumeSkillGroups } from "../data";

const ResumeSkillsSection = () => {
    return (
        <section>
            <div className="mb-8 flex items-center gap-4">
                <span className="material-symbols-outlined text-3xl text-primary">
                terminal
                </span>
                <h3 className="font-headline text-xl font-bold uppercase sm:text-2xl">
                Technical Skills
                </h3>
            </div>

            <div className="space-y-6">
                {resumeSkillGroups.map((group) => (
                <div key={group.title}>
                    <h4 className="mb-4 font-label text-xs uppercase tracking-widest text-on-surface-variant">
                    {group.title}
                    </h4>

                    <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                        <span
                        key={item}
                        className="rounded-full border border-outline-variant/10 bg-surface-container-highest px-3 py-1.5 text-xs font-medium text-on-surface"
                        >
                        {item}
                        </span>
                    ))}
                    </div>
                </div>
                ))}
            </div>
        </section>
    )
}

export default ResumeSkillsSection;
