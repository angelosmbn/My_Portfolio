import { useState } from "react";
import './resume.css';
import ResumeCard from "./ResumeCard.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faCss3Alt, faHtml5, faJava, faJs, faPhp, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import cpp from '../../assets/C++_logo.png'; 
import mysql from '../../assets/MySQL-Logo.png';
import oracle from '../../assets/Oracle-Logo.png';
import phpmyadmin from '../../assets/PhpMyAdmin_logo.png';
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
                                <ResumeCard year="2023-Present" name="Freelancer" loc="San Simon, Pampanga" />
                            </div>
                        )}

                        {selectedButton === 'education' && (
                            <div className="resumeCardExperienceContainer">
                                <ResumeCard year="2021-Present" name="Bachelor of Science in Computer Science with specialization in Software Engineering" loc="FEU Institute of Technology" />
                                <ResumeCard year="2015-2021" name="Senior and Junior High School" award="With High Honors" loc="Assumpta Technical High School" />
                            </div>
                        )}

                        {selectedButton === 'skills' && (
                            <div className="resumeCardSkillsContainer">
                                <div>
                                    <span><FontAwesomeIcon icon={faPython} /></span>
                                </div>
                                <div>
                                    <span><FontAwesomeIcon icon={faJava} /></span>
                                </div>
                                <div>
                                    <span><FontAwesomeIcon icon={faJs} /></span>
                                </div>
                                <div>
                                    <span><FontAwesomeIcon icon={faPhp} /></span>
                                </div>
                                <div>
                                    <span><FontAwesomeIcon icon={faReact} /></span>
                                </div>
                                <div>
                                    <span><FontAwesomeIcon icon={faCss3Alt} /></span>
                                </div>
                                <div>
                                    <span><FontAwesomeIcon icon={faAndroid} /></span>
                                </div>
                                <div>
                                    <span><FontAwesomeIcon icon={faHtml5} /></span>
                                </div>
                                <div className="skillCpp">
                                    <img src={cpp} alt="C++"  />
                                </div>
                                <div>
                                    <img src={mysql} alt="MySQL" className="skillMysql" />
                                </div>
                                <div>
                                    <img src={oracle} alt="MySQL" className="skillMysql" />
                                </div>
                                <div>
                                    <img src={phpmyadmin} alt="MySQL" className="skillMysql" />
                                </div>
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
                                        0 years
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