import HeroSection from "../features/about/sections/HeroSection"
import AcademicSection from "../features/about/sections/AcademicSection"
import PhilosophySection from "../features/about/sections/PhilosophySection"
import GrowthSection from "../features/about/sections/GrowthSection"
import VisionQuote from "../features/about/sections/VisionQuote"
import CTASection from "../features/about/sections/CTASection"

const About = () => {
  return (
    <div className="pt-30 px-35">
      <HeroSection/>
      
      <section className="space-y-32">
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