import { resumeContactItems } from "../data"

const ResumeContactSection = () => {
    return (
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
    )
}

export default ResumeContactSection;