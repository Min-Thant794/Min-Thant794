import { statusItems } from "../data";

const StatusGrid = () => {
    return (
        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {statusItems.map((item) => (
                <div
                    key={item.title}
                    className={`border-l-2 bg-surface-container-low/50 p-6 ${item.borderColor}`}
                >
                    <h4 className={`mb-2 font-headline font-bold ${item.titleColor}`}>
                        {item.title}
                    </h4>
                    <p className="text-sm text-on-surface-variant">
                        {item.description}
                    </p>
                </div>
            ))}
        </section>
    )
}

export default StatusGrid;
