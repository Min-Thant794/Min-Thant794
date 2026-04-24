import type {
  ResumeContactItem,
  ResumeEducationItem,
  ResumeExperienceItem,
  ResumeLanguageItem,
  ResumeProjectItem,
  ResumeSkillGroup,
} from "./types";

export const resumeContactItems: ResumeContactItem[] = [
  { icon: "location_on", value: "Singapore" },
  { icon: "mail", value: "minthanthtun@gmail.com" },
  { icon: "language", value: "https://min-thant794.github.io/Min-Thant794/" },
  { icon: "code", value: "https://github.com/Min-Thant794" },
];

export const resumeExperienceItems: ResumeExperienceItem[] = [
  {
    title: "Full-Stack Developer (Academic Projects)",
    period: "2024 — PRESENT",
    company: "Personal & University Projects",
    isCurrent: true,
    points: [
      "Designed and developed a full-stack Integrated Rental Booking System (IRBS) using React, Node.js, and MongoDB.",
      "Implemented role-based authentication, booking workflows, and real-time availability handling using REST APIs.",
      "Built responsive user interfaces with Tailwind CSS and improved user experience with smooth transitions and structured layouts.",
    ],
  },
  {
    title: "Web Development Trainee",
    period: "2023",
    company: "Light Computer Co. Ltd.",
    points: [
      "Completed a web development bootcamp focusing on HTML, CSS, and JavaScript fundamentals.",
      "Developed a basic calculator mobile application as part of hands-on training.",
      "Gained practical experience in building UI components and structuring frontend applications.",
    ],
  },
];

export const resumeProjects: ResumeProjectItem[] = [
  {
    title: "Integrated Rental Booking System (IRBS)",
    description:
      "A full-stack web application featuring role-based access, booking management, and real-time availability tracking using modern web technologies.",
    tags: ["REACT", "NODE.JS", "MONGODB", "EXPRESS"],
  },
  {
    title: "Omni-Channel Shopping PWA",
    description:
      "A Progressive Web App built with mentor guidance, delivering fast, installable, and offline-capable shopping experiences.",
    tags: ["NEXT.JS", "TYPESCRIPT", "TAILWIND", "PWA"],
  },
];

export const resumeSkillGroups: ResumeSkillGroup[] = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "MongoDB", "REST APIs"],
  },
  {
    title: "Tools & Technologies",
    items: ["Git", "GitHub", "Postman", "Vite", "Figma"],
  },
];

export const resumeEducationItems: ResumeEducationItem[] = [
  {
    title: "B.Sc. (Hons) Computer Science",
    organization: "Coventry University (via PSB Academy, Singapore)",
    meta: "Completed 2026",
  },
  {
    title: "Diploma in Computer Science",
    organization: "NCC Education / NVL University",
    meta: "Completed 2023",
  },
];

export const resumeLanguages: ResumeLanguageItem[] = [
  { name: "Burmese", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Japanese", level: "Intermediate (N3 Level)" },
];