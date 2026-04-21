import { Outlet } from "react-router-dom";
import NavBar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

const MainLayout = () => {
    return (
        <div className="bg-background text-on-background selection:bg-primary selection:text-on-primary">
            <NavBar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default MainLayout;