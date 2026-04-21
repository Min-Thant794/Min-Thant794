import type { ContactChannel, StatusItem } from "./types";

export const contactChannels: ContactChannel[] = [
    {
        label: "Email",
        value: "minthanthtun29@gmail.com",
        href: "minthanthtun29@gmail.com",
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
        title: "Response Time",
        description: 
        "Expect a technical brief or initial response within 24 standard business hours.",
        borderColor: "border-primary",
        titleColor: "text-primary"
    },
    {
        title: "Encryption",
        description: 
        "All communications through this portal are handled via secure, encrypted protocols.",
        borderColor: "border-tertiary",
        titleColor: "text-tertiary"
    },
    {
        title: "Availability",
        description: 
        "Open for select high-impact freelance engineering and architectural consultations.",
        borderColor: "border-outline-variant",
        titleColor: "text-on-surface"
    },
]