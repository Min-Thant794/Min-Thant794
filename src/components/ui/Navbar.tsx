import { NavLink } from "react-router-dom";
import { useEffect, useId, useRef, useState } from "react";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuId = useId();
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/skills", name: "Skills" },
    { path: "/projects", name: "Projects" },
    { path: "/experience", name: "Education" },
    { path: "/contact", name: "Contact" },
  ];

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleOutsideInteraction = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      const clickedInsideMenu = menuRef.current?.contains(target);
      const clickedHamburger = hamburgerRef.current?.contains(target);

      if (!clickedInsideMenu && !clickedHamburger) {
        setIsMobileMenuOpen(false);
      }
    };

    // Use mousedown + touchstart to catch interaction before click fires
    document.addEventListener("mousedown", handleOutsideInteraction);
    document.addEventListener("touchstart", handleOutsideInteraction, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleOutsideInteraction);
      document.removeEventListener("touchstart", handleOutsideInteraction);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#0c0e12]/60 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink
          to="/"
          className="font-headline text-lg font-bold text-primary sm:text-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          MIN THANT TUN
        </NavLink>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              to={link.path}
              key={link.path}
              className={({ isActive }) =>
                `${isActive ? "text-primary" : ""} font-headline cursor-pointer text-on-surface-variant transition-colors duration-300 hover:text-primary`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/resume"
            className="rounded-xl bg-linear-to-br cursor-pointer active:opacity-70 from-primary to-tertiary px-6 py-2 font-bold text-on-primary-fixed transition-transform active:scale-90"
          >
            Resume
          </NavLink>
        </div>

        <button
        ref={hamburgerRef}
        type="button"
        className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/50 bg-[#1a1625] text-primary transition-all duration-200 hover:bg-[#241d35] active:scale-90 md:hidden"
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMobileMenuOpen}
        aria-controls={mobileMenuId}
        onClick={() => setIsMobileMenuOpen((v) => !v)}
      >
        <span className="relative flex h-5 w-5 flex-col items-center justify-center gap-1.25">
          <span className={`block h-[1.5px] w-full rounded-full bg-primary transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`block h-[1.5px] rounded-full bg-primary transition-all duration-200 ease-in-out ${isMobileMenuOpen ? "w-0 opacity-0" : "w-full opacity-100"}`} />
          <span className={`block h-[1.5px] w-full rounded-full bg-primary transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </span>
      </button>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <div
          aria-hidden="true"
          onClick={() => setIsMobileMenuOpen(false)}
          className={`fixed inset-0 z-9998 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        />

        <div
          id={mobileMenuId}
          ref={menuRef}
          className={[
            "fixed inset-x-3 top-24 z-9999 origin-top rounded-2xl sm:inset-x-4",
            "border border-white/8 bg-[#0d0f14]/98 shadow-2xl backdrop-blur-2xl",
            "transition-all duration-300 ease-out",
            isMobileMenuOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "-translate-y-3 scale-[0.97] opacity-0 pointer-events-none",
          ].join(" ")}
        >
          <div className="absolute inset-x-0 top-0 h-px rounded-full bg-linear-to-r from-transparent via-primary/40 to-transparent" />

          <div className="px-4 py-5">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <NavLink
                  to={link.path}
                  key={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${i * 40}ms` : "0ms",
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen ? "translateY(0)" : "translateY(-6px)",
                    transition: "opacity 0.25s ease-out, transform 0.25s ease-out",
                  }}
                  className={({ isActive }) =>
                    [
                      "group relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium",
                      "transition-colors duration-200",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-on-surface-variant hover:bg-white/4 hover:text-white",
                    ].join(" ")
                  }
                  >
                  {({ isActive }) => (
                    <>
                      <span className={`absolute left-0 top-1/2 h-5 w-0.75 -translate-y-1/2 rounded-full bg-primary transition-all duration-300 ${isActive ? "opacity-100 scale-y-100" : "opacity-0 scale-y-50"}`} />
                      <span className="font-headline">{link.name}</span>
                      <span className={`ml-auto text-xs text-primary/50 transition-all duration-200 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}>›</span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <div className="my-4 h-px bg-white/6" />

            <NavLink
              to="/resume"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                transitionDelay: isMobileMenuOpen ? `${navLinks.length * 40}ms` : "0ms",
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? "translateY(0)" : "translateY(-6px)",
                transition: "opacity 0.25s ease-out, transform 0.25s ease-out",
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-br from-primary to-tertiary px-6 py-3 font-bold text-on-primary-fixed active:opacity-80 active:scale-[0.98] transition-transform duration-150"
            >
              <span className="text-base font-bold">Resume</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
