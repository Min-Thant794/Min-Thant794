import HeroHeader from "../features/skills/sections/HeroHeader"
import SkillsGrid from "../features/skills/sections/SkillsGrid"
import SkillsActionSection from "../features/skills/sections/SkillsActionSection"

const Skills = () => {
  return (
    <div className="bg-background text-on-surface font-body technical-grid min-h-screen">

      <main className="mx-auto max-w-7xl overflow-hidden px-5 pb-16 pt-28 sm:px-6 md:pt-32 lg:px-8">
        <HeroHeader />
        <SkillsGrid />
        <SkillsActionSection />
      </main>
    </div>
  )
}

export default Skills
