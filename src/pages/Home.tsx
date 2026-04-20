import HeroSection from "../features/home/sections/HeroSection";
import AboutSection from "../features/home/sections/AboutSection";
import SkillsSection from "../features/home/sections/SkillsSection";
import ProjectsSection from "../features/home/sections/ProjectsSection";
import ExperienceSection from "../features/home/sections/ExperienceSection";
import EducationSection from "../features/home/sections/EducationSection";
import ContactSection from "../features/home/sections/ContactSection"

const Home = () => {
  return (
    <div className="pt-10">
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