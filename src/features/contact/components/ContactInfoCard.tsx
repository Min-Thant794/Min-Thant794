import { contactChannels } from "../data";

const ContactInfoCard = () => {
    return (
        <section className="rounded-xl bg-surface-container p-8 outline outline-outline-variant/15">
            <h3 className="mb-8 font-headline text-xl font-bold text-primary">
                Direct Channels
            </h3>

            <div className="space-y-6">
                {contactChannels.map((channel) => {
                const accentClass =
                    channel.accent === "primary"
                    ? "group-hover:bg-primary group-hover:text-on-primary"
                    : channel.accent === "tertiary"
                    ? "group-hover:bg-tertiary group-hover:text-on-tertiary"
                    : "group-hover:bg-on-surface group-hover:text-background";

                const textHoverClass =
                    channel.accent === "primary"
                    ? "group-hover:text-primary"
                    : channel.accent === "tertiary"
                    ? "group-hover:text-tertiary"
                    : "group-hover:text-on-surface-variant";

                return (
                    <a
                    key={channel.label}
                    href={channel.href}
                    className="group flex items-center gap-6"
                    >
                    <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full bg-surface-container-highest transition-all duration-300 ${accentClass}`}
                    >
                        <span className="material-symbols-outlined">{channel.icon}</span>
                    </div>

                    <div>
                        <p className="font-headline text-xs uppercase tracking-widest text-on-surface-variant">
                        {channel.label}
                        </p>
                        <p className={`text-on-surface transition-colors ${textHoverClass}`}>
                        {channel.value}
                        </p>
                    </div>
                    </a>
                );
                })}
            </div>
        </section>
    )
}

export default ContactInfoCard;