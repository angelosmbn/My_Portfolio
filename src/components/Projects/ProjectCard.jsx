import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';

function ProjectsCard (props) {

    return (
        <>
        <div className='projectCard'>
            <div className="projectCardNum">
                {props.num} {/* Display the counting number */}
            </div>
            <div className="projectCardName">
                {props.name}
            </div>
            <div className="projectCardDesc">
                {props.desc}
            </div>
            <div className="projectCardLanguages">
                {props.languages}
            </div>
        </div>
        <div className="projectCardLinks">
            <a href={props.gitLink}>
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
        </>
    );
}

export default ProjectsCard;