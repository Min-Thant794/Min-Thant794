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
      "Developed a full-stack Integrated Rental Booking System (IRBS) using MERN stack.",
      "Implemented JWT-based authentication and role-based access control for admin and customer users.",
      "Designed booking workflows with real-time availability logic to prevent double-booking.",
      "Built responsive UI with Tailwind CSS and optimized API data handling for better performance and user experience",
      "Structured backend using RESTful API design and modular architecture."
    ],
  },
];

export const resumeProjects: ResumeProjectItem[] = [
  {
    title: "Integrated Rental Booking System (IRBS)",
    description:
      "Developed a full-stack car rental web application using React, Node.js, Express, and MongoDB. Implemented JWT-based authentication and role-based access control for admin and customer users. Designed booking workflows with availability validation, Supabase for media Storage and Redis-based locking mechanism to prevent concurrent booking conflicts",
    tags: ["REACT", "NODE.JS", "EXPRESS", "MONGODB", "REDIS", "SUPABASE", "TAILWIND", "JWT"],
  },
  {
    title: "Shopping PWA",
    description:
      "Developed a full-stack Progressive Web App with mentor guidance using Node.js, Express, and MongoDB. Implemented JWT-based authentication, RESTful APIs, and Redis caching to improve performance. Built a responsive UI with Tailwind CSS and added offline support using PWA technologies. Integrated Supabase for media storage.",
    tags: ["NODE.JS", "EXPRESS", "MONGODB", "REDIS", "SUPABASE", "TAILWIND", "JWT", "PWA"],
  },
  {
    title: "IoT Health Monitoring Simulator",
    description:
      "Developed a health monitoring simulator using Python to simulate real-time sensor data and integrated it with Microsoft Azure for cloud processing. Visualized health metrics using Power BI dashboards, demonstrating end-to-end data flow from IoT devices to cloud analytics.",
    tags: ["PYTHON", "AZURE", "POWER BI", "IOT"],
  }
];

export const resumeSkillGroups: ResumeSkillGroup[] = [
  {
    title: "Frontend",
    items: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "MongoDB", "REST APIs"],
  },
  {
    title: "Tools & Technologies",
    items: ["Git", "GitHub", "Postman", "Vite", "Figma"],
  },
  {
    title: "CONCEPTS",
    items: ["REST API Design", "Authentication", "Caching (Redis)", "MVC Architecture"]
  }
];

export const resumeEducationItems: ResumeEducationItem[] = [
  {
    title: "B.Sc. (Hons) Computer Science",
    organization: "Coventry University (via PSB Academy, Singapore)",
    meta: "Completed 2026",
  },
  {
    title: "Diploma in Computing",
    organization: "NCC Education (via NVL University, Myanmar)",
    meta: "Completed 2024",
  },
];

export const resumeLanguages: ResumeLanguageItem[] = [
  { name: "Burmese", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Japanese", level: "JLPT N4 Certified" },
];