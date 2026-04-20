const VisionQuote = () => {
    return (
        <div className="mx-auto max-w-4xl text-center">
            <span className="material-symbols-outlined mb-8 text-6xl text-outline-variant/20">
                format_quote
            </span>

            <p className="font-headline text-3xl font-medium leading-tight tracking-tight text-on-background/90 md:text-5xl">
                "My mission is to engineer software that feels less like a tool and more
                like an <span className="text-primary">intuitive extension</span> of
                human intent."
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-outline-variant" />
                <span className="font-label text-sm uppercase tracking-widest text-on-surface-variant">
                Min Thant Tun
                </span>
                <div className="h-px w-12 bg-outline-variant" />
            </div>
        </div>
    )
}

export default VisionQuote;