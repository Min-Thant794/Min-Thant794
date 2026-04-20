type SkillProgressBarProps = {
  title: string;
  percentage: number;
  description: string;
};

const SkillProgressBar = ({title, percentage, description} : SkillProgressBarProps) => {
    return (
        <div className="space-y-2">
            <div className="flex justify-between items-end">
                <span className="font-headline font-medium">{title}</span>
                <span className="text-xs text-primary font-label">{percentage}%</span>
            </div>

            <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div
                className="h-full bg-primary"
                style={{ width: `${percentage}%` }}
                />
            </div>

            <p className="text-sm text-on-surface-variant leading-snug">
                {description}
            </p>
        </div>
    )
}

export default SkillProgressBar;