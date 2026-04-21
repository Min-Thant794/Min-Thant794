export type ContactChannel = {
    label: string;
    value: string;
    href: string;
    icon: string;
    accent: "primary" | "tertiary" | "neutral";
}

export type StatusItem = {
    title: string;
    description: string;
    borderColor: string;
    titleColor: string;
}