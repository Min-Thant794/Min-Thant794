import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";
import ProjectsSection from "../sections/ProjectsSection";
import ExperienceSection from "../sections/ExperienceSection";
import EducationSection from "../sections/EducationSection";
import ContactSection from "../sections/ContactSection"

const Home = () => {
  return (
    <div className="pt-20">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />

        <section className="py-32">
            <div className="mx-auto max-w-7xl px-8">
            <div className="grid gap-20 lg:grid-cols-2">
                <ExperienceSection />
                <EducationSection />
            </div>
            </div>
        </section>

        <ContactSection />
    </div>
  )
}

export default Home