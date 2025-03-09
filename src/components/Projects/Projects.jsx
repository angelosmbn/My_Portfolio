import React, { useState } from 'react';
import Project1 from '../../assets/HRIS_ATHS_PROJECT.png';
import Project2 from '../../assets/IMS_ATHS_PROJECT.png';
import Project3 from '../../assets/Intelliwatch_Project.png';
import './projects.css';
import ProjectsCard from "./ProjectCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Projects() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    
    const projects = [
        {
            num: "01",
            name: "ATHS Human Resource Management System",
            desc: "The ATHS Human Resource Management project focuses on efficiently managing employee information and attendance, enhancing communication within the organization. It automates routine HR tasks to improve overall efficiency and accuracy in employee management.",
            languages: "HTML, CSS 3, Javascript, PHP, PhpMyAdmin",
            image: Project1,
            gitLink: "https://github.com/angelosmbn/ATHS_HRIS"
        },
        {
            num: "02",
            name: "ATHS Inventory Management System",
            desc: "The ATHS Inventory Management System provides a robust solution for tracking and managing inventory levels, orders, and stock movements. Designed to minimize human interaction and create a paperless environment, it streamlines inventory processes for efficient stock control and reduces discrepancies.",
            languages: "HTML, CSS 3, Javascript, PHP, PhpMyAdmin",
            image: Project2,
            gitLink: "https://github.com/angelosmbn/IMS_ATHS"
        },
        {
            num: "03",
            name: "IntelliWatch",
            desc: "IntelliWatch is an advanced fall detection and analysis system that employs Python and YOLOv8 for keypoints detection. It features a Convolutional Neural Network (CNN) for detecting human actions, leveraging the Gemini API for functionality. The system also integrates Twilio to send real-time alerts via SMS and email, ensuring swift responses to falls among elderly individuals.",
            languages: "Python, YOLOv8, Gemini API, Twilio, MySQL",
            image: Project3,
            gitLink: "https://github.com/angelosmbn/IntelliWatch"
        }
        
    ];

    const handlePrevious = () => {
        setCurrentProjectIndex((prevIndex) => 
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentProjectIndex((prevIndex) => 
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleMouseDown = (event) => {
        setStartX(event.pageX || event.touches[0].clientX);
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (currentTranslate > 100) { // Adjust sensitivity as needed
            handleNext(); // Go to the next project when swiped right
        } else if (currentTranslate < -100) {
            handlePrevious(); // Go to the previous project when swiped left
        }
        setCurrentTranslate(0);
    };

    const handleMouseMove = (event) => {
        if (!isDragging) return;
        const x = event.pageX || event.touches[0].clientX;
        const walk = startX - x; // Calculate how far the mouse has moved
        setCurrentTranslate(walk);
    };

    const handleTouchMove = (event) => {
        const x = event.touches[0].clientX;
        const walk = startX - x;
        setCurrentTranslate(walk);
    };

    return (
        <div className="projectWindow">
            <div className="project">
                <div className="projectLeftWrapper">
                    <ProjectsCard
                        num={projects[currentProjectIndex].num}
                        name={projects[currentProjectIndex].name}
                        desc={projects[currentProjectIndex].desc}
                        languages={projects[currentProjectIndex].languages}
                        gitLink={projects[currentProjectIndex].gitLink}
                    />
                </div>
                <div className="projectRightWrapper">
                    <div
                        className="imageContainer"
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        onTouchStart={handleMouseDown}
                        onTouchEnd={handleMouseUp}
                        onTouchMove={handleTouchMove}
                        style={{
                            transform: `translateX(calc(-${currentProjectIndex * 100}% - ${2 * currentProjectIndex}rem + ${currentTranslate}px))`
                        }}
                    >
                        {projects.map((project, index) => (
                            <img
                                key={index}
                                src={project.image}
                                alt={`Project ${project.num}`}
                                className="homeImg"
                            />
                        ))}
                    </div>
                    <div className="projectButtons">
                        <button className="projectButtonPrevious" onClick={handlePrevious}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </button>
                        <button className="projectButtonNext" onClick={handleNext}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
