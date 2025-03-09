import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faStamp, faStar, faBuilding } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'


function ResumeCard(props) {
    
    const handleCardClick = () => {
        // Trigger SweetAlert2 popup when the card is clicked
        Swal.fire({
            title: `<strong>${props.name}</strong>`,
            html: `
                <img src="${props.img}" alt="${props.name}" style="width: 100%; height: auto; margin-bottom: 10px;" />
                <p><strong>Issuing Organization:</strong> ${props.org}</p>
                <p><strong>Year:</strong> ${props.year}</p>
            `,
            icon: '',
            confirmButtonText: 'Close',
            showCloseButton: true,
            background: '#fefefe', // Customize background color if needed
            customClass: {
                popup: 'swal-custom-popup', // Add a custom class if you want to style it further
            },
            width: '40vw', // Set the desired width
            height: 'auto', // Set to auto for dynamic height or specify a fixed height like '400px'
        });
        
    }

    return (
        <>
            <div className='resumeCard'>
                <div className='resumeCardYear'>
                    {props.year}
                </div>
                {props.loc ? (
                    <div className="resumeCardNameContainer">
                        <div className='resumeCardName'>
                            {props.name}
                        </div>
                    </div>
                ) : (
                    <div className="resumeCardNameContainer">
                        <div className='resumeCardName'>
                            <a href='#' onClick={handleCardClick} style={{ cursor: 'pointer' }}>{props.name}</a>
                        </div>
                    </div>
                )}
                {props.award && (
                    <div className="resumeCardAwardContainer">
                        <div className='resumeCardAward'>
                            <span><FontAwesomeIcon icon={faStar} /> </span>
                            {props.award}
                        </div>
                    </div>
                )}
                {props.company && (
                    <div className="resumeCardCompanyContainer">
                        <div className='resumeCardAward'>
                            <span><FontAwesomeIcon icon={faBuilding} /> </span>
                            {props.company}
                        </div>
                    </div>
                )}
                {props.loc ? (
                    <div className="resumeCardLocContainer">
                        <div className="LocBullet">
                            <FontAwesomeIcon icon={faMapPin} />
                        </div>
                        <div className="resumeCardLoc">
                            {props.loc}
                        </div>
                    </div>
                ) : (
                    <div className="resumeCardLocContainer">
                        <div className="LocBullet">
                            <FontAwesomeIcon icon={faStamp} />
                        </div>
                        <div className="resumeCardLoc">
                            {props.org}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default ResumeCard;
