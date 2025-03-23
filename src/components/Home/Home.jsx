import React from 'react';
import MyImage from '../../assets/my_image.png'; // Adjust the path to go up to the correct directory
import './home.css';
import HomeCard from "./HomeCard.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

function Home() {
    return (
        <>
            <div className="homeWindow">
                <div className="home">
                    <div className="homeLeftWrapper">
                        <div src={MyImage} alt="Ian" className="homeImg">
                            <img src={MyImage} alt="Ian" className="homeImg" />
                        </div>
                    </div>
                    <div className="homeRightWrapper">
                        
                        <div className="homeCareer">Software Developer</div>
                        <div className="homeGreetings">Hi, I'm</div>
                        <div className="homeName">Ian Angelo<br/>Simbulan</div>
                        <div className="homeDesc">I am a computer science student with a passion for developing innovative and efficient software solutions, and I am proficient in various programming languages and technologies.</div>
                        <div className="homeLinks">
                            <a href="/Ian_Angelo_Simbulan_Resume.pdf" download="Ian_Angelo_Simbulan_Resume.pdf" id="downloadA">
                                <button>
                                    <div>
                                        DOWNLOAD CV
                                    </div>
                                    <div className='downloadIcon'>
                                        <FontAwesomeIcon icon={faArrowAltCircleDown} />
                                    </div>
                                </button>
                            </a>
                            
                            <a href="https://edith.feutech.edu.ph/briefcase/profile/angelosmbn">
                                <FontAwesomeIcon icon={faBriefcase} />
                            </a>
                            <a href="https://github.com/angelosmbn">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://www.linkedin.com/in/angelosmbn/">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="https://www.facebook.com/Angelosmbn">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="homeBottomWrapper">
                    <HomeCard num={4} name1="Projects" name2="Completed"/>
                    <HomeCard num={5} name1="Programming" name2="Languages"/>
                    <HomeCard num={1} name1="Years of" name2="Work Experience"/>
                    <HomeCard num={5} name1="Certifications" name2="Earned"/>
                </div>
            </div>
        </>
    );
}

export default Home;
