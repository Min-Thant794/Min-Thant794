import type {
  ResumeContactItem,
  ResumeEducationItem,
  ResumeExperienceItem,
  ResumeLanguageItem,
  ResumeProjectItem,
  ResumeSkillGroup,
} from "./types";

export const resumeContactItems: ResumeContactItem[] = [
  { icon: "location_on", value: "Yangon, Myanmar" },
  { icon: "mail", value: "hello@minthanttun.dev" },
  { icon: "language", value: "www.minthanttun.dev" },
  { icon: "code", value: "github.com/minthanttun" },
];

export const resumeExperienceItems: ResumeExperienceItem[] = [
  {
    title: "Senior Software Engineer",
    period: "2021 — PRESENT",
    company: "TechNexus Solutions",
    isCurrent: true,
    points: [
      "Led the architectural redesign of a microservices-based e-commerce platform, resulting in a 40% improvement in load times.",
      "Implemented CI/CD pipelines using GitHub Actions, reducing deployment errors by 25%.",
      "Mentored a team of 5 junior developers, conducting code reviews and technical workshops.",
    ],
  },
  {
    title: "Frontend Developer",
    period: "2018 — 2021",
    company: "Creative Digital Agency",
    points: [
      "Developed responsive web applications for international clients using React and Tailwind CSS.",
      "Optimized frontend assets and states, achieving a 95+ score on Google Lighthouse across core vitals.",
      "Collaborated with UI/UX designers to translate Figma prototypes into pixel-perfect interactive components.",
    ],
  },
];

export const resumeProjects: ResumeProjectItem[] = [
  {
    title: "Aether Dashboard (SaaS)",
    description:
      "A high-performance analytics dashboard for cloud infrastructure monitoring, featuring real-time data visualization with D3.js and WebSocket integration.",
    tags: ["NEXT.JS", "TYPESCRIPT", "POSTGRESQL"],
  },
  {
    title: "Prism Code Editor",
    description:
      "An open-source, browser-based IDE with integrated terminal support and collaborative editing capabilities using Yjs CRDTs.",
    tags: ["REACT", "NODE.JS", "WEB CONTAINERS"],
  },
];

export const resumeSkillGroups: ResumeSkillGroup[] = [
  {
    title: "Frontend",
    items: ["React/Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Go", "Python", "PostgreSQL", "Redis"],
  },
  {
    title: "DevOps & Tools",
    items: ["Docker", "AWS", "Kubernetes", "CI/CD"],
  },
];

export const resumeEducationItems: ResumeEducationItem[] = [
  {
    title: "B.Sc. in Computer Science",
    organization: "University of Engineering",
    meta: "Class of 2018",
  },
  {
    title: "Cloud Architect Certification",
    organization: "Amazon Web Services",
    meta: "Issued 2022",
  },
];

export const resumeLanguages: ResumeLanguageItem[] = [
  { name: "Burmese", level: "Native" },
  { name: "English", level: "Fluent" },
];