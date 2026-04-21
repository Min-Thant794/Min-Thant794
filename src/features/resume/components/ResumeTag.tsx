type ResumeTagProps = {
    label: string;
}

const ResumeTag = ({ label }: ResumeTagProps) => {
    return (
        <span className="rounded bg-surface-container-highest px-2 py-1 font-label text-[10px] text-on-tertiary-fixed-variant">
            {label}
        </span>
    )
}

export default ResumeTag;