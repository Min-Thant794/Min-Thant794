import { NavLink } from "react-router-dom";

const NavBar = () => {
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
    {
      path: "/education",
      name: "Education"
    },
    {
      path: "/contact",
      name: "Contact"
    }
  ]

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#0c0e12]/60 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <div className="font-headline text-xl font-bold tracking-tighter text-primary">
          MIN THANT TUN
        </div>

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

          <button className="rounded-xl bg-linear-to-br cursor-pointer active:opacity-70 from-primary to-tertiary px-6 py-2 font-bold text-on-primary-fixed transition-transform active:scale-90">
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