type TechBadgeProps = {
    title: string;
    description?: string;
    dashed?: boolean;
    centered?: boolean;
    icon?: string;
}

const TechBadge = ({title, description, dashed = false, centered = false, icon} : TechBadgeProps) => {
    return (
        <div 
        className={`rounded-xl bg-surface-container p-3 sm:p-4 
        ${dashed ? "border-dashed border-outline-variant flex items-center justify-center" 
        : "border border-outline-variant/5"}`}
        >
        
        {icon ? (
            <span className="material-symbols-outlined text-outline-variant">
                {icon}
            </span>
        )
        :
        (
            <>
                <span
                className={`text-tertiary font-headline font-bold text-lg
                    ${centered ? "text-center block w-full" : ""}`}
                >
                    {title}
                </span>
                {
                    description && (
                        <p className="text-xs text-on-surface-variant mt-1">{description}</p>
                    )
                }
            </>
        )
        }

        </div>
    )
}

export default TechBadge;
