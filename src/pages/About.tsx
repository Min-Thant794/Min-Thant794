import HeroSection from "../sections/about/HeroSection"
import AcademicSection from "../sections/about/AcademicSection"
import PhilosophySection from "../sections/about/PhilosophySection"
import GrowthSection from "../sections/about/GrowthSection"
import VisionQuote from "../sections/about/VisionQuote"
import CTASection from "../sections/about/CTASection"

const About = () => {
  return (
    <div className="pt-30 px-30">
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