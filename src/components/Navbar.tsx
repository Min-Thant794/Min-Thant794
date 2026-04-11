const NavBar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-[#0c0e12]/60 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <div className="font-headline text-xl font-bold tracking-tighter text-[#a0ffc3]">
          MIN THANT TUN
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#about" className="font-headline tracking-tight text-[#aaabb0] transition-colors duration-300 hover:text-[#a0ffc3]">About</a>
          <a href="#skills" className="font-headline tracking-tight text-[#aaabb0] transition-colors duration-300 hover:text-[#a0ffc3]">Skills</a>
          <a href="#projects" className="font-headline tracking-tight text-[#aaabb0] transition-colors duration-300 hover:text-[#a0ffc3]">Projects</a>
          <a href="#experience" className="font-headline tracking-tight text-[#aaabb0] transition-colors duration-300 hover:text-[#a0ffc3]">Experience</a>
          <a href="#education" className="font-headline tracking-tight text-[#aaabb0] transition-colors duration-300 hover:text-[#a0ffc3]">Education</a>
          <a href="#contact" className="font-headline tracking-tight text-[#aaabb0] transition-colors duration-300 hover:text-[#a0ffc3]">Contact</a>

          <button className="rounded-xl bg-linear-to-br from-primary to-tertiary px-6 py-2 font-bold text-on-primary-fixed transition-transform active:scale-90">
            Resume
          </button>
        </div>

        <button className="text-primary md:hidden" aria-label="Open menu">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar