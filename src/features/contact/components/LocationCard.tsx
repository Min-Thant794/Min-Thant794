const LocationCard = () => {
    return (
        <section className="relative min-h-75 overflow-hidden rounded-xl bg-surface-container-low outline outline-outline-variant/15 lg:flex-1">
            <div className="absolute inset-0 opacity-40 mix-blend-luminosity">
                <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB_QYZG0YKdbxqyIJdlsPIB1em3AmDrdTxobOytm5OzTgWL13YGHIjwNPLS6m59XJ_x5DbHJeanjGnev_onZ0czflDgl-OsVLCdHCbmf9hk-Q1AAxomdX3GIzUhNB7bKiBH0hYVI5xf-GzyvZu46MBsyO1InuwMwANbQeHVdi4BRe3ezK7HMORV7cJorZP091YN2EoGuAVo62uCkNEPKGN2jA7jP8IzEobPNk21GV856CjOICuhc3Fgy4TCo92CS_ya9XLzmkAb_0"
                alt="Abstract minimalist map of a modern city"
                className="h-full w-full object-cover"
                />
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-surface-container-low via-transparent to-transparent" />

            <div className="relative flex h-full flex-col justify-end p-8">
                <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                <span className="font-headline text-xs uppercase tracking-widest text-primary">
                    Live Connection
                </span>
                </div>

                <h3 className="mb-1 font-headline text-2xl font-bold">
                Currently located in
                </h3>
                <p className="text-on-surface-variant">Singapore</p>
                <p className="mt-4 font-mono text-xs text-outline">
                UTC+08:00 • Ready for global collaboration
                </p>
            </div>
        </section>
    )
}

export default LocationCard;