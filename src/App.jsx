import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Services from "./components/ServicesPage/Services.jsx";
import Resume from "./components/Resume/Resume.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";

const overlayVariants = {
    hidden: { y: "100%" },
    visible: { y: "0" },
    exit: { y: "-100%" },
};

const navbarVariants = {
    hidden: { opacity: 0 },
    visible: (firstLoad) => ({ opacity: 1, transition: { delay: firstLoad ? 0 : 0.3, duration: 0.5 } }),
    exit: { opacity: 0, transition: { delay: 0.2, duration: 0.5 } },
};

function App() {
    const validPages = ["home", "services", "resume", "projects", "contact"];
    const initialPage = validPages.includes(window.location.pathname.substring(1))
        ? window.location.pathname.substring(1)
        : "home";

    const [selectedPage, setSelectedPage] = useState(initialPage);
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [direction, setDirection] = useState(1);
    const [firstLoad, setFirstLoad] = useState(true);

    useEffect(() => {
        if (window.location.pathname === "/") {
            window.history.replaceState({ page: "home" }, "", "/home");
        }

        const handlePopState = (event) => {
            if (event.state?.page) {
                setDirection(-1);
                setOverlayVisible(true);
                setTimeout(() => {
                    setSelectedPage(event.state.page);
                    setOverlayVisible(false);
                }, 500);
            }
        };

        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    }, []);

    useEffect(() => {
        setTimeout(() => setFirstLoad(false), 500);
    }, []);

    const handlePageChange = (page) => {
        if (page !== selectedPage) {
            setDirection(1);
            setOverlayVisible(true);
            setTimeout(() => {
                setSelectedPage(page);
                window.history.pushState({ page }, "", `/${page}`);
                setOverlayVisible(false);
            }, 500);
        }
    };

    return (
        <div className="App">
            <div className="MainComponent">
                <div className="content-wrapper">
                    {/* Navbar with Fade In/Out Animation */}
                    <AnimatePresence mode="wait">
                        {!overlayVisible && (
                            <motion.div
                                key="navbar"
                                className="navbar-wrapper"
                                initial="hidden"
                                animate={() => navbarVariants.visible(firstLoad)}
                                exit="exit"
                                variants={navbarVariants}
                            >
                                <Navbar selectedPage={selectedPage} onPageChange={handlePageChange} />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Overlay Animation */}
                    <AnimatePresence>
                        {overlayVisible && (
                            <motion.div
                                className="overlay"
                                key="overlay"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={overlayVariants}
                                transition={{ duration: 0.5 }}
                            />
                        )}
                    </AnimatePresence>

                    {/* Main Content Animation */}
                    <AnimatePresence mode="wait">
                        {!overlayVisible && (
                            <motion.div
                                key={selectedPage}
                                className="page"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                {selectedPage === "home" && <Home />}
                                {selectedPage === "services" && <Services />}
                                {selectedPage === "resume" && <Resume />}
                                {selectedPage === "projects" && <Projects />}
                                {selectedPage === "contact" && <Contact />}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

export default App;