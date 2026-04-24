import { NavLink } from "react-router-dom";
import { useEffect, useId, useState } from "react";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuId = useId();

  const navLinks = [
    {
      path: "/",
      name: "Home"
    },
    {
      path: "/about",
      name: "About"
    },
    {
      path: "/skills",
      name: "Skills"
    },
    {
      path: "/projects",
      name: "Projects"
    },
    // {
    //   path: "/experience",
    //   name: "Experience"
    // },
    {
      path: "/experience",
      name: "Education"
    },
    {
      path: "/contact",
      name: "Contact"
    }
  ]

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

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#0c0e12]/60 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <NavLink
          to="/"
          className="font-headline text-xl font-bold tracking-tighter text-primary"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          MIN THANT TUN
        </NavLink>

        <div className="hidden items-center gap-8 md:flex">
          {
            navLinks.map((link) => (
              <NavLink 
              to={link.path}
              key={link.path}
              className={({isActive}) => `${isActive ? 'text-primary' : ''} font-headline cursor-pointer tracking-tight text-on-surface-variant transition-colors duration-300 hover:text-primary`}
              >
                {link.name}
              </NavLink>
            ))
          }

          <NavLink 
          to={"/resume"}
          className="rounded-xl bg-linear-to-br cursor-pointer active:opacity-70 from-primary to-tertiary px-6 py-2 font-bold text-on-primary-fixed transition-transform active:scale-90">
            Resume
          </NavLink>
        </div>

        <button
          type="button"
          className="text-primary md:hidden"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls={mobileMenuId}
          onClick={() => setIsMobileMenuOpen((v) => !v)}
        >
          <span className="material-symbols-outlined">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        {isMobileMenuOpen ? (
          <button
            type="button"
            aria-label="Close menu overlay"
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        ) : null}

        <div
          id={mobileMenuId}
          className={[
            "fixed left-0 right-0 top-20 z-50 origin-top bg-[#0c0e12]/95 backdrop-blur-xl",
            "transition-[transform,opacity] duration-200 ease-out",
            isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0 pointer-events-none",
          ].join(" ")}
        >
          <div className="mx-auto max-w-7xl px-8 py-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  to={link.path}
                  key={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    [
                      "font-headline cursor-pointer tracking-tight transition-colors duration-300",
                      "text-on-surface-variant hover:text-primary",
                      isActive ? "text-primary" : "",
                    ].join(" ")
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <NavLink
                to="/resume"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 inline-flex w-fit rounded-xl bg-linear-to-br cursor-pointer active:opacity-70 from-primary to-tertiary px-6 py-2 font-bold text-on-primary-fixed transition-transform active:scale-90"
              >
                Resume
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar