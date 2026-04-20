const CTASection = () => {
    return (
        <section className="mt-40 rounded-xl border border-outline-variant/5 bg-surface-container-low py-20 text-center">
            <h2 className="mb-6 font-headline text-4xl font-bold">
                Let&apos;s build something meaningful.
            </h2>

            <p className="mx-auto mb-10 max-w-lg text-on-surface-variant">
                Currently open to collaborations and new engineering opportunities that
                challenge the status quo.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                href="#contact"
                className="inline-block rounded-xl bg-linear-to-r from-primary to-secondary px-10 py-4 text-lg font-bold text-on-primary-fixed transition-all hover:shadow-[0_0_30px_rgba(160,255,195,0.2)] active:scale-95"
                >
                Start a Conversation
                </a>

                <a
                href="#projects"
                className="inline-block rounded-xl border border-outline-variant/30 bg-surface-container-high px-10 py-4 text-lg font-bold transition-all hover:border-primary/50 active:scale-95"
                >
                View Portfolio
                </a>
            </div>
        </section>
    )
}

export default CTASection;