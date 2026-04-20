import ProjectBadge from "./ProjectBadge";
import ProjectInfoBox from "./ProjectInfoBox";
import type { Project } from "../types";

type ProjectCardProps = {
    project: Project;
    reverse?: boolean;
}

const ProjectCard = ({ project, reverse = false }: ProjectCardProps) => {
    return (
        <section>
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
                <div
                className={`${
                    reverse
                    ? "order-2 lg:order-1 lg:col-span-5"
                    : "lg:col-span-7"
                }`}
                >
                {!reverse ? (
                    <ProjectImage project={project} />
                ) : (
                    <ProjectContent project={project} tertiaryBadges />
                )}
                </div>

                <div
                className={`${
                    reverse
                    ? "order-1 lg:order-2 lg:col-span-7"
                    : "lg:col-span-5"
                } flex flex-col justify-center`}
                >
                {!reverse ? (
                    <ProjectContent project={project} />
                ) : (
                    <ProjectImage project={project} />
                )}
                </div>
            </div>
        </section>
    )
}

type ProjectImageProps = {
    project: Project;
};

const ProjectImage = ({ project } : ProjectImageProps) => {
    return (
        <div className="group relative">
            <div className="absolute -inset-1 rounded-xl bg-[linear-gradient(135deg,#a0ffc3_0%,#7ae6ff_100%)] blur opacity-10 transition duration-500 group-hover:opacity-20" />
            <div className="relative aspect-video overflow-hidden rounded-xl bg-surface-container-lowest">
                <img
                src={project.image}
                alt={project.imageAlt}
                className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />

                <div className="absolute bottom-6 left-6 flex gap-4">
                <a
                    href={project.liveDemoUrl}
                    className="flex items-center gap-2 rounded-lg border border-outline-variant/20 bg-surface-container-high/90 px-4 py-2 text-primary backdrop-blur transition-all hover:bg-primary hover:text-on-primary"
                >
                    <span className="material-symbols-outlined text-sm">
                    rocket_launch
                    </span>
                    <span className="font-label text-sm font-bold">Live Demo</span>
                </a>

                <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 rounded-lg border border-outline-variant/20 bg-surface-container-high/90 px-4 py-2 text-on-surface backdrop-blur transition-all hover:bg-surface-container-highest"
                >
                    <span className="material-symbols-outlined text-sm">code</span>
                    <span className="font-label text-sm font-bold">GitHub</span>
                </a>
                </div>
            </div>
        </div>
    )
}

type ProjectContentProps = {
    project: Project;
    tertiaryBadges?: boolean;
}

const ProjectContent = ({ project, tertiaryBadges = false} : ProjectContentProps) => {
    return (
        <div className="flex flex-col justify-center">
            <h2 className="mb-6 font-headline text-4xl font-bold text-on-surface">
                {project.title}
            </h2>

            <div className="mb-8 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                <ProjectBadge
                    key={tech}
                    label={tech}
                    accent={tertiaryBadges ? "tertiary" : "primary"}
                />
                ))}
            </div>

            <div className="space-y-6">
                {project.info.map((item) => (
                <ProjectInfoBox key={item.heading} item={item} />
                ))}
            </div>
        </div>
    )
}

export default ProjectCard;