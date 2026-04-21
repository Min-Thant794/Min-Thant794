import React from "react";

const ContactSection = React.forwardRef<HTMLElement>((_, ref) => {
  const handleSubmit: React.ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="scroll-mt-24 relative overflow-hidden bg-surface-container-low py-32"
    >
      <div className="absolute right-0 top-0 h-full w-1/3 bg-primary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <div className="grid gap-20 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 font-headline text-5xl font-bold">
              Get in <span className="italic text-primary">Touch</span>
            </h2>

            <p className="mb-12 max-w-md text-xl leading-relaxed text-on-surface-variant">
              I&apos;m currently looking for internships and junior developer roles. If you have a project in mind or just want to chat, feel free to drop a message.
            </p>

            <div className="space-y-6">
              <div className="group flex items-center gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-outline-variant bg-surface-container-high text-primary transition-all group-hover:bg-primary group-hover:text-on-primary">
                  <span className="material-symbols-outlined">alternate_email</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant">Email</p>
                  <p className="text-lg font-medium text-on-surface">minthanthtun29@gmail.com</p>
                </div>
              </div>

              <div className="group flex items-center gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-outline-variant bg-surface-container-high text-primary transition-all group-hover:bg-primary group-hover:text-on-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant">Location</p>
                  <p className="text-lg font-medium text-on-surface">Singapore</p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="ghost-border space-y-6 rounded-3xl bg-surface-container p-10"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="ml-1 text-sm uppercase tracking-widest text-on-surface-variant">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border-0 border-b border-outline-variant bg-surface-container-low px-3 py-4 text-on-surface outline-none placeholder:text-outline transition-all focus:border-primary focus:ring-0"
                />
              </div>

              <div className="space-y-2">
                <label className="ml-1 text-sm uppercase tracking-widest text-on-surface-variant">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full border-0 border-b border-outline-variant bg-surface-container-low px-3 py-4 text-on-surface outline-none placeholder:text-outline transition-all focus:border-primary focus:ring-0"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="ml-1 text-sm uppercase tracking-widest text-on-surface-variant">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="How can I help you?"
                className="w-full resize-none border-0 border-b border-outline-variant bg-surface-container-low px-3 py-4 text-on-surface outline-none placeholder:text-outline transition-all focus:border-primary focus:ring-0"
              />
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer rounded-xl bg-linear-to-r from-primary to-tertiary py-4 font-bold text-on-primary-fixed transition-all hover:shadow-[0_10px_30px_rgba(160,255,195,0.2)] active:opacity-75"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;