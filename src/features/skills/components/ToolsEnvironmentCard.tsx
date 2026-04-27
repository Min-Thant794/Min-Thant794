import ToolCard from "./ToolCard";

const tools = [
    {name: "VS Code", icon: "terminal"},
    {name: "GitHub", icon: "account_tree"},
    {name: "Figma", icon: "design_services"},
    {name: "Postman", icon: "sync_alt"},
    {name: "Render", icon: "cloud_done"},
    {name: "Vercel", icon: "deployed_code"},
];

const ToolsEnvironmentCard = () => {
    return (
        <section className="rounded-xl border border-outline-variant/10 bg-surface-container-low p-5 sm:p-8 md:col-span-12">
            <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-outline-variant/10 text-on-surface">
                    <span className="material-symbols-outlined">
                        construction
                    </span>
                </div>
                <h2 className="font-headline text-xl font-bold sm:text-2xl">
                    Tools &amp; Environment
                </h2>
            </div>

            <div className="grid grid-cols-5 sm:grid-cols-6 gap-4">
                {tools.map((tool) => (
                        <ToolCard key={tool.name} name={tool.name} icon={tool.icon}/>
                ))}
            </div>
        </section>
    )
}

export default ToolsEnvironmentCard;
