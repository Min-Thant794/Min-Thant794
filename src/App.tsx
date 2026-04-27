import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
//import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";

import PageTransition from "./components/ui/PageTransition";
import MainLayout from "./layouts/MainLayout";

const AnimatedRoutes = () => {

  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
          <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
          {/* <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} /> */}
          <Route path="/education" element={<PageTransition><Education /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/resume" element={<PageTransition><Resume/></PageTransition>}/>
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

const App = () => {
  return (
      <BrowserRouter basename="/Min-Thant794/">
          <ScrollToTop/>
          <AnimatedRoutes/>
      </BrowserRouter>
  )
}

export default App