import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Services from "./components/ServicesPage/Services.jsx";
import Resume from "./components/Resume/Resume.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";

function App() {
    const isDown = process.env.VITE_REACT_APP_IS_DOWN === "true";

    if (isDown) {
        console.log('isDown:', process.env.VITE_REACT_APP_IS_DOWN);
        return (
            <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div className="MaintenanceContainer" style={{ textAlign: 'center' }}>
                    <img src="/assets/maintenance.gif" alt="Maintenance Mode" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
                    <p style={{ fontSize: '1.2rem', color: '#555' }}>My portfolio is getting a glow-up right now. New projects arriving soon!</p>
                </div>
            </div>
        );
    } else {
        console.log('isDown else1:', process.env.VITE_REACT_APP_IS_DOWN);
    }

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

    const validPages = ["home", "services", "resume", "projects", "contact"];
    
    // Initialize the page based on the first load
    const initialPage = sessionStorage.getItem("currentPage") || "home";
    
    const [selectedPage, setSelectedPage] = useState(initialPage);
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [firstLoad, setFirstLoad] = useState(true);

    useEffect(() => {
        // Store the current page in sessionStorage to maintain state on refresh
        sessionStorage.setItem("currentPage", selectedPage);

        // Add the current page to the history stack without showing it in the URL
        window.history.replaceState({ page: selectedPage }, "");

        const handlePopState = (event) => {
            if (event.state?.page) {
                setOverlayVisible(true);
                setTimeout(() => {
                    setSelectedPage(event.state.page);
                    setOverlayVisible(false);
                }, 500);
            }
        };

        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    }, [selectedPage]);

    useEffect(() => {
        setTimeout(() => setFirstLoad(false), 500);
    }, []);

    const handlePageChange = (page) => {
        if (page !== selectedPage) {
            setOverlayVisible(true);

            // Push new state to the history stack without changing the URL
            window.history.pushState({ page }, "");
            
            setTimeout(() => {
                setSelectedPage(page);
                setOverlayVisible(false);
            }, 500);
        }
    };

    return (
        <div className="App">
            <div className="MainComponent">
                <div className="content-wrapper">
                    {/* Navbar with Animation */}
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
