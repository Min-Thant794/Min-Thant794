import { resumeProjects } from "../data";
import ResumeTag from "./ResumeTag";

const ResumeProjectsSection = () => {
    return (
        <section>
            <div className="mb-8 flex items-center gap-4">
                <span className="material-symbols-outlined text-3xl text-primary">
                rocket_launch
                </span>
                <h3 className="font-headline text-2xl font-bold uppercase tracking-tight">
                Selected Projects
                </h3>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {resumeProjects.map((project) => (
                <div
                    key={project.title}
                    className="rounded-xl border border-outline-variant/10 bg-surface-container p-6"
                >
                    <h4 className="mb-2 text-lg font-bold text-primary">
                    {project.title}
                    </h4>
                    <p className="mb-4 text-on-surface-variant">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <ResumeTag key={tag} label={tag} />
                    ))}
                    </div>
                </div>
                ))}
            </div>
        </section>
    )
}

export default ResumeProjectsSection;