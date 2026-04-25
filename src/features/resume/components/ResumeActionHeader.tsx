const ResumeActionHeader = () => {

    const handlePrint = () => {
        window.print();
    }

    return (
        <div className="no-print mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
                <h1 className="mb-2 font-headline text-3xl font-bold text-on-surface sm:text-4xl md:text-5xl">
                Curriculum Vitae
                </h1>
                <p className="font-label text-sm uppercase tracking-widest text-on-surface-variant">
                Professional Software Architect
                </p>
            </div>

            <button
                type="button"
                onClick={handlePrint}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-headline font-bold text-on-primary-fixed transition-all hover:shadow-[0_0_20px_rgba(160,255,195,0.4)] active:scale-95 sm:w-auto"
            >
                <span className="material-symbols-outlined">download</span>
                Download PDF
            </button>
        </div>
    )
}

export default ResumeActionHeader;
