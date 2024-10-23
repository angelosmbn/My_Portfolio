import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faStar } from '@fortawesome/free-solid-svg-icons';

function ResumeCard(props) {

    return (
        <>
            <div className='resumeCard'>
                <div className='resumeCardYear'>
                    {props.year}
                </div>
                <div className="resumeCardNameContainer">
                    <div className='resumeCardName'>
                        {props.name}
                    </div>
                </div>
                {props.award && ( // Conditionally render award container
                    <div className="resumeCardAwardContainer">
                        <div className='resumeCardAward'>
                            <span><FontAwesomeIcon icon={faStar} /> </span>
                            {props.award}
                        </div>
                    </div>
                )}
                <div className="resumeCardLocContainer">
                    <div className="LocBullet">
                        <FontAwesomeIcon icon={faMapPin} />
                    </div>
                    <div className='resumeCardLoc'>
                        {props.loc}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ResumeCard;
