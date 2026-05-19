import gsap from "gsap";
import Lenis from "lenis";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import Schedule from "./pages/Schedule";
import Scoring from "./pages/Scoring";
import Staff from "./pages/Staff";

function App() {
    useEffect(() => {
        const lenis = new Lenis();
        window.lenis = lenis;

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(lenis.raf);
            lenis.destroy();
            window.lenis = null;
        };
    }, []);

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <PageTransition>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/rules" element={<Rules />} />
                    <Route path="/scoring" element={<Scoring />} />
                    <Route path="/staff" element={<Staff />} />
                    <Route path="/faq" element={<FAQ />} />
                </Routes>
            </PageTransition>
            <Footer />
        </div>
    );
}

export default App;
