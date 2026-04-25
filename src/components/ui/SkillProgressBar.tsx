type SkillProgressBarProps = {
  title: string;
  description: string;
};

const SkillProgressBar = ({ title, description }: SkillProgressBarProps) => {
  return (
    <div className="group">
      <h3 className="font-headline font-bold text-lg text-primary mb-2 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
        {title}
      </h3>

      <p className="text-sm text-on-surface-variant leading-relaxed pl-3.5 border-l-2 border-primary/20 group-hover:border-primary/50 transition-colors">
        {description}
      </p>
    </div>
  );
};

export default SkillProgressBar;