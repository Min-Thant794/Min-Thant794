import ProjectsHeader from "../features/projects/components/ProjectsHeader";
import ProjectCard from "../features/projects/components/ProjectCard";
import TerminalSection from "../features/projects/components/TerminalSection";
import { projects } from "../features/projects/data"

const Projects = () => {
    return (
        <div className="bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary">
            <main className="mx-auto max-w-7xl px-8 pt-32">
                <ProjectsHeader />

                <section className="mb-40 space-y-40">
                {projects.map((project, index) => (
                    <ProjectCard
                    key={project.title}
                    project={project}
                    reverse={index % 2 === 1}
                    />
                ))}
                </section>

                <TerminalSection />
            </main>
        </div>
    )
}

export default Projects;