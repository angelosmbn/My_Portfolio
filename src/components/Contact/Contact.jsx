import React, {useEffect, useState} from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'



function Contact() {
    useEffect(() => {
        const selectElement = document.getElementById('service');

        // Check if the select element exists before adding the event listener
        if (selectElement) {
            const handleChange = () => {
                if (selectElement.value) {
                    selectElement.style.color = '#ffffff'; // Change color to black when an option is selected
                } else {
                    selectElement.style.color = 'gray'; // Keep it gray when nothing is selected
                }
            };

            selectElement.addEventListener('change', handleChange);

            // Cleanup the event listener on component unmount
            return () => {
                selectElement.removeEventListener('change', handleChange);
            };
        }
    }, []); 

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        // Convert form data to an object
        const payload = Object.fromEntries(formData);

        // Check if all required fields are filled
        if (!payload.firstName || !payload.lastName || !payload.email || !payload.phoneNumber || !payload.service || !payload.message) {
            Swal.fire({
                title: "Incomplete Form",
                text: "Please fill in all the fields before submitting.",
                icon: "warning",
                confirmButtonText: "OK",
                confirmButtonColor: "#ffc107" // Yellow color for warning
            });
            return; // Stop form submission
        }
    
        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
        formData.append("access_key", accessKey);
        
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());
        
            if (res.success) {
                Swal.fire({
                    title: "Thank you!",
                    text: "Your message has been sent successfully. We'll get back to you shortly.",
                    icon: "success"
                });
                event.target.reset(); // Clear the form after success
                const selectElement = document.getElementById('service');
                selectElement.style.color = 'gray';
            } else {
                Swal.fire({
                    title: "Thank you!",
                    text: "Your message has been sent successfully. We'll get back to you shortly.",
                    icon: "success",
                    confirmButtonText: "OK",
                    confirmButtonColor: "#28a745"
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Oops...",
                text: "Something went wrong. Please try again later.",
                icon: "error",
                confirmButtonText: "OK",
                confirmButtonColor: "#dc3545"
            });
        }
    };
    

    return (
        <>
            <div className="contactWindow">
                <div className="contact">
                    <div className="contactLeftWrapper">
                        <div className="contactLeftWrapperHeader">
                            Let's work together
                        </div>
                        <div className="contactLeftWrapperDescription">
                            I’m excited to hear about your project and explore how we can collaborate. Whether you have a specific idea in mind or just want to brainstorm, feel free to reach out. Let’s create something amazing together!
                        </div>
                        <form onSubmit={onSubmit}>
                            <input type='text' name='firstName' placeholder='First name'/>
                            <input type='text' name='lastName' placeholder='Last name'/>
                            <input type='email' name='email' placeholder='Email'/>
                            <input type="text" name="phoneNumber" placeholder="Phone number" pattern="^(?=.*\d)[0-9+\-\s]+$" title="Only digits, spaces, +, and - are allowed. Must contain at least one digit."/>

                            <select name="service" id="service" className='full-width' defaultValue=''>
                                <option value="" disabled>Select a service</option>
                                <option value="Web Development">Web Development</option>
                                <option value="UI/UX Design">UI/UX Design</option>
                                <option value="Software Development">Software Development</option>
                                <option value="Mobile App Development">Mobile App Development</option>
                            </select>
                            <textarea name="message" id="message" className='full-width' placeholder='Type your message here.'></textarea>
                            <div className="submitButton">
                                <button type='submit'>Send message</button>
                            </div>
                        </form>
                    </div>
                    <div className="contactRightWrapper">
                        <div className="containers">
                            <div className="iconContainer">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            +63 927 134 0561
                        </div>
                        <div className="containers">
                            <div className="iconContainer">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            angelosimbulan16@gmail.com
                        </div>
                        <div className="containers">
                            <div className="iconContainer">
                                <FontAwesomeIcon icon={faLocationDot} />
                            </div>
                            San Simon, Pampanga, Philippines
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
