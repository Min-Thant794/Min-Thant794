import ResumeActionHeader from "../features/resume/components/ResumeActionHeader";
import ResumeProfileHeader from "../features/resume/components/ResumeProfileHeader";
import ResumeExperienceSection from "../features/resume/components/ResumeExperienceSection";
import ResumeProjectsSection from "../features/resume/components/ResumeProjectsSection";
import ResumeSkillsSection from "../features/resume/components/ResumeSkillsSection";
import ResumeEducationSection from "../features/resume/components/ResumeEducationSection";
import ResumeLanguagesSection from "../features/resume/components/ResumeLanguagesSection";
import ResumeFooterQuote from "../features/resume/components/ResumeFooterQuote";

const Resume = () => {
    return (
        <div className="bg-background font-body text-on-surface selection:bg-primary/30">

            <main className="mx-auto max-w-5xl px-4 pb-20 pt-28 sm:px-5 md:px-8 md:pt-32">
                <ResumeActionHeader />

                <div className="print-container relative overflow-hidden rounded-xl border border-outline-variant/10 bg-surface-container-low p-5 shadow-2xl sm:p-8 md:p-12">
                <div className="no-print absolute left-0 top-0 h-full w-2 bg-primary" />

                <ResumeProfileHeader />

                <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
                    <div className="space-y-16 md:col-span-8">
                    <ResumeExperienceSection />
                    <ResumeProjectsSection />
                    </div>

                    <div className="space-y-16 md:col-span-4">
                    <ResumeSkillsSection />
                    <ResumeEducationSection />
                    <ResumeLanguagesSection />
                    </div>
                </div>

                <ResumeFooterQuote />
                </div>
            </main>
            
        </div>
    )
}

export default Resume;
