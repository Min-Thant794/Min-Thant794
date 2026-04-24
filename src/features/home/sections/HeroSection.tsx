import type { RefObject } from "react";
import { useNavigate } from "react-router-dom";
import profileImage from "../../../assets/images/presenterAtPSBAcademy.png";

type HeroSectionProps = {
  contactRef: RefObject<HTMLElement | null>;
};

const HeroSection = ({ contactRef }: HeroSectionProps) => {
  const navigate = useNavigate();

  return (
    <section className="scroll-mt-24 relative mx-auto flex min-h-[calc(100vh-5rem)] items-center overflow-hidden px-5 py-20 sm:px-6 md:py-24 lg:min-h-screen lg:px-16 xl:px-32">
      <div className="z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="inline-block rounded-full border border-outline-variant/20 bg-surface-container-high px-4 py-1.5 text-sm uppercase tracking-widest text-primary">
            Available for Opportunities
          </div>

          <h1 className="font-headline text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Hi, I&apos;m <span className="text-glow text-primary">Min Thant Tun</span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-on-surface-variant sm:text-lg md:text-xl lg:text-2xl">
            Aspiring Full-Stack Developer specialized in{" "}
            <span className="font-semibold text-on-surface">React &amp; Node.js</span>,
            currently mastering Java SE to build robust enterprise applications.
          </p>

          <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:flex-wrap">
            <button
              onClick={() => navigate("/projects")}
              className="w-full cursor-pointer rounded-xl bg-linear-to-br from-primary to-tertiary px-6 py-3 text-base font-bold text-on-primary-fixed transition-all hover:shadow-[0_0_30px_rgba(160,255,195,0.2)] active:opacity-70 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
            >
              View Projects
            </button>

            <button
              onClick={() => {
                contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="w-full cursor-pointer rounded-xl border border-outline-variant/30 bg-surface-container-high px-6 py-3 text-base font-bold text-on-surface transition-all hover:bg-surface-container active:opacity-70 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-tertiary/10 blur-[100px]" />

          <div className="ghost-border group relative overflow-hidden rounded-2xl bg-surface-container-lowest p-4">
            <div className="mb-4 flex gap-2 px-2">
              <div className="h-3 w-3 rounded-full bg-outline-variant/40" />
              <div className="h-3 w-3 rounded-full bg-outline-variant/40" />
              <div className="h-3 w-3 rounded-full bg-outline-variant/40" />
            </div>

            <img
              src={profileImage}
              alt="Profile Picture"
              className="rounded-xl opacity-60 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;