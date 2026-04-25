import { Outlet } from "react-router-dom";
import NavBar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

const MainLayout = () => {
    return (
        <div className="min-w-0 overflow-x-hidden bg-background text-on-background selection:bg-primary selection:text-on-primary">
            <NavBar/>
            <main className="min-w-0 overflow-x-hidden">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default MainLayout;
