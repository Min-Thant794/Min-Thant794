import HeroSection from "../sections/home/HeroSection";
import AboutSection from "../sections/home/AboutSection";
import SkillsSection from "../sections/home/SkillsSection";
import ProjectsSection from "../sections/home/ProjectsSection";
import ExperienceSection from "../sections/home/ExperienceSection";
import EducationSection from "../sections/home/EducationSection";
import ContactSection from "../sections/home/ContactSection"

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