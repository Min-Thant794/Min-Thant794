const Footer = () => {
  return (
    <footer className="w-full bg-[#0c0e12] py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-outline-variant/10 px-8 pt-12 md:flex-row">
        <div className="font-headline text-lg font-bold text-primary">
          MIN THANT TUN
        </div>

        <p className="font-headline text-sm uppercase tracking-widest text-on-surface-variant">
          © 2026 Min Thant Tun | All Rights Reserved
        </p>

        <div className="flex gap-8">
          <a href="#" className="font-headline text-sm uppercase tracking-widest text-on-surface-variant opacity-80 transition-all hover:text-tertiary hover:opacity-100">
            GitHub
          </a>
          <a href="#" className="font-headline text-sm uppercase tracking-widest text-on-surface-variant opacity-80 transition-all hover:text-tertiary hover:opacity-100">
            LinkedIn
          </a>
          <a href="#" className="font-headline text-sm uppercase tracking-widest text-on-surface-variant opacity-80 transition-all hover:text-tertiary hover:opacity-100">
            Twitter
          </a>
          <a href="#" className="font-headline text-sm uppercase tracking-widest text-on-surface-variant opacity-80 transition-all hover:text-tertiary hover:opacity-100">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer