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
        description: "A full-stack car rental booking system with customer booking, admin management, authentication, and booking status control.",
        images: [p1HomePage, p1CarPage, p1BookingPage],
        imageAlt:
        "Modern dashboard interface for rental management with charts and listing cards",
        liveDemoUrl: "https://my-project-kohl-rho.vercel.app/",
        githubUrl: "https://github.com/Min-Thant794/my-project.git",
        techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Redis",
        "Supabase",
        "JWT Auth",
        "Tailwind CSS",
        "PWA"
        ],
        info: [
        {
        heading: "The Problem",
        description: "Manual rental booking can lead to booking conflicts, unclear car availability, and difficulty managing customers, cars, and reservations in one place.",
        accent: "tertiary",
        },
        {
        heading: "The Solution",
        description: "Built a MERN-based booking system with role-based access, customer verification, car management, booking status updates, and Redis locking to reduce double-booking issues.",
        accent: "primary",
        },
        ],
    },
    {
        title: "Shopping Progressive Web App",
        description:
            "A full-stack e-commerce web application built with a focus on responsive design, performance, and app-like user experience.",
        images: [p2HomePage, p2DealsPage, p2CartPage],
        imageAlt:
            "E-commerce interface showing homepage, deals page, and cart functionality",
        liveDemoUrl: "https://shopping-website-delta-five.vercel.app/",
        githubUrl: "https://github.com/Min-Thant794/shoppingWebsite.git",
        techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Redis",
        "Supabase",
        "JWT Auth",
        "Socket.IO",
        "Tailwind CSS",
        "PWA"
        ],
        info: [
            {
            heading: "The Problem",
            description:
                "Traditional e-commerce websites often provide a poor mobile experience and lack real-time updates for features like cart synchronization and notifications.",
            accent: "tertiary",
            },
            {
            heading: "The Solution",
            description:
                "Developed a full-stack shopping web application with authentication, real-time updates using Socket.io, and responsive UI design. Implemented PWA features for better performance and app-like experience on mobile devices.",
            accent: "primary",
            },
        ],
    },
    {
        title: "Real-time Messaging App",
        description: "A work-in-progress project focused on building a real-time chat application using WebSockets and scalable backend architecture.",
        techStack: [
            "React.js",
            "Node.js",
            "Socket.io",
            "MongoDB",
            "JWT Auth",
        ],
        isWip: true,
        usePlaceholder: true,
        info: [
            {
            heading: "Goal",
            description:
                "To understand how real-time messaging systems work, including message delivery, socket connections, and backend scalability.",
            accent: "tertiary",
            },
        ],
    }
]