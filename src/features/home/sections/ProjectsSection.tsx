import { NavLink } from "react-router-dom";
import ProjectImageCarousel from "../../../components/ui/ProjectImageCarousel";
import p1HomePage from "../../../assets/images/projects/IRBS.png"
import p1CarPage from "../../../assets/images/projects/carListing.png"
import p1BookingPage from "../../../assets/images/projects/booking.png"
import p2HomePage from "../../../assets/images/projects/shoppingPWA.png"
import p2DealsPage from "../../../assets/images/projects/deals.png"
import p2CartPage from "../../../assets/images/projects/cart.png"

const ProjectsSection = () => {

  return (
    <section id="projects" className="bg-surface-container-low py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="mb-4 font-headline text-4xl font-bold md:text-5xl">
              Selected Works
            </h2>
            <p className="text-on-surface-variant">
              A collection of systems engineered for performance and scalability.
            </p>
          </div>

          <NavLink 
          to={"/projects"}
          className="group flex items-center gap-2 font-bold text-primary transition-colors hover:text-primary/80"
          >
            View All Projects
            <span className="material-symbols-outlined transition-transform duration-300 ease-out group-hover:translate-x-2">
              arrow_right_alt
            </span>
          </NavLink>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Project 1 */}
          <div className="group relative overflow-hidden rounded-3xl border border-outline-variant/30 bg-surface-container/40 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 lg:col-span-8">
            <div className="absolute inset-0 z-10 bg-linear-to-t from-surface-container-lowest to-transparent opacity-80" />

            <ProjectImageCarousel
              images={[p1HomePage, p1CarPage, p1BookingPage]}
              alt="IRBS project preview"
            />

            <div className="absolute bottom-0 left-0 z-20 w-full p-5 sm:p-8 lg:p-12">
              <div className="mb-4 flex gap-2">
                <span className="rounded-full border border-primary/30 bg-primary/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary shadow-[0_0_15px_rgba(160,255,195,0.3)]">
                  Full-Stack
                </span>
              </div>

              <h3 className="mb-4 font-headline text-2xl font-bold text-on-background sm:text-3xl lg:text-4xl">
                Integrated Rental Booking System (IRBS)
              </h3>

              <p className="mb-6 max-w-xl text-on-surface-variant">
                A comprehensive full-stack platform developed as an academic project, featuring real-time availability tracking and automated booking management.
              </p>

              <div className="flex gap-4">
                {/* have to put deployed link */}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/50 bg-surface-container-highest/50 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-on-primary"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    open_in_new
                  </span>
                </a>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Min-Thant794/my-project.git"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/50 bg-surface-container-highest/50 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-on-primary"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    code
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group relative overflow-hidden rounded-3xl border border-outline-variant/30 bg-surface-container/40 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-tertiary/50 lg:col-span-4">
            <div className="absolute inset-0 z-10 bg-linear-to-t from-surface-container-lowest to-transparent opacity-80" />

            <ProjectImageCarousel
              images={[p2HomePage, p2DealsPage, p2CartPage]}
              alt="Shopping PWA preview"
            />

            <div className="absolute bottom-0 left-0 z-20 w-full p-5 sm:p-8">
              <div className="mb-4 flex gap-2">
                <span className="rounded-full border border-tertiary/30 bg-tertiary/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-tertiary shadow-[0_0_15px_rgba(122,230,255,0.3)]">
                  Full Stack
                </span>
              </div>

              <h3 className="mb-4 font-headline text-2xl font-bold text-on-background sm:text-3xl lg:text-4xl">
                Shopping PWA
              </h3>

              <p className="mb-6 text-on-surface-variant">
                A Progressive Web App developed with mentor guidance, delivering fast, installable, and offline-capable shopping experiences.
              </p>

              <div className="flex gap-4">
                <a
                  href="#deployed link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/50 bg-surface-container-highest/50 transition-all duration-300 hover:border-tertiary hover:bg-tertiary hover:text-on-tertiary"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    open_in_new
                  </span>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Min-Thant794/shoppingWebsite.git"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/50 bg-surface-container-highest/50 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-on-primary"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;