import ToolCard from "./ToolCard";

const tools = [
    {name: "VS Code", icon: "terminal"},
    {name: "GitHub", icon: "account_tree"},
    {name: "Figma", icon: "design_services"},
    {name: "Unity", icon: "sports_esports"},
    {name: "Notion", icon: "sticky_note_2"},
    {name: "Vercel", icon: "deployed_code"},
];

const ToolsEnvironmentCard = () => {
    return (
        <section className="md:col-span-6 bg-surface-container-low rounded-xl p-8 border border-outline-variant/10">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-outline-variant/10 flex items-center justify-center text-on-surface">
                    <span className="material-symbols-outlined">
                        construction
                    </span>
                </div>
                <h2 className="font-headline text-2xl font-bold">
                    Tools &amp; Environment
                </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {tools.map((tool) => (
                        <ToolCard key={tool.name} name={tool.name} icon={tool.icon}/>
                ))}
            </div>
        </section>
    )
}

export default ToolsEnvironmentCard;