import React, { useRef } from "react";
import "../../components/sidebar/index.scss";
import logo from "../../Assets/logo.png"
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBriefcase, faCopyright, faEnvelope, faFilePdf, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";


const Sidebar = () => {
    const navRef = useRef();

    const showSidebar = () => {

        navRef.current.classList.toggle("responsive_nav");
    }



    return (
        <div className="sidebar">

            <div className="bars">
                <FontAwesomeIcon icon={faBars} onClick={showSidebar}/>
            </div>
            <nav ref={navRef}>
                <div className="logo">
                    <img src={logo} alt="" className="pic" />
                    <div className="logoName">
                        <h1>Moshood Kareem</h1>
                    </div>
                </div>
                <div className="nav">
                <NavLink exact="true" activeclassname="active" to="/" className="linkdetails">
                    <FontAwesomeIcon icon={faHome} id="home" className="icon" />
                    <label htmlFor="home">Home</label>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/profile" className="linkdetails">
                    <FontAwesomeIcon icon={faUser} id="profile" className="icon" />
                    <label htmlFor="profile">Profile</label>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/resume" className="linkdetails">
                    <FontAwesomeIcon icon={faFilePdf} id="resume" className="icon" />
                    <label htmlFor="resume">Resume</label>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/portfolio" className="linkdetails">
                    <FontAwesomeIcon icon={faBriefcase} id="portfolio" className="icon" />
                    <label htmlFor="portfolio">Portfolio</label>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/contact" className="linkdetails">
                    <FontAwesomeIcon icon={faEnvelope} id="contact" className="icon" />
                    <label htmlFor="contact">Contact</label>
                </NavLink>
                </div>


                <div className="mediaIcons">
                    <a target='_blank' href='https://twitter.com/its_DjMosh' className='icon'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a target="_blank" href="https://github.com/Moshood13" className="icon">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a target='_blank' href='https://www.linkedin.com/in/moshoodkareem13' className='icon'><FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a target='_blank' href='https://wa.me/2349075464649' className='icon'>
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </div>
                <footer>
                    <span>2023</span>
                    <FontAwesomeIcon icon={faCopyright} />
                    <span>Moshood Kareem</span>
                    <p>All Rights Reserved.</p>
                </footer>
            </nav>
        </div>
    );
};

export default Sidebar;