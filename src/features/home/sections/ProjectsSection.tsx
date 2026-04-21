import { useNavigate } from "react-router-dom";

const ProjectsSection = () => {

  const navigate = useNavigate();

  return (
    <section id="projects" className="scroll-mt-24 bg-surface-container-low py-32">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="mb-4 font-headline text-4xl font-bold md:text-5xl">
              Selected Works
            </h2>
            <p className="text-on-surface-variant">
              A collection of systems engineered for performance and scalability.
            </p>
          </div>

          <a 
          onClick={() => navigate("/projects")}
          href="#" className="group flex items-center gap-2 font-bold text-primary">
            View All Projects
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="ghost-border group relative overflow-hidden rounded-3xl bg-surface-container lg:col-span-8">
            <div className="absolute inset-0 z-10 bg-linear-to-t from-surface-container-lowest to-transparent opacity-80" />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuASV2ru4bn3xOrSBl_bku01ZlUFCeBgZtGGIkTU80aeql7KTIcGLNI3GyRTmM23kumQX3sAZugYcsYQGZzsbKXed0TiQu9wPbzdEegDEzQCiGZfqAd8IBUMDHNsJF2-LCqiy47CxPjjiZ040Tl5RcmttoJ2ktVpMPiQBmnkzAFPx6LCq1ZNlKU6MylfrelHuX-n4P7cFH9JhsIBWZbNnpqMcftUCz51aGkU1zHCVb1-vYStSJb9uyXIPlhM-BPB7s0Iew3S7OGLgMw"
              alt="IRBS System Dashboard"
              className="h-125 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute bottom-0 left-0 z-20 w-full p-12">
              <div className="mb-4 flex gap-2">
                <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-on-primary-fixed">
                  Full-Stack
                </span>
              </div>

              <h3 className="mb-4 font-headline text-3xl font-bold text-on-background">
                Integrated Rental Booking System (IRBS)
              </h3>

              <p className="mb-6 max-w-xl text-on-surface-variant">
                A comprehensive platform designed to streamline rental workflows, featuring
                real-time availability tracking and automated booking management.
              </p>

              <div className="flex gap-4">
                <a href="#" className="rounded-full bg-surface-container-highest p-3 transition-all hover:bg-primary hover:text-on-primary">
                  <span className="material-symbols-outlined">link</span>
                </a>
                <a href="#" className="rounded-full bg-surface-container-highest p-3 transition-all hover:bg-primary hover:text-on-primary">
                  <span className="material-symbols-outlined">code</span>
                </a>
              </div>
            </div>
          </div>

          <div className="ghost-border group relative overflow-hidden rounded-3xl bg-surface-container lg:col-span-4">
            <div className="absolute inset-0 z-10 bg-linear-to-t from-surface-container-lowest to-transparent opacity-80" />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfZTaDwzGi1ylGag3iB8hMg8k_nfRJ_M3fqN-F26AvonCMQWnjdpapMNVBBiHOfRviTxG46hL30Hk3YE5rEkDvjGFxxpdCxRGGP546aOu9jhkKC9CCmzg-c8EUAwonCkGA8raTCAGRiBE-lw3bYxZSKejZMx2-f-WtEYQIrfK6a7HinaVjf7vkn6yj4HxrdmA4pT9s26O-YJ2a-U4QMPchto_9JSvLLCRp9o8FHetqRhKUmlPN7sJXHhJ1avXdZYBVSmIBstqQsOY"
              alt="Shopping PWA"
              className="h-125 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute bottom-0 left-0 z-20 p-8">
              <div className="mb-4 flex gap-2">
                <span className="rounded-full bg-tertiary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-on-tertiary">
                  PWA
                </span>
              </div>

              <h3 className="mb-3 font-headline text-2xl font-bold text-on-background">
                Shopping PWA
              </h3>

              <p className="mb-6 text-on-surface-variant">
                A mobile-first shopping experience built for speed and offline capabilities.
              </p>

              <div className="flex gap-4">
                <a href="#" className="rounded-full bg-surface-container-highest p-3 transition-all hover:bg-tertiary hover:text-on-tertiary">
                  <span className="material-symbols-outlined">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection