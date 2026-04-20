export type ProjectInfo = {
    heading: string;
    description: string;
    accent: "primary" | "tertiary";
}

export type Project = {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    liveDemoUrl: string;
    githubUrl: string;
    techStack: string[];
    info: ProjectInfo[];
}