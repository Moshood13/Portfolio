import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faLaptopCode, faMobileScreen, faUser } from "@fortawesome/free-solid-svg-icons";
import cv from "../../Assets/files/MoshoodKareem.pdf"
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div className="profile">
            <div className="header">
                <h1>Profile</h1>
                <FontAwesomeIcon icon={faUser} className="icon" />
            </div>
            <div className="content">
                <div className="PS">
                    <h2>Front-End Developer</h2>
                    <br />
                    <p>I am Moshood Kareem, a skilled and dedicated Front-end Developer with entry level experience in designing, developing and maintaining front-end web applications, endowed with efficient knowledge and effective use of web development skills such Html, CSS, Javascript and React amongst others. Adept at contributing to a highly collaborative work environment, identify problems, find solutions and ensure maximum customer's satisfaction.</p>
                    <br />
                    <p>I am keen and willing to gain more experience and knowledge on the field by working with experienced and top level developers. For this reason, i am open to any company willing to offer me a placement to become one of the team members and in return, i would offer my full commitment and be a pleasant, hardworking, friendly and great addition to your team. </p>
                    <br />
                    <p>I am therefore currently looking for a job or an intership as a Front-end Developer. </p>
                    <Link to="/contact">
                            <button className="ct btn">Contact</button>
                        </Link>
                </div>
                <div className="PD">
                    <h2>Personal Information</h2>
                    <div className="info">
                        <h3>Name</h3>
                        <span className="dots">:</span>
                        <span className="value">Moshood Kareem</span>
                    </div>
                    <div className="info">
                        <h3>Age</h3>
                        <span className="dots">:</span>
                        <span className="value">26</span>
                    </div>
                    <div className="info">
                        <h3>Address</h3>
                        <span className="dots">:</span>
                        <span className="value">Lagos, Nigeria</span>
                    </div>
                    <div className="info">
                        <h3>Email</h3>
                        <span className="dots">:</span>
                        <span className="value">mk.bidemi005@gmail.com</span>
                    </div>
                    <div className="info">
                        <h3>Phone Number</h3>
                        <span className="dots">:</span>
                        <span className="value">09075464649</span>
                    </div>
                    <div className="info">
                        <h3>Freelance</h3>
                        <span className="dots">:</span>
                        <span className="value">Available</span>
                    </div>
                    <div className="rsm">
                        <a href={cv} target="_blank"  rel="noreferrer" >
                        <button className="btn">Download Resume</button>
                        </a>                        
                    </div>
                </div>
            </div>

            <div className="services">
                <div className="header2">
                    <h2>Services</h2>
                </div>
                <div className="serviceInfo">
                    <div className="serviceList">
                        <FontAwesomeIcon icon={faLaptopCode} className="icon" />
                        <h4>Web Development</h4>
                        <p>Deliver high quality service and consistent business results with a resourceful approach to handling routine and complex issues.</p>
                    </div>
                    <div className="serviceList">
                        <FontAwesomeIcon icon={faMobileScreen} className="icon" />
                        <h4>Responsive Design</h4>
                        <p> Web developer in creating  responsive web applications that can display on desktop, laptop and also on all mobile devices.</p>
                    </div>
                    <div className="serviceList">
                        <FontAwesomeIcon icon={faHeadset} className="icon" />
                        <h4>Audio Engineer</h4>
                        <p>A passionate audio enginner with good skills and knowledge on audio editing softwares like Adobe audition, Sonar, Fl-studio, Cubase and many more.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;