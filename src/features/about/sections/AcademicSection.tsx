const AcademicSection = () => {
    return (
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="relative">
                <div className="absolute -top-12 -left-12 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />

                <div className="relative rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-8">
                <div className="mb-6 flex gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-outline-variant/40" />
                    <div className="h-2.5 w-2.5 rounded-full bg-outline-variant/40" />
                    <div className="h-2.5 w-2.5 rounded-full bg-outline-variant/40" />
                </div>

                <p className="mb-2 font-mono text-sm text-primary">
                    // Coventry University
                </p>

                <p className="mb-4 font-headline text-2xl font-bold">
                    Academic Excellence
                </p>

                <p className="mb-6 leading-relaxed text-on-surface-variant">
                    The foundation was laid at Coventry University, where the curriculum
                    wasn&apos;t just about syntax—it was about the philosophy of
                    computation. It was here that I learned to deconstruct complex
                    systems and understand the underlying mechanics of modern software.
                </p>

                <div className="h-1 w-full overflow-hidden rounded-full bg-surface-container-highest">
                    <div className="h-full w-full bg-primary" />
                </div>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="border-l-4 border-primary pl-6 font-headline text-3xl font-bold">
                The Academic Catalyst
                </h2>

                <p className="text-lg leading-relaxed text-on-surface-variant">
                My time at Coventry University served as more than just a formal
                education; it was a period of intense curiosity and rigorous testing.
                Immersed in an environment that championed both theoretical computer
                science and practical application, I found my rhythm in the
                intersection of data structures and user-centric design.
                </p>

                <p className="text-lg leading-relaxed text-on-surface-variant">
                Transitioning from simple classroom assignments to complex,
                architecture-heavy projects, I realized that my passion wasn&apos;t
                just in making things work—it was in making them work optimally for
                real-world scenarios.
                </p>
            </div>
        </div>
    )
}

export default AcademicSection;