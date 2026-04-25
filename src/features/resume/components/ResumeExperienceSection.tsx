import { resumeExperienceItems } from "../data";

const ResumeExperienceSection = () => {
    return (
        <section>
            <div className="mb-8 flex items-center gap-4">
                <span className="material-symbols-outlined text-3xl text-primary">
                work
                </span>
                <h3 className="font-headline text-xl font-bold uppercase sm:text-2xl">
                Experience
                </h3>
            </div>

            <div className="space-y-12">
                {resumeExperienceItems.map((item) => (
                <div
                    key={item.title + item.company}
                    className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-1 before:bg-surface-container-highest before:content-['']"
                >
                    <div
                    className={`absolute -left-1 top-2 h-3 w-3 rounded-full ${
                        item.isCurrent ? "bg-primary" : "bg-outline"
                    }`}
                    />

                    <div className="mb-2 flex flex-col items-start gap-3 sm:flex-row sm:justify-between sm:gap-4">
                    <h4 className="text-xl font-bold text-on-surface">{item.title}</h4>
                    <span
                        className={`w-fit shrink-0 rounded-full px-3 py-1 text-center font-label text-xs ${
                        item.isCurrent
                            ? "bg-surface-container-highest text-primary"
                            : "bg-surface-container-highest text-on-surface-variant"
                        }`}
                    >
                        {item.period}
                    </span>
                    </div>

                    <p className="mb-4 font-medium text-tertiary">{item.company}</p>

                    <ul className="ml-4 list-outside list-disc space-y-3 leading-relaxed text-on-surface-variant">
                    {item.points.map((point) => (
                        <li key={point}>{point}</li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>
        </section>
    )
}

export default ResumeExperienceSection;
