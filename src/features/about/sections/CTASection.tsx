import { NavLink } from "react-router-dom";

const CTASection = () => {
    return (
        <section className="mt-24 rounded-xl border border-outline-variant/5 bg-surface-container-low px-5 py-16 text-center sm:px-8 md:mt-32 lg:mt-40 lg:py-20">
            <h2 className="mb-6 font-headline text-3xl font-bold sm:text-4xl">
                Let&apos;s connect.
            </h2>

            <p className="mx-auto mb-10 max-w-lg text-on-surface-variant">
                I&apos;m currently looking for opportunities to learn, grow, and work on real-world
                projects as a junior developer.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <NavLink
                to={"/contact"}
                className="inline-block rounded-xl bg-linear-to-r from-primary to-secondary px-6 py-4 text-base font-bold text-on-primary-fixed transition-all hover:shadow-[0_0_30px_rgba(160,255,195,0.2)] active:scale-95 sm:px-10 sm:text-lg"
                >
                Start a Conversation
                </NavLink>

                <NavLink
                to={"/projects"}
                className="inline-block rounded-xl border border-outline-variant/30 bg-surface-container-high px-6 py-4 text-base font-bold transition-all hover:border-primary/50 active:scale-95 sm:px-10 sm:text-lg"
                >
                View Porojects
                </NavLink>
            </div>
        </section>
    )
}

export default CTASection;
