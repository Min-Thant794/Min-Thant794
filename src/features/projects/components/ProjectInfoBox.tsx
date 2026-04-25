import type { ProjectInfo } from "../types";

type ProjectInfoBoxProps = {
  item: ProjectInfo;
};

const ProjectInfoBox = ({ item }: ProjectInfoBoxProps) => {
  return (
    <div className="rounded-xl border border-outline-variant/15 bg-surface-container-low p-5 sm:p-6">
      <h3
        className={`mb-2 font-label text-sm uppercase ${
          item.accent === "tertiary" ? "text-tertiary" : "text-primary"
        }`}
      >
        {item.heading}
      </h3>

      <p className="text-sm leading-relaxed text-on-surface-variant">
        {item.description}
      </p>
    </div>
  );
};

export default ProjectInfoBox;
