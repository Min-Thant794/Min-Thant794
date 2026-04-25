import { resumeEducationItems } from "../data";

const ResumeEducationSection = () => {
    return (
        <section>
            <div className="mb-8 flex items-center gap-4">
                <span className="material-symbols-outlined text-3xl text-primary">
                school
                </span>
                <h3 className="font-headline text-xl font-bold uppercase sm:text-2xl">
                Education
                </h3>
            </div>

            <div className="space-y-8">
                {resumeEducationItems.map((item) => (
                <div key={item.title + item.organization}>
                    <p className="font-bold text-primary">{item.title}</p>
                    <p className="font-medium text-on-surface">{item.organization}</p>
                    <p className="mt-1 text-sm text-on-surface-variant">{item.meta}</p>
                </div>
                ))}
            </div>
        </section>
    )
}

export default ResumeEducationSection;
