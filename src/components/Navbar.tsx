import { useNavigate } from "react-router-dom";

const NavBar = () => {

  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#0c0e12]/60 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <div className="font-headline text-xl font-bold tracking-tighter text-primary">
          MIN THANT TUN
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <div 
          onClick={() => navigate("/")}
          className="font-headline cursor-pointer tracking-tight text-on-surface-variant transition-colors duration-300 hover:text-primary">
            Home
          </div>
          <div 
          onClick={() => navigate("/about")}
          className="font-headline cursor-pointer tracking-tight text-on-surface-variant transition-colors duration-300 hover:text-primary">
            About
          </div>
          <div 
          onClick={() => navigate("/skills")}
          className="font-headline cursor-pointer tracking-tight text-on-surface-variant transition-colors duration-300 hover:text-primary">
            Skills
          </div>
          <div 
          onClick={() => navigate("/projects")}
          className="font-headline cursor-pointer tracking-tight text-on-surface-variant transition-colors duration-300 hover:text-primary">
            Projects
          </div>
          {/* <div 
          onClick={() => navigate("/experience")}
          className="font-headline cursor-pointer tracking-tight text-on-surface-variant transition-colors duration-300 hover:text-primary">
            Experience
          </div> */}
          <div 
          onClick={() => navigate("/education")}
          className="font-headline cursor-pointer tracking-tight text-on-surface-variant transition-colors duration-300 hover:text-primary">
            Education
          </div>
          <div 
          onClick={() => navigate("/contact")}
          className="font-headline cursor-pointer tracking-tight text-on-surface-variant transition-colors duration-300 hover:text-primary">
            Contact
          </div>

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