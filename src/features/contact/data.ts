import type { ContactChannel, StatusItem } from "./types";

export const contactChannels: ContactChannel[] = [
    {
        label: "Email",
        value: "minthanthtun29@gmail.com",
        href: "mailto:minthanthtun29@gmail.com",
        icon: "mail",
        accent: "primary"
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/minthanttun",
        href: "https://www.linkedin.com/in/min-thant-tun-b73a4337a/",
        icon: "share",
        accent: "tertiary"
    },
    {
        label: "GitHub",
        value: "github.com/minthant794",
        href: "https://github.com/Min-Thant794",
        icon: "code",
        accent: "neutral"
    },
]

export const statusItems: StatusItem[] = [
    {
        title: "Current Focus",
        description: 
        "Building full-stack web applications with React, Node.js, and MongoDB while improving system design skills.",
        borderColor: "border-primary",
        titleColor: "text-primary"
    },
    {
        title: "Looking For",
        description: 
        "Junior software developer or internship opportunities where I can contribute and grow.",
        borderColor: "border-tertiary",
        titleColor: "text-tertiary"
    },
    {
        title: "Recent Work",
        description: 
        "Developed an Integrated Rental Booking System with authentication, booking logic, and real-time features.",
        borderColor: "border-outline-variant",
        titleColor: "text-on-surface"
    },
]
