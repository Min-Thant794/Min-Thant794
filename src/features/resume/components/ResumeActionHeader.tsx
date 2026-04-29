const ResumeActionHeader = () => {
    return (
        <div className="no-print mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
                <h1 className="mb-2 font-headline text-3xl font-bold text-on-surface sm:text-4xl md:text-5xl">
                Resume
                </h1>
            </div>
            <a 
            href={`${import.meta.env.BASE_URL}myResume.pdf`}
            download
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-headline font-bold text-on-primary-fixed transition-all hover:shadow-[0_0_20px_rgba(160,255,195,0.4)] active:scale-95 sm:w-auto">
                <span className="material-symbols-outlined">download</span>
                Download Resume (PDF)
            </a>
        </div>
    )
}

export default ResumeActionHeader;
