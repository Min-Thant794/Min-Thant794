const Footer = () => {
  return (
    <footer className="w-full bg-[#0c0e12] py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 border-t-2 border-outline-variant/45 px-8 pt-12 md:flex-row">
        <div className="font-headline text-lg font-bold text-primary">
          MIN THANT TUN
        </div>

        <p className="font-headline text-sm uppercase tracking-widest text-on-surface-variant">
          © 2026 Min Thant Tun | All Rights Reserved
        </p>

        <div className="flex gap-8">
          <a 
          href="https://github.com/Min-Thant794"
          target="_blank"
          rel="noopener noreferrer"
          className="font-headline text-sm uppercase tracking-widest text-on-surface-variant opacity-80 transition-all hover:text-tertiary hover:opacity-100">
            GitHub
          </a>
          <a 
          href="https://www.linkedin.com/in/min-thant-tun-b73a4337a/" 
          target="_blank"
          rel="noopener noreferrer"
          className="font-headline text-sm uppercase tracking-widest text-on-surface-variant opacity-80 transition-all hover:text-tertiary hover:opacity-100">
            LinkedIn
          </a>
          <a 
          href="https://wa.me/6585025446?text=Hello%20Min%20Thant%20Tun,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect"
          target="_blank"
          rel="noopener noreferrer"
          className="font-headline text-sm uppercase tracking-widest text-on-surface-variant opacity-80 transition-all hover:text-tertiary hover:opacity-100">
            WhatsApp
          </a>
          <a 
          href="mailto:minthanthtun29@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Min%20Thant%20Tun,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect"
          className="font-headline text-sm uppercase tracking-widest text-on-surface-variant opacity-80 transition-all hover:text-tertiary hover:opacity-100"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer