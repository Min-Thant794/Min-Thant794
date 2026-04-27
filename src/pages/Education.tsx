import ExperienceHero from "../features/education/components/ExperienceHero"
import TimelineSection from "../features/education/components/TimelineSection"
import AdvocacySection from "../features/education/components/AdvocacySection"

const Education = () => {
  return (
    <div className="bg-background text-on-surface font-body">
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-6 md:pb-20 md:pt-32 lg:px-8">
        <ExperienceHero />
        <TimelineSection />
        <AdvocacySection/>
      </main>

    </div>
  )
}

export default Education