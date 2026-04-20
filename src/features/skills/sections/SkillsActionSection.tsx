const SkillsActionSection = () => {
    return (
        <section className="mt-24 bg-surface-container-low rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute -right-24 -bottom-24 w-80 h-80 bg-tertiary/10 blur-[80px] rounded-full"/>

            <h2 className="text-on-surface-variant max-w-xl mx-auto mb-10 leading-relaxed">
                I believe technology is only as good as the problems it solves. Check out my project portfolio to see how I apply these tools to build real-world solutions.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                href="#projects"
                className="inline-block text-center bg-linear-to-br from-primary to-tertiary text-on-primary-fixed px-8 py-4 rounded-xl font-headline font-bold active:scale-85 transition-transform"
                >
                    View Projects
                </a>

                <button className="bg-surface-container-high border border-outline-variant/30 text-on-surface px-8 py-4 rounded-xl font-headline font-bold hover:bg-surface-container-highest transition-colors">
                    Download Technical PDF
                </button>
            </div>
        </section>
    )
}

export default SkillsActionSection;