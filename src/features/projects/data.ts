import type { Project } from "./types";

export const projects: Project[] = [
    {
        title: "Integrated Rental Booking System (IRBS)",
        description: "Deep drives into technical architecture, problem-solving, and full-stack execution of complex ecosystems.",
        image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAU7EDCNt-bIPi1F5A7Lfn7n_Vehzgou5ikliBYmv7oLpJimmxFwVS-nzz_VBhXQah5WUcGy1nAp5OyX2cdlIfAzX0K4m7z29TID0JLhtlE5_ogXwo9_cNIUbJH1ox6-vBkNaTCmkcXiiz-N3EB2Z3GBvxvCfZWq_F6hLds-uOh34Y3CSLxRSmRBVR6s1f0wG1qqwJwnKuhIiGNWTWw3IdLh7Mr8Wmtt9TS1WNLRidSTprgTlBO_S0uqrI9ahc3DIaWSOlL1oWs61I",
        imageAlt:
        "Modern dashboard interface for rental management with charts and listing cards",
        liveDemoUrl: "#",
        githubUrl: "#",
        techStack: ["React.js", "Node.js", "PostgreSQL", "Redis"],
        info: [
        {
            heading: "The Problem",
            description:
            "Legacy rental systems suffered from high latency during peak booking hours and lacked real-time synchronization, leading to overbooking and data inconsistencies.",
            accent: "tertiary",
        },
        {
            heading: "The Solution",
            description:
            "Engineered a distributed architecture using WebSocket for instant updates and Redis caching for high-speed availability, with a robust booking engine to reduce race conditions.",
            accent: "primary",
        },
        ],
    },
    {
        title: "Omni-Channel Shopping PWA",
        description:
        "A mobile-first commerce experience designed for speed, resilience, and app-like usability.",
        image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD1CrFpehiv-269bwfv6Mrs3e7A3NFxOzVefKsylQuOsJ2E6UlSfn3TM7ocsqrYiimrZlH1O65Z0w1_hKWrwIOsu93JZzn449-jxPpp2rN_C-pT-iRW7idodPT-yuF0qrHfEQzFutJAfBjHH3ncRzSMSGiR2fOUWaQ8r049QZxhukthx3zrG7oX-3kPzanmlF5TVw2bbbHmOub2-kiEQywqeHZh-DsbOfmanR1PO7dGlywXLBwbkrP3dGRx7diBcibaBkhfcFtGExc",
        imageAlt:
        "Mobile e-commerce interface with product cards and checkout experience",
        liveDemoUrl: "#",
        githubUrl: "#",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PWA"],
        info: [
        {
            heading: "The Problem",
            description:
            "Standard e-commerce sites failed to provide a smooth app-like experience on mobile devices with weaker connections, increasing cart abandonment.",
            accent: "tertiary",
        },
        {
            heading: "The Solution",
            description:
            "Developed a Progressive Web App with offline-first capability using Service Workers and IndexedDB, plus a faster checkout flow.",
            accent: "primary",
        },
        ],
    },
]