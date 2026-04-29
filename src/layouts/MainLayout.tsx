import { useRef } from "react";
import { Outlet } from "react-router-dom";
import ScrollToTopButton from "../components/ScrollToTopButton";
import NavBar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

const MainLayout = () => {
    const topRef = useRef<HTMLDivElement>(null);

    return (
        <div 
        ref={topRef}
        className="min-w-0 overflow-x-hidden bg-background transition-colors duration-700 text-on-background selection:bg-primary selection:text-black">
            <NavBar/>
            <main className="min-w-0 overflow-x-hidden">
                <Outlet/>
                <ScrollToTopButton
                    targetRef={topRef}
                    offset={0}
                    className="fixed z-50 cursor-pointer font-semibold bottom-8 right-8 flex items-center justify-center h-12 w-12 rounded-full bg-primary text-on-primary-fixed shadow-lg transition active:scale-100 sm:bottom-6 sm:right-6 sm:h-15 sm:w-15
                    "
                    >
                    ↑
                </ScrollToTopButton>
            </main>
            <Footer/>
        </div>
    )
}

export default MainLayout;
