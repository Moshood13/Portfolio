import React from "react";
import "../../components/sidebar/index.scss";
import logo from "../../Assets/logo.png"
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCopyright, faEnvelope, faFilePdf, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src={logo} alt="" className="pic"/>
                <div className="logoName">
                    <h1>Moshood Kareem</h1>
                </div>
            </div>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/" className="linkdetails">
                    <FontAwesomeIcon icon={faHome} id="home" className="icon"/> 
                    <label htmlFor="home">Home</label>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/profile" className="linkdetails">
                    <FontAwesomeIcon icon={faUser} id="profile" className="icon"/> 
                    <label htmlFor="profile">Profile</label>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/resume" className="linkdetails">
                    <FontAwesomeIcon icon={faFilePdf} id="resume" className="icon"/> 
                    <label htmlFor="resume">Resume</label>
                </NavLink> 
                <NavLink exact="true" activeclassname="active" to="/portfolio" className="linkdetails">
                    <FontAwesomeIcon icon={faBriefcase} id="portfolio" className="icon"/> 
                    <label htmlFor="portfolio">Portfolio</label>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/contact" className="linkdetails">
                    <FontAwesomeIcon icon={faEnvelope} id="contact" className="icon"/> 
                    <label htmlFor="contact">Contact</label>
                </NavLink>               
            </nav>

            <div className="mediaIcons">
                <a href="" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
            </div>
            <footer>
                <span>2023</span>
                <FontAwesomeIcon icon={faCopyright} />
                <span>Moshood Kareem</span>
                <p>All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Sidebar;