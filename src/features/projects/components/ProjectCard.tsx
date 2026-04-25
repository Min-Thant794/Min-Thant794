import ProjectBadge from "./ProjectBadge";
import ProjectInfoBox from "./ProjectInfoBox";
import type { Project } from "../types";
import ProjectImageCarousel from "../../../components/ui/ProjectImageCarousel";

type ProjectCardProps = {
  project: Project;
  reverse?: boolean;
};

const ProjectCard = ({ project, reverse = false }: ProjectCardProps) => {
  return (
    <section className="mb-24 md:mb-32 lg:mb-40">
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
        <div
          className={
            reverse
              ? "order-2 flex flex-col justify-center lg:order-1 lg:col-span-5"
              : "lg:col-span-7"
          }
        >
          {!reverse ? (
            <ProjectPreview project={project} />
          ) : (
            <ProjectContent project={project} tertiaryBadges />
          )}
        </div>

        <div
          className={
            reverse
              ? "order-1 lg:order-2 lg:col-span-7"
              : "flex flex-col justify-center lg:col-span-5"
          }
        >
          {!reverse ? (
            <ProjectContent project={project} />
          ) : (
            <ProjectPreview project={project} />
          )}
        </div>
      </div>
    </section>
  );
};

type ProjectPreviewProps = {
  project: Project;
};

const ProjectPreview = ({ project }: ProjectPreviewProps) => {
  const images = project.images ?? [];
  const shouldShowPlaceholder =
    project.usePlaceholder || !project.images || project.images.length === 0;

  return (
    <div className="group relative">
      <div className="absolute -inset-1 rounded-xl bg-[linear-gradient(135deg,#a0ffc3_0%,#7ae6ff_100%)] opacity-10 blur transition duration-500 group-hover:opacity-20" />

      <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-surface-container-lowest">
        {shouldShowPlaceholder ? (
          <ProjectPlaceholder />
        ) : (
          <ProjectImageCarousel
            images={images}
            alt={project.imageAlt || project.title}
            className="h-full"
          />
        )}

        <div className="absolute inset-0 z-10 bg-linear-to-t from-background/80 to-transparent" />

        <ProjectLinks
          liveDemoUrl={project.liveDemoUrl}
          githubUrl={project.githubUrl}
        />
      </div>
    </div>
  );
};

const ProjectPlaceholder = () => {
  return (
    <div className="z-0 flex flex-col items-center font-label text-on-surface-variant/30 opacity-80 transition-transform duration-700 group-hover:scale-105">
      <span className="material-symbols-outlined mb-4 text-6xl">forum</span>
      <span className="text-xl uppercase tracking-widest">Messaging UI</span>
    </div>
  );
};

type ProjectLinksProps = {
  liveDemoUrl?: string;
  githubUrl?: string;
};

const ProjectLinks = ({ liveDemoUrl, githubUrl }: ProjectLinksProps) => {
  if (!liveDemoUrl && !githubUrl) return null;

  return (
    <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap gap-3 sm:bottom-6 sm:left-6 sm:right-auto sm:gap-4">
      {liveDemoUrl && (
        <a
          href={liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg border border-outline-variant/15 bg-surface-container-high/90 px-3 py-2 text-primary backdrop-blur transition-all hover:bg-primary hover:text-on-primary sm:px-4"
        >
          <span className="material-symbols-outlined text-sm">
            rocket_launch
          </span>
          <span className="font-label text-sm font-bold">Live Demo</span>
        </a>
      )}

      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg border border-outline-variant/15 bg-surface-container-high/90 px-3 py-2 text-on-surface backdrop-blur transition-all hover:bg-surface-variant sm:px-4"
        >
          <span className="material-symbols-outlined text-sm">code</span>
          <span className="font-label text-sm font-bold">GitHub</span>
        </a>
      )}
    </div>
  );
};

type ProjectContentProps = {
  project: Project;
  tertiaryBadges?: boolean;
};

const ProjectContent = ({
  project,
  tertiaryBadges = false,
}: ProjectContentProps) => {
  return (
    <div className="flex flex-col justify-center">
      {project.isWip && <ProjectStatusBadge label="Work in Progress" />}

      <h2 className="mb-6 font-headline text-3xl font-bold leading-tight text-on-surface sm:text-4xl">
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
  );
};

type ProjectStatusBadgeProps = {
  label: string;
};

const ProjectStatusBadge = ({ label }: ProjectStatusBadgeProps) => {
  return (
    <div className="mb-4 flex items-center gap-2">
      <span className="flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-label text-[10px] font-bold uppercase tracking-widest text-primary">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        {label}
      </span>
    </div>
  );
};

export default ProjectCard;
