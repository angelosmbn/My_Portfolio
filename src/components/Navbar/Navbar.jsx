import './navbar.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar({ selectedPage, onPageChange }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleButtonClick = () => {

        console.log("123")
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            {/* Large Screen Navbar */}
            <div className="navbar-large">
                <div className="myName" onClick={() => onPageChange('home')}>
                    Ian<span className="coloredPeriod">.</span>
                </div>

                <nav className="navbarRight">
                    <div className="pages">
                        {['home', 'services', 'resume', 'projects', 'contact'].map((page) => (
                        <span 
                            key={page} 
                            className={selectedPage === page ? 'active' : ''}
                            onClick={() => onPageChange(page)}
                        >
                            {page.charAt(0).toUpperCase() + page.slice(1)}
                        </span>
                        ))}
                    </div>
                </nav>

            </div>

            {/* Small Screen Navbar */}
            <div className="navbar-small">
                <div className="navbarHeader">
                    <div className="myName" onClick={() => onPageChange('home')}>
                        Ian<span className="coloredPeriod">.</span>
                    </div>
                    <div className="barButtonContainer">
                        <button className="barButton" onClick={handleButtonClick}>
                            <FontAwesomeIcon icon={faBars} style={{ fontSize: 'clamp(.8rem, 1.5vw, 10rem)' }} />
                        </button>
                    </div>
                </div>

                <nav className={`choices ${menuOpen ? 'open' : ''}`}>
                    {['home', 'services', 'resume', 'projects', 'contact'].map((page) => (
                        <span 
                            key={page} 
                            onClick={() => {
                                onPageChange(page);
                                setMenuOpen(false); // Close menu on selection
                            }} 
                            style={selectedPage === page ? { color: '#00ffff', textDecoration: 'underline' } : {}}
                        >
                            {page.charAt(0).toUpperCase() + page.slice(1)}
                        </span>
                    ))}
                </nav>

            </div>
        </>
    );
}

export default Navbar;
