import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationArrow, faLocationPin,  faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <div className="contact">
            <div className="contactDetails">
                <h1>Contact Me.</h1>
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </div>

            <div className="form">
                <form action="">
                    <h2>Send A Message</h2>
                    <input type="text" name="text" id="text" placeholder="Name" className="field" />
                    <input type="email" name="email" id="email" placeholder="Email" className="field" />
                    <textarea name="message" id="" cols="30" rows="10" placeholder="Message" className="field" />
                    <div className="send">
                    <input type="button" value="Send" className="btn" />
                    </div>                    
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