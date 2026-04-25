import HeroSection from "../features/about/sections/HeroSection"
import AcademicSection from "../features/about/sections/AcademicSection"
import PhilosophySection from "../features/about/sections/PhilosophySection"
import GrowthSection from "../features/about/sections/GrowthSection"
import VisionQuote from "../features/about/sections/VisionQuote"
import CTASection from "../features/about/sections/CTASection"

const About = () => {
  return (
    <div className="mx-auto max-w-7xl px-5 pt-24 sm:px-6 md:pt-28 lg:px-8">
      <HeroSection/>
      
      <section className="space-y-20 md:space-y-28 lg:space-y-32">
        <AcademicSection />
        <PhilosophySection />
        <GrowthSection />
        <VisionQuote />
      </section>
      
      <CTASection/>
    </div>
  )
}

export default About
