import HeroHeader from "../sections/skills/HeroHeader"
import SkillsGrid from "../sections/skills/SkillsGrid"
import SkillsActionSection from "../sections/skills/SkillsActionSection"

const Skills = () => {
  return (
    <div className="bg-background text-on-surface font-body technical-grid min-h-screen">

      <main className="pt-32 pb-16 px-8 max-w-7xl mx-auto overflow-hidden">
        <HeroHeader />
        <SkillsGrid />
        <SkillsActionSection />
      </main>
    </div>
  )
}

export default Skills