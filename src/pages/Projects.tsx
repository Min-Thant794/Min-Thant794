import ProjectsHeader from "../features/projects/components/ProjectsHeader";
import ProjectCard from "../features/projects/components/ProjectCard";
import { projects } from "../features/projects/data";

const Projects = () => {
  return (
    <div className="bg-background font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <main className="mx-auto max-w-7xl px-8 pt-32">
        <ProjectsHeader />

        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            reverse={index % 2 === 1}
          />
        ))}
      </main>
    </div>
  );
};

export default Projects;