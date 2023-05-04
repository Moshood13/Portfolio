import React, { useRef } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationArrow, faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons";
import emailjs from 'emailjs-com';


const Contact = () => {

    const refForm = useRef();

    const SendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm(
            'service_01fzne6',
            'template_xbrfnmo',
            refForm.current,
            '97ibF4eazIK-D_jtb').then(
                () => {
                    alert('Message succesfully sent')
                    window.location.reload(false)
                },
                (error) => {
                    alert('Failed to send message, please try again')
                }
            )
    }

    return (
        <div className="contact">
            <div className="contactDetails">
                <h1>Contact Me.</h1>
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </div>

            <div className="form">
                <form ref={refForm} onSubmit={SendEmail}>
                    <h2>Send A Message</h2>
                    <input type="text" name="text" id="text" placeholder="Name" className="field" required />
                    <input type="email" name="email" id="email" placeholder="Email" className="field" required />
                    <textarea name="message" id="message" placeholder="Message" className="field" required />
                    <input type="submit" value="Send" className="btn" />
                </form>
                <div className="alternative">
                    <div className="email">
                        <FontAwesomeIcon icon={faLocationArrow} className="icon" />
                        <p>mk.bidemi005@gmail.com</p>
                    </div>
                    <div className="location">
                        <FontAwesomeIcon icon={faLocationPin} className="icon" />
                        <p>Lagos, Nigeria</p>
                    </div>
                    <div className="call">
                        <FontAwesomeIcon icon={faPhone} className="icon" />
                        <p>09075464649</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;