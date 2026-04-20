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
        <section className="md:col-span-4 bg-surface-container-low rounded-xl p-8 border border-outline-variant/10 flex flex-col">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined">
                        code
                    </span>
                </div>
                <h2 className="font-headline text-2xl font-bold">
                    Foundations
                </h2>
            </div>

            <div className="grow space-y-4">
                {
                    FoundationItems.map((item) => (
                        <div
                        key={item.title}
                        className="p-5 bg-surface-container-highest/30 rounded-xl hover:bg-surface-container-highest transition-colors group"
                        >
                            <div className="flex justify-between items-start mb-2">
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