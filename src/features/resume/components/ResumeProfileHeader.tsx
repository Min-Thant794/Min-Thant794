import { resumeContactItems } from "../data";

const ResumeProfileHeader = () => {
    return (
        <div className="mb-16 grid grid-cols-1 gap-8 border-b border-outline-variant/20 pb-12 md:grid-cols-3">
            <div className="md:col-span-2">
                <h2 className="mb-4 font-headline text-3xl font-bold text-primary sm:text-4xl md:text-6xl">
                MIN THANT TUN
                </h2>
                <p className="max-w-xl text-base font-light leading-relaxed text-on-surface sm:text-lg md:text-xl">
                Full-stack software engineer specializing in high-performance cloud
                architectures and intuitive user interfaces. Committed to writing
                clean, scalable code that solves complex business problems.
                </p>
            </div>

            <div className="flex flex-col gap-3 font-label text-sm text-on-surface-variant">
                {resumeContactItems.map((item) => (
                <div key={item.icon + item.value} className="flex min-w-0 items-center gap-3">
                    <span className="material-symbols-outlined shrink-0 text-tertiary">
                    {item.icon}
                    </span>
                    <span className="break-all">{item.value}</span>
                </div>
                ))}
            </div>
        </div>
    )
}

export default ResumeProfileHeader;
