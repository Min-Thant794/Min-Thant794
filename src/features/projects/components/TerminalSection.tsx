const TerminalSection = () => {
    return (
        <section className="mb-32">
            <div className="overflow-hidden rounded-xl border border-outline-variant/20 bg-surface-container-lowest">
                <div className="flex items-center gap-2 border-b border-outline-variant/10 bg-surface-container-low px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-error/40" />
                <div className="h-3 w-3 rounded-full bg-primary/40" />
                <div className="h-3 w-3 rounded-full bg-tertiary/40" />
                <span className="ml-4 font-label text-xs text-on-surface-variant/60">
                    architecture_overview.sh
                </span>
                </div>

                <div className="p-8 font-mono text-sm leading-relaxed text-on-surface-variant">
                <p className="mb-2 text-primary">// Global Tech Stack Strategy</p>
                <p>
                    <span className="text-tertiary">const</span>{" "}
                    <span className="text-on-surface">principles</span> = {"{"}
                </p>
                <p className="pl-6">
                    performance: <span className="text-primary">'sub-100ms TTI'</span>,
                </p>
                <p className="pl-6">
                    scalability:{" "}
                    <span className="text-primary">'microservices-ready'</span>,
                </p>
                <p className="pl-6">
                    ui_ux:{" "}
                    <span className="text-primary">'accessibility-first'</span>
                </p>
                <p>{"};"}</p>

                <p className="mt-4">
                    <span className="text-tertiary">function</span>{" "}
                    <span className="text-on-surface">deployExperience</span>() {"{"}
                </p>
                <p className="pl-6 text-on-surface-variant/80">
                    return <span className="text-on-surface">projects</span>.map((p)
                    =&gt; p.optimize().ship());
                </p>
                <p>{"}"}</p>
                </div>
            </div>
        </section>
    )
}

export default TerminalSection;