type FoundationItem = {
    title: string;
    tag: string;
    tagClassName: string;
    description: string;
};

const FoundationItems: FoundationItem[] = [
    {
        title: "JS (Node/ TS)",
        tag: "Primary",
        tagClassName: "bg-primary/10 text-primary",
        description: "Modern syntax, architectural patterns, and functional programming concepts."
    },
    {
        title: "Python",
        tag: "Logic",
        tagClassName: "bg-tertiary/10 text-tertiary",
        description: "Data structures, automation scripting, and backend integrations."
    },
    {
        title: "Java SE",
        tag: "Core",
        tagClassName: "bg-outine-variant/20 text-outline-variant",
        description: "Object-orientd design, threading, and enterprise logic patterns."
    },
];

const FoundationsCard = () => {
    return (
        <section className="flex flex-col rounded-xl border border-outline-variant/10 bg-surface-container-low p-5 sm:p-8 md:col-span-4">
            <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-tertiary/10 text-tertiary">
                    <span className="material-symbols-outlined">
                        code
                    </span>
                </div>
                <h2 className="font-headline text-xl font-bold sm:text-2xl">
                    Foundations
                </h2>
            </div>

            <div className="grow space-y-4">
                {
                    FoundationItems.map((item) => (
                        <div
                        key={item.title}
                        className="group rounded-xl bg-surface-container-highest/30 p-5 transition-colors hover:bg-surface-container-highest"
                        >
                            <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                                <span className="font-headline font-bold group-hover:text-primary">
                                    {item.title}
                                </span>
                                <span className={`text-[10px] px-2 py-0.5 rounded-full font-label uppercase ${item.tagClassName}`}>
                                    {item.tag}
                                </span>
                            </div>
                            <p className="text-sm text-on-surface-variant leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default FoundationsCard;
