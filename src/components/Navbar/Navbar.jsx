import './navbar.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon } from '@fortawesome/free-solid-svg-icons';

function Navbar({ selectedPage, onPageChange }) {

    const handleButtonClick = () => {
        const choices = document.querySelector('.choices');
        if (choices.style.transform === 'translateX(0%)') {
            choices.style.transform = 'translateX(-100%)';
            return;
        }
        choices.style.transform = 'translateX(0%)';

    };
    

    return (
        <>
            <div className="navbar-large">
                <div 
                    className="myName" 
                    href="#home" 
                    onClick={() => onPageChange('home')} 
                >
                    Ian
                    <span className="coloredPeriod">.</span>
                </div>

                <div className="navbarRight">
                    <div className='pages'>
                        <a 
                            href="#home" 
                            onClick={() => onPageChange('home')} 
                            style={selectedPage === 'home' ? { color: '#00ffff', textDecoration: 'underline' } : {}}
                        >
                            Home
                        </a>
                        <a 
                            href="#services" 
                            onClick={() => onPageChange('services')} 
                            style={selectedPage === 'services' ? { color: '#00ffff', textDecoration: 'underline' } : {}}
                        >
                            Services
                        </a>
                        <a 
                            href="#resume" 
                            onClick={() => onPageChange('resume')} 
                            style={selectedPage === 'resume' ? { color: '#00ffff', textDecoration: 'underline' } : {}}
                        >
                            Resume
                        </a>
                        <a 
                            href="#projects" 
                            onClick={() => onPageChange('projects')} 
                            style={selectedPage === 'projects' ? { color: '#00ffff', textDecoration: 'underline' } : {}}
                        >
                            Projects
                        </a>
                        <a 
                            href="#contact" 
                            onClick={() => onPageChange('contact')} 
                            style={selectedPage === 'contact' ? { color: '#00ffff', textDecoration: 'underline' } : {}}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>

            <div className="navbar-small">
                <div className="navbarHeader">

                
                    <div 
                        className="myName" 
                        href="#home" 
                        onClick={() => onPageChange('home')} 
                    >
                        Ian
                        <span className="coloredPeriod">.</span>
                    </div>
                    <div className="barButtonContainer">
                        <button className="barButton" onClick={handleButtonClick}>
                            <FontAwesomeIcon icon={faBars} style={{ fontSize: 'clamp(.8rem, 1.5vw, 10rem)'}}/>
                        </button>
                    </div>
                </div>
                <div className="choices">
                <a 
                            href="#home" 
                            onClick={() => onPageChange('home')} 
                            style={selectedPage === 'home' ? { color: '#00ffff', textDecoration: 'underline' } : {}}
                        >
                            Home
                        </a>
                        <a 
                            href="#services" 
                            onClick={() => onPageChange('services')} 
                            style={selectedPage === 'services' ? { color: '#00ffff', textDecoration: 'underline' } : {}}
                        >
                            Services
                        </a>
                        <a 
                            href="#resume" 
                            onClick={() => onPageChange('resume')} 
                            style={selectedPage === 'resume' ? { color: '#00ffff', textDecoration: 'underline' } : {}}
                        >
                            Resume
                        </a>
                        <a 
                            href="#projects" 
                            onClick={() => onPageChange('projects')} 
                            style={selectedPage === 'projects' ? { color: '#00ffff', textDecoration: 'underline' } : {}}
                        >
                            Projects
                        </a>
                        <a 
                            href="#contact" 
                            onClick={() => onPageChange('contact')} 
                            style={selectedPage === 'contact' ? { color: '#00ffff', textDecoration: 'underline' } : {}}
                        >
                            Contact
                        </a>
                </div>
            </div>
        </>
    );
}

export default Navbar;
