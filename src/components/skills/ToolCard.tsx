type ToolCardProps = {
    name: string;
    icon: string;
}

const ToolCard = ({name, icon} : ToolCardProps) => {
    return (
        <div className="group flex flex-col items-center justify-center p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/5 hover:border-primary/30 transition-all">
            <div className="w-12 h-12 mb-3 rounded-lg bg-surface-container-high flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                    {icon}
                </span>
            </div>
            <span className="font-label text-xs font-bold text-center">
                {name}
            </span>
        </div>
    )
}

export default ToolCard;