import SkillProgressBar from "../../components/skills/SkillProgressBar";
import TechBadge from "../../components/skills/TechBadge";

const FrontendArchitecctureCard = () => {
  return (
    <section className="md:col-span-8 bg-surface-container-low rounded-xl p-8 border border-outline-variant/10 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-10 transition-opacity">
            <span className="material-symbols-outlined text-9xl">
                terminal
            </span>
        </div>

        <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">
                    web
                </span>
            </div>
            <h2 className="font-headline text-2xl font-bold">
                Frontend Architecture
            </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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

            <div className="grid grid-cols-2 gap-4">
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