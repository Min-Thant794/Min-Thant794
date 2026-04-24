const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-24 bg-surface-container-low py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid items-start gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="mb-8 flex items-center gap-4 font-headline text-4xl font-bold md:text-5xl">
              <span className="text-primary">01.</span> About Me
            </h2>
            <div className="h-1 w-20 rounded-full bg-primary" />
          </div>

          <div className="space-y-6 lg:col-span-3">
            <p className="text-xl leading-relaxed text-on-surface-variant">
              Having completed a <span className="font-medium text-primary">BSc (Hons) in Computing</span> from
              Coventry University, I&apos;ve spent the past few years immersing myself in the
              architecture of modern digital systems.
            </p>

            <p className="text-xl leading-relaxed text-on-surface-variant">
              My journey is driven by a deep curiosity for how complex web ecosystems function.
              From the elegant reactivity of <span className="font-semibold text-on-surface">React</span> to the scalable power
              of <span className="font-semibold text-on-surface">Node.js</span>, I build with a focus on precision and user-centric performance.
            </p>

            <p className="text-xl leading-relaxed text-on-surface-variant">
              Beyond web tech, I've been deepening my understanding of <span className="font-medium text-tertiary">Java SE</span> to strengthen my
              foundation in object-oriented programming and enterprise-level systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection