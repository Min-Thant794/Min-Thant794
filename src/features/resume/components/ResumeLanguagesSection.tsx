import { resumeLanguages } from "../data";

const ResumeLanguagesSection = () => {
    return (
        <section>
            <div className="mb-6 flex items-center gap-4">
                <span className="material-symbols-outlined text-xl text-primary">
                translate
                </span>
                <h3 className="font-headline text-lg font-bold uppercase tracking-tight">
                Languages
                </h3>
            </div>

            <div className="space-y-3">
                {resumeLanguages.map((language) => (
                <div
                    key={language.name}
                    className="flex justify-between text-sm text-on-surface"
                >
                    <span>{language.name}</span>
                    <span className="text-on-surface-variant">{language.level}</span>
                </div>
                ))}
            </div>
        </section>
    )
}

export default ResumeLanguagesSection;