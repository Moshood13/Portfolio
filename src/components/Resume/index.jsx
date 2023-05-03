import React from "react";
import "../../components/Resume/index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faCode, faEnvelope, faGraduationCap, faLocationPin, faPhone, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { faCss3, faGithub, faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";


const Resume = () => {
    return (
        <div className="resume">
            <div className="name">
                <h2>Moshood Abiola Kareem</h2>
                <p>Junior Front-end Developer</p>
            </div>
            <div className="resumeDetails">
                <div className="details1">
                    <div className="info">
                        <FontAwesomeIcon icon={faPhone} className="icon" />
                        <span className="dots">:</span>
                        <span className="value">09075464649</span>
                    </div>
                    <div className="info">
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        <span className="dots">:</span>
                        <span className="value">mk.bidemi005@gmail.com</span>
                    </div>
                    <div className="info">
                        <FontAwesomeIcon icon={faLocationPin} />
                        <span className="dots">:</span>
                        <span className="value">Lagos, Nigeria</span>
                    </div>
                    <div className="info">
                        <span className="infoName">State of Origin</span>
                        <span className="dots">:</span>
                        <span className="value">Lagos</span>
                    </div>
                    <div className="info">
                        <span className="infoName">Local Government</span>
                        <span className="dots">:</span>
                        <span className="value">Epe</span>
                    </div>
                </div>
                <div className="details2">
                    <div className="info">
                        <span className="infoName">Date of Birth</span>
                        <span className="dots">:</span>
                        <span className="value">23/04/1997</span>
                    </div>
                    <div className="info">
                        <span className="infoName">Gender</span>
                        <span className="dots">:</span>
                        <span className="value">Male</span>
                    </div>
                    <div className="info">
                        <span className="infoName">Marital Status</span>
                        <span className="dots">:</span>
                        <span className="value">Single</span>
                    </div>
                    <div className="info">
                        <span className="infoName">Nationality</span>
                        <span className="dots">:</span>
                        <span className="value">Nigerian</span>
                    </div>
                </div>
            </div>
            <div className="overview">
                <div className="text">
                    <p>Enthusiastic <span>Front-end Developer</span> eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Motivated to learn, grow and excel in <span>Web development</span> and <span>Programming</span>. Deliver high-quality service and consistently provides satisfactory job results with a resourceful approach to handling routine and complex challenges.</p>
                </div>
            </div>
            <div className="edu">
                <div className="eduLogo">
                    <FontAwesomeIcon icon={faGraduationCap} className="icon" />
                    <h1>Education</h1>
                </div>
                <div className="eduDetails">
                    <h2>October 2017</h2>
                    <div className="eduText">
                        <h4>Business Administration - Al-Hikmah University</h4>
                        <div className="text2">
                            <p>Bachelor of Science (Bsc)</p>
                            <p className="address">Ilorin, Kwara State</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cert">
                <div className="certLogo">
                    <FontAwesomeIcon icon={faCertificate} className="icon" />
                    <h1>Certification</h1>
                </div>
                <div className="certText">
                    <h2>Octorber 2022</h2>
                    <p>Responsive Web Design (freecodecamp)</p>
                </div>
                <div className="certText">
                    <h2>December 2022</h2>
                    <p>Basic Javascripts data structures and algorithm (Freecodecamp)</p>
                </div>
                <div className="certText">
                    <h2>January 2023</h2>
                    <p>Frontend Libraries (Freecodecamp)</p>
                </div>
                <div className="certText">
                    <h2>March 2023</h2>
                    <p>Jobberman Soft-Skills</p>
                </div>
            </div>
            <div className="skills">
                <div className="skillLogo">
                    <FontAwesomeIcon icon={faCode} className="icon" />
                    <h1>Skills</h1>
                </div>
                <div className="skilldetails">
                    <div className="skill">
                        <FontAwesomeIcon icon={faCss3} className="star" />
                        <div className="skillName">
                            <h4>CSS</h4>
                        </div>
                        <div className="skillIcon">
                            <FontAwesomeIcon icon={faStar} className="stars"/>
                            <FontAwesomeIcon icon={faStar} className="stars"/>
                            <FontAwesomeIcon icon={faStar} className="stars"/>
                            <FontAwesomeIcon icon={faStarHalf} className="stars"/>
                        </div>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faHtml5} className="star" />
                        <div className="skillName">
                            <h4>Html</h4>
                        </div>
                        <div className="skillIcon">
                            <FontAwesomeIcon icon={faStar} className="stars" />
                            <FontAwesomeIcon icon={faStar} className="stars" />
                            <FontAwesomeIcon icon={faStar} className="stars" />
                            <FontAwesomeIcon icon={faStar} className="stars" />
                        </div>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faGithub} className="star" />
                        <div className="skillName">
                            <h4>Github</h4>
                        </div>
                        <div className="skillIcon">
                            <FontAwesomeIcon icon={faStar} className="stars" />
                            <FontAwesomeIcon icon={faStar} className="stars" />
                            <FontAwesomeIcon icon={faStar} className="stars" />
                        </div>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} className="star" />
                        <div className="skillName">
                            <h4>React</h4>
                        </div>
                        <div className="skillIcon">
                            <FontAwesomeIcon icon={faStar} className="stars" />
                            <FontAwesomeIcon icon={faStar} className="stars" />
                            <FontAwesomeIcon icon={faStar} className="stars" />
                        </div>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faJs} className="star" />
                        <div className="skillName">
                            <h4>Javascript</h4>
                        </div>
                        <div className="skillIcon">
                            <FontAwesomeIcon icon={faStar} className="stars" />
                            <FontAwesomeIcon icon={faStar} className="stars" />
                            <FontAwesomeIcon icon={faStar} className="stars" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hobby">
                <div className="hobbyLogo">
                    <FontAwesomeIcon icon={faHeart} className="icon" />
                    <h1>Hobby</h1>
                </div>
                <div className="hobbyText">
                    <h4>Reading</h4>
                    <h4>Social Activities</h4>
                    <h4>Learning</h4>
                    <h4>Practicing</h4>
                </div>
            </div>
            <div className="referrer">
                <div className="referrerLogo">
                    <FontAwesomeIcon icon={faUser} className="icon" />
                    <h1>Referrer</h1>
                </div>
                <div className="referrerText">
                    <h4>Available on request.</h4>
                </div>
            </div>
        </div>
    )
}

export default Resume;