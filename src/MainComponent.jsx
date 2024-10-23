import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Services from "./components/ServicesPage/Services.jsx";
import Resume from "./components/Resume/Resume.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";

const overlayVariants = {
    hidden: { y: '100%' }, // Start hidden (below the screen)
    visible: { y: '0' }, // Fully cover the page
    exit: { y: '-100%' }, // Slide up to reveal the new page
};

function MainComponent() {
    const [selectedPage, setSelectedPage] = useState('home'); // Default selected page
    const [overlayVisible, setOverlayVisible] = useState(false); // Control overlay visibility

    const handlePageChange = (page) => {
        const choices = document.querySelector('.choices');
        if (choices.style.transform === 'translateX(0%)') {
            choices.style.transform = 'translateX(-100%)';
            
            // Delay the execution of the following code by 0.5 seconds (500 milliseconds)
            setTimeout(() => {
                if (page !== selectedPage) { // Only trigger the transition if the selected page changes
                    setOverlayVisible(true); // Show the overlay
                    setTimeout(() => {
                        setSelectedPage(page); // Update selected page after overlay is triggered
                    }, 500); // Delay to allow the overlay animation to complete
                }
            }, 400); // Initial delay before checking the page chang
        }else{
            if (page !== selectedPage) { // Only trigger the transition if the selected page changes
                setOverlayVisible(true); // Show the overlay
                setTimeout(() => {
                    setSelectedPage(page); // Update selected page after overlay is triggered
                }, 500); // Delay to allow the overlay animation to complete
            }
        }

        
    };

    useEffect(() => {
        if (overlayVisible) {
            const timer = setTimeout(() => {
                setOverlayVisible(false); // Hide the overlay after 1 second
            }, 1000); // Duration for overlay to cover the page

            return () => clearTimeout(timer); // Cleanup timeout on unmount
        }
    }, [overlayVisible]);

    return (
        <div className="MainComponent">
            <Navbar selectedPage={selectedPage} onPageChange={handlePageChange} />

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
                        transition={{ duration: 1 }} // 1 second for the overlay to cover
                    />
                )}
            </AnimatePresence>

            {/* Main Content Animation */}
            <AnimatePresence>
                {!overlayVisible && (
                    <motion.div
                        key={selectedPage} // Unique key for the new page transition
                        className="page"
                        initial={{ opacity: 0 }} // Start transparent
                        animate={{ opacity: 1 }} // Fade in
                        exit={{ opacity: 0 }} // Fade out
                        transition={{ duration: .5 }} // 1 second for fade in/out
                    >
                        {/* Render the selected page */}
                        {selectedPage === 'home' && <Home />}
                        {selectedPage === 'services' && <Services />}
                        {selectedPage === 'resume' && <Resume />}
                        {selectedPage === 'projects' && <Projects />}
                        {selectedPage === 'contact' && <Contact />}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default MainComponent;
