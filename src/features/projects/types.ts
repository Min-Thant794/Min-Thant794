export type ProjectInfo = {
    heading: string;
    description: string;
    accent: "primary" | "tertiary";
}

export type Project = {
    title: string;
    description: string;
    images?: string[];
    imageAlt?: string;
    liveDemoUrl?: string;
    githubUrl?: string;
    techStack: string[];
    info: ProjectInfo[];
    isWip?: boolean;
    usePlaceholder?: boolean;
}