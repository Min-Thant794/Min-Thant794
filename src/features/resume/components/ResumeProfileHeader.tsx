import Me from "../../../assets/images/me.png"

const ResumeProfileHeader = () => {
    return (
        <div className="mb-7 grid grid-cols-1 gap-8 border-b border-outline-variant/20 pb-12 md:grid-cols-3">
            <div className="flex justify-center md:justify-start">
                <img 
                src={Me} 
                alt="Resume Photo" 
                className="rounded-full w-36 h-36 object-cover sm:h-44 sm:w-44 md:h-52 md:w-52 lg:h-60 lg:w-60"
                />
            </div>
            <div className="md:col-span-2">
                <h2 className="mb-3 font-headline text-3xl font-bold text-primary sm:text-4xl md:text-6xl">
                MIN THANT TUN
                </h2>
                <h3 className="font-headline text-xl mb-3 uppercase tracking-widest font-bold ">
                    Full-Stack Developer (Fresh Graduate)
                </h3>
                <p className="max-w-xl text-base font-light leading-relaxed text-on-surface sm:text-lg md:text-md">
                    Computer Science graduate with hands-on experience developing full-stack web applications using React, Node.js, and MongoDB. Built systems with authentication, booking logic, and caching using JWT and Redis. Interested in building scalable and user-focused applications while continuously improving backend and system design skills.
                </p>
            </div>
        </div>
    )
}

export default ResumeProfileHeader;
