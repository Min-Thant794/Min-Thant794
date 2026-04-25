import SkillProgressBar from "../../../components/ui/SkillProgressBar";
import TechBadge from "../../../components/ui/TechBadge";

const FrontendArchitecctureCard = () => {
  return (
    <section className="group relative overflow-hidden rounded-xl border border-outline-variant/10 bg-surface-container-low p-5 sm:p-8 md:col-span-8">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-10 transition-opacity">
            <span className="material-symbols-outlined text-9xl">
                terminal
            </span>
        </div>

        <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined">
                    web
                </span>
            </div>
            <h2 className="font-headline text-xl font-bold sm:text-2xl">
                Frontend Architecture
            </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="space-y-6">
                <SkillProgressBar
                title="React Ecosystem"
                percentage={95}
                description="State management, hooks, and component lifecycles."
                />
                <SkillProgressBar
                title="Tailwind CSS"
                percentage={90}
                description="Utility-first styling and responsive design systems."
                />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <TechBadge
                    title="HTML5"
                    description="Semantic structure and accessibility."
                />
                <TechBadge
                    title="CSS3"
                    description="Flex, Grid, and fluid layouts."
                />
                <TechBadge
                    title="JavaScript"
                    description="ES6+, async/await, and DOM manipulation."
                />
            </div>
        </div>
    </section>
  )
}

export default FrontendArchitecctureCard
