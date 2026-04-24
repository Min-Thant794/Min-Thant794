import type { Project } from "./types";
import p1HomePage from "../../assets/images/projects/IRBS.png"
import p1CarPage from "../../assets/images/projects/carListing.png"
import p1BookingPage from "../../assets/images/projects/booking.png"
import p2HomePage from "../../assets/images/projects/shoppingPWA.png"
import p2DealsPage from "../../assets/images/projects/deals.png"
import p2CartPage from "../../assets/images/projects/cart.png"

export const projects: Project[] = [
    {
        title: "Integrated Rental Booking System (IRBS)",
        description: "Deep drives into technical architecture, problem-solving, and full-stack execution of complex ecosystems.",
        images: [p1HomePage, p1CarPage, p1BookingPage],
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
        images: [p2HomePage, p2DealsPage, p2CartPage],
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
    {
        title: "Real-time Messaging Platform",
        description:
            "A deep dive into real-time communication and system architecture.",

        techStack: [
            "Vite",
            "React",
            "TypeScript",
            "Node.js",
            "Socket.io",
            "Redis",
            "JWT",
        ],

        isWip: true,
        usePlaceholder: true,

        info: [
            {
            heading: "Description",
            description:
                "Focuses on bidirectional data flow, WebSocket communication, and scalable backend services.",
            accent: "tertiary",
            },
        ],
    }
]