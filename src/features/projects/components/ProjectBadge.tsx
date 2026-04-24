type ProjectBadgeProps = {
  label: string;
  accent?: "primary" | "tertiary";
};

const ProjectBadge = ({ label, accent = "primary" }: ProjectBadgeProps) => {
  return (
    <span
      className={`rounded-full bg-surface-container-highest px-3 py-1 font-label text-xs ${
        accent === "tertiary" ? "text-tertiary" : "text-primary"
      }`}
    >
      {label}
    </span>
  );
};

export default ProjectBadge;
