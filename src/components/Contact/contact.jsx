import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-details">
                <h1>Contact Me.</h1>
                <FontAwesomeIcon icon={faUser} />
            </div>
        </div>
    )
}

export default Contact;