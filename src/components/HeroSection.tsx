const HeroSection = () => {
  return (
    <section className="scroll-mt-24 relative mx-auto flex min-h-[921px] max-w-7xl items-center overflow-hidden px-8 py-20">
      <div className="z-10 grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="inline-block rounded-full border border-outline-variant/20 bg-surface-container-high px-4 py-1.5 text-sm uppercase tracking-widest text-primary">
            Available for Opportunities
          </div>

          <h1 className="font-headline text-6xl font-bold leading-tight tracking-tighter md:text-8xl">
            Hi, I&apos;m <span className="text-glow text-primary">Min Thant Tun</span>
          </h1>

          <p className="max-w-xl text-xl leading-relaxed text-on-surface-variant md:text-2xl">
            Aspiring Full-Stack Developer specialized in{" "}
            <span className="font-semibold text-on-surface">React &amp; Node.js</span>,
            currently mastering Java SE to build robust enterprise applications.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="rounded-xl bg-linear-to-br from-primary to-tertiary px-8 py-4 text-lg font-bold text-on-primary-fixed transition-all hover:shadow-[0_0_30px_rgba(160,255,195,0.2)]">
              View Projects
            </button>
            <button className="rounded-xl border border-outline-variant/30 bg-surface-container-high px-8 py-4 text-lg font-bold text-on-surface transition-all hover:bg-surface-container">
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSAdtvbZStWXZRoDXRtLbE01HuXaE9uyVrdLr73TRDI-LoVh7zijdBy61tVYjtuR1Zve2DfoeYgxg0h8s3D3Mkxc7mgqyOcNyAdjvJG6IezGZpWHrZV3ihUYKfWGsWFd9L7msPD_Ik8pKfp4lb2rWZ6o8QR320kLtIagX582drSwhZ8jhpa8dgqT6VMJLlcI-rUMtqy2x2zVLDMmphhBt6c2jaFhhoMdJz5xUioLWTawMTQoAlV82hCCCVnG21sCbdBZ9_8TkT3Ys"
              alt="Modern Development Environment"
              className="rounded-xl opacity-60 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection