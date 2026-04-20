import HeroHeader from "../features/skills/sections/HeroHeader"
import SkillsGrid from "../features/skills/sections/SkillsGrid"
import SkillsActionSection from "../features/skills/sections/SkillsActionSection"

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