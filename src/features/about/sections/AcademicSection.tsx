const AcademicSection = () => {
    return (
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
                <div className="absolute -top-12 -left-12 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />

                <div className="relative rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-5 sm:p-8">
                <div className="mb-6 flex gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-outline-variant/40" />
                    <div className="h-2.5 w-2.5 rounded-full bg-outline-variant/40" />
                    <div className="h-2.5 w-2.5 rounded-full bg-outline-variant/40" />
                </div>

                <p className="mb-2 font-mono text-sm text-primary">
                    // Coventry University
                </p>

                <p className="mb-4 font-headline text-xl font-bold sm:text-2xl">
                    Academic Foundation
                </p>

                <p className="mb-6 leading-relaxed text-on-surface-variant">
                    My Computer Science studies helped me build a strong foundation in
                    programming, software development, databases, algorithms, and problem-solving.
                    It also gave me the opportunity to apply these concepts through practical
                    coursework and my individual final-year project.
                </p>

                <div className="h-1 w-full overflow-hidden rounded-full bg-surface-container-highest">
                    <div className="h-full w-full bg-primary" />
                </div>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="border-l-4 border-primary pl-4 font-headline text-2xl font-bold sm:pl-6 sm:text-3xl">
                From Academic Learning to Practical Development
                </h2>

                <p className="text-base leading-relaxed text-on-surface-variant sm:text-lg">
                During my BSc Computer Science journey, I gradually became more interested in
                full-stack development because it allowed me to understand both the user
                interface and the backend logic behind a complete system.
                </p>

                <p className="text-base leading-relaxed text-on-surface-variant sm:text-lg">
                My individual project, an Integrated Rental Booking System, helped me apply
                React, Node.js, Express, MongoDB, authentication, role-based access, and booking
                management in a more realistic software development workflow.
                </p>
            </div>
        </div>
    )
}

export default AcademicSection;
