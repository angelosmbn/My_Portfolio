import { useState } from "react";
import './resume.css';
import ResumeCard from "./ResumeCard.jsx";
import cpp from '../../assets/C++_logo.png'; 
import mysql from '../../assets/MySQL-Logo.png';
import oracle from '../../assets/Oracle-Logo.png';
import phpmyadmin from '../../assets/PhpMyAdmin_logo.png';
import CSE_Certificate from '../../assets/CSE_Certificate.png';
import DevNet_Certificate from '../../assets/DevNet_Certificate.jpg';
import CCNA_Certificate from '../../assets/CCNA_Certificate.jpg';
import Python_Certificate from '../../assets/Python_Certificate.jpg';
import Java_Certificate from '../../assets/Java_Certificate.jpg';
import odoo from '../../assets/Odoo-Logo.png';
import python from '../../assets/python-logo.png';
import java from '../../assets/java-logo.png';
import js from '../../assets/JavaScript-logo.png';
import php from '../../assets/php-logo.png';
import react from '../../assets/react.svg';
import css from '../../assets/css-logo.png';
import android from '../../assets/android-logo.png';
import html from '../../assets/html-logo.png';
import git from '../../assets/git-logo.png';
import docker from '../../assets/docker-logo.png';

//create use state for ui of buttons
function Resume() {

    const [selectedButton, setSelectedButton] = useState('experience'); // Default selected button
    const handleButtonChange = (button) => {
        setSelectedButton(button); // Update selected button

    };

    const descriptions = {
        experience: 'A summary of my professional experience, highlighting my key responsibilities and achievements in each role.',
        education: 'A comprehensive overview of my academic background, highlighting my commitment to learning and growth in my field.',
        skills: 'A summary of my technical and interpersonal skills acquired through education and projects.',
        'about me': 'A brief introduction about myself, highlighting my interests and aspirations.',
        certificates: 'A list of certificates and awards I have received throughout my academic and professional career.',
    };

    // Get the description based on the selected button
    const description = descriptions[selectedButton] || '';




    return (
        <>
            <div className="resumeWindow">
                <div className="resume">
                    <div className="resumeLeftWrapper">
                        <div className="resumeLeftWrapperHeader">
                            Why hire me?
                        </div>
                        <div className="resumeLeftWrapperDescription">
                        With a strong foundation in diverse programming languages and technologies, I bring a passion for developing innovative solutions and a commitment to delivering high-quality work.
                        </div>

                        <div className="resumeButtons">
                            <button 
                                onClick={() => handleButtonChange('experience')}
                                style={selectedButton === 'experience' ? { backgroundColor: '#51a5ff' } : {}}
                            >
                                Experience
                            </button>
                            <button 
                                onClick={() => handleButtonChange('education')}
                                style={selectedButton === 'education' ? { backgroundColor: '#51a5ff' } : {}}
                            >
                                Education
                            </button>
                            <button 
                                onClick={() => handleButtonChange('skills')}
                                style={selectedButton === 'skills' ? { backgroundColor: '#51a5ff' } : {}}
                            >
                                Skills
                            </button>
                            <button 
                                onClick={() => handleButtonChange('certificates')}
                                style={selectedButton === 'certificates' ? { backgroundColor: '#51a5ff' } : {}}
                            >
                                Certificates
                            </button>
                            <button 
                                onClick={() => handleButtonChange('about me')}
                                style={selectedButton === 'about me' ? { backgroundColor: '#51a5ff' } : {}}
                            >
                                About me
                            </button>
                        </div>
                    </div>

                    <div className="resumeRightWrapper">
                        <div className='resumeRightWrapperHeader'>
                            {selectedButton.charAt(0).toUpperCase() + selectedButton.slice(1)} {/* Capitalize the header */}
                        </div>
                        <div className="resumeRightWrapperDescription">
                            {
                                description
                            }
                        </div>
                            <div className="cardsContainer">
                                
                            
                        {selectedButton === 'experience' && (
                            <div className="resumeCardExperienceContainer">
                                <ResumeCard year="2025-Present" name="Junior Full Stack Developer" company="Acheive Without Borders" loc="Makati, Metro Manila" />
                                <ResumeCard year="2024-2025" name="Full Stack Developer Intern" company="Acheive Without Borders" loc="Makati, Metro Manila" />
                                <ResumeCard year="2023-Present" name="Freelancer" loc="San Simon, Pampanga" />
                            </div>
                        )}

                        {selectedButton === 'education' && (
                            <div className="resumeCardExperienceContainer">
                                <ResumeCard year="2021-Present" name="BS in Computer Science with specialization in Software Engineering" award="Dean's Lister" loc="FEU Institute of Technology" />
                                <ResumeCard year="2015-2021" name="Senior and Junior High School" award="With High Honors" loc="Assumpta Technical High School" />
                            </div>
                        )}

                        {selectedButton === 'skills' && (
                            <div className="resumeCardSkillsContainerMain">
                            <div className="resumeCardSkillsContainer">
                                <div className="skills">
                                    <div className="PopUpName" id="PopUpName">Python</div>
                                    <img src={python} alt="Python" className="skillMysql" />
                                </div>
                                <div className="skills">
                                    <div className="PopUpName" id="PopUpName">Java</div>
                                    <img src={java} alt="Java" className="skillMysql" />
                                </div>
                                <div className="skills">
                                    <div className="PopUpName" id="PopUpName">JavaScript</div>
                                    <img src={js} alt="JavaScript" className="skillMysql" />
                                </div>
                                <div className="skills">
                                    <div className="PopUpName" id="PopUpName">PHP</div>
                                    <img src={php} alt="PHP" className="skillMysql" />
                                </div>
                                <div className="skills">
                                    <div className="PopUpName" id="PopUpName">React</div>
                                    <img src={react} alt="React" className="skillMysql" />
                                </div>
                                <div className="skills">
                                    <div className="PopUpName" id="PopUpName">Odoo</div>
                                    <img src={odoo} alt="Odoo" className="skillMysql" />
                                </div>
                                <div className="skills">
                                    <div className="PopUpName" id="PopUpName">CSS</div>
                                    <img src={css} alt="CSS" className="skillMysql" />
                                </div>
                                <div className="skills">
                                    <div className="PopUpName" id="PopUpName">Android</div>
                                    <img src={android} alt="Android" className="skillMysql" />
                                </div>
                                <div className="skills">
                                    <div className="PopUpName" id="PopUpName">Html</div>
                                    <img src={html} alt="Html" className="skillMysql" />
                                </div>
                                <div className="skills">
                                    <div className="PopUpName" id="PopUpName">C++</div>
                                    <img src={cpp} alt="C++" className="skillMysql" />
                                </div>
                                <div className="skills">
                                    <div className="PopUpName" id="PopUpName">MySQL</div>
                                    <img src={mysql} alt="MySQL" className="skillMysql" />
                                </div>
                                <div className="skills">
                                    <div className="PopUpName" id="PopUpName">Oracle</div>
                                    <img src={oracle} alt="Oracle" className="skillMysql" />
                                </div>
                                <div className="skills">
                                    <div className="PopUpName" id="PopUpName">phpMyAdmin</div>
                                    <img src={phpmyadmin} alt="phpMyAdmin" className="skillMysql" />
                                </div>
                                <div className="skills">
                                    <div className="PopUpName" id="PopUpName">Git</div>
                                    <img src={git} alt="Git" className="skillMysql" />
                                </div>
                                <div className="skills">
                                    <div className="PopUpName" id="PopUpName">Docker</div>
                                    <img src={docker} alt="Docker" className="skillMysql" />
                                </div>
                            </div>
                            </div>
                        )}

                        {selectedButton === 'certificates' && (
                            <div className="resumeCardExperienceContainer">
                                <ResumeCard year="2024" name="Civil Service Eligibility - Professional" org="Civil Service Commission" img={CSE_Certificate} />
                                <ResumeCard year="2023" name="DevNet Associate" org="Cisco" img={DevNet_Certificate} />
                                <ResumeCard year="2023" name="CCNA: Introduction to Networks" org="Cisco" img={CCNA_Certificate} />
                                <ResumeCard year="2023" name="IT Specialist - Python" org="Certiport - A Pearson VUE Business" img={Python_Certificate} />
                                <ResumeCard year="2022" name="IT Specialist - Java" org="Certiport - A Pearson VUE Business" img={Java_Certificate} />
                            </div>
                        )}

                        {selectedButton === 'about me' && (
                            <div className="resumeAboutMeContainer">
                                <div className="leftAboutMeContainer">
                                    <div>
                                        <span>Name&nbsp;&nbsp;</span>
                                        Ian Angelo M. Simbulan
                                    </div>
                                    <div>
                                        <span>Experience&nbsp;&nbsp;</span>
                                        0.3 years
                                    </div>
                                    <div>
                                        <span>Nationality&nbsp;&nbsp;</span>
                                        Filipino
                                    </div>
                                    <div>
                                        <span>Freelance&nbsp;&nbsp;</span>
                                        Available
                                    </div>
                                </div>
                                <div className="rightAboutMeContainer">
                                    <div>
                                        <span>Phone&nbsp;&nbsp;</span>
                                        Ian Angelo M. Simbulan
                                    </div>
                                    <div>
                                        <span>Age&nbsp;&nbsp;</span>
                                        22 years old
                                    </div>
                                    <div>
                                        <span>Email&nbsp;&nbsp;</span>
                                        angelosimbulan16@gmail.com
                                    </div>
                                    <div>
                                        <span>Languages&nbsp;&nbsp;</span>
                                        English, Filipino
                                    </div>
                                </div>

                            </div>
                        )}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Resume;
