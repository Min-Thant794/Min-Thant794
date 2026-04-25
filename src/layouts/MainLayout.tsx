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
        className="min-w-0 overflow-x-hidden bg-background text-on-background selection:bg-primary selection:text-on-primary">
            <NavBar/>
            <main className="min-w-0 overflow-x-hidden">
                <Outlet/>
                <ScrollToTopButton
                targetRef = {topRef}
                offset={0}
                className="fixed cursor-pointer font-semibold bottom-8 right-8 z-50 rounded-full bg-primary px-4 py-3 text-on-primary-fixed shadow-lg transition active:scale-95"
                >
                ↑
                </ScrollToTopButton>
            </main>
            <Footer/>
        </div>
    )
}

export default MainLayout;
