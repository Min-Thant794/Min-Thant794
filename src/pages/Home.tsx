import { useRef } from "react";
import HeroSection from "../features/home/sections/HeroSection";
import AboutSection from "../features/home/sections/AboutSection";
import SkillsSection from "../features/home/sections/SkillsSection";
import ProjectsSection from "../features/home/sections/ProjectsSection";
import ExperienceSection from "../features/home/sections/ExperienceSection";
import EducationSection from "../features/home/sections/EducationSection";
import ContactSection from "../features/home/sections/ContactSection"

const Home = () => {

  const contactRef = useRef<HTMLDivElement | null> (null);

  return (
    <div className="pt-10">
        <HeroSection contactRef = {contactRef}/>
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

        <ContactSection ref={contactRef} />
    </div>
  )
}

export default Home