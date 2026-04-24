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
      <HeroSection contactRef={contactRef} />

      <AboutSection />
      <SkillsSection />
      <ProjectsSection />

      <section className="py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
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