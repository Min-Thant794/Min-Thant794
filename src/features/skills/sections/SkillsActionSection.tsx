import { NavLink } from "react-router-dom";

const SkillsActionSection = () => {
    return (
        <section className="relative mt-16 overflow-hidden rounded-3xl bg-surface-container-low p-5 text-center sm:p-8 md:mt-24 lg:p-12">
            <div className="absolute -right-24 -bottom-24 w-80 h-80 bg-tertiary/10 blur-[80px] rounded-full"/>

            <h2 className="text-on-surface-variant max-w-xl mx-auto mb-10 leading-relaxed">
                I use these technologies to build practical full-stack projects, including my car rental booking system and shopping web application.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NavLink
                to={"/projects"}
                className="inline-block w-full rounded-xl bg-linear-to-br from-primary to-tertiary px-6 py-4 text-center font-headline font-bold text-on-primary-fixed transition-transform active:scale-85 sm:w-auto sm:px-8"
                >
                    View Projects
                </NavLink>

                <a 
                href={`${import.meta.env.BASE_URL}myResume.pdf`}
                download
                className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-high px-6 py-4 font-headline font-bold text-on-surface transition-colors hover:bg-surface-container-highest sm:w-auto sm:px-8">
                    Download CV
                </a>
            </div>
        </section>
    )
}

export default SkillsActionSection;
