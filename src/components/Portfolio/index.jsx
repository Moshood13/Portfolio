import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Pic1 from "../../Assets/projects/Casio_calculator_JS-20WK_in_201901_002.jpg"
import Pic2 from "../../Assets/projects/markdown preview.jpg"
import Pic3 from "../../Assets/projects/Todo app.jpg"
import Pic4 from "../../Assets/projects/quiz.png"
import Pic5 from "../../Assets/projects/rqm .jpg"
import { faCodepen, faGithub } from "@fortawesome/free-brands-svg-icons";




const Portfolio = () => {
    return (
        <div className="portfoilio">
            <div className="header">
                <h1>Portfolio</h1>
                <FontAwesomeIcon icon={faBriefcase} className="icon" />
            </div>
            <div className="projects">
                <div className="project">
                    <div className="projectImage">
                        <img src={Pic1} alt="" />
                    </div>
                    <div className="projectDesc">
                        <h1>Basic Calculator</h1>
                        <p> Technologies :
                            <span>Html</span>
                            <span className="br"></span>
                            <span>Css</span>
                            <span className="br"></span>
                            <span>Javascript</span>
                        </p>
                        <div className="details">
                            <h4>Features : </h4>
                            <ol>
                                <li>Performs Basic Calulations</li>
                            </ol>
                        </div>
                    </div>
                    <div className="link">
                        <a href="" className="link1" title="view source code"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="" className="link2" title="view demo"><FontAwesomeIcon icon={faCodepen} /></a>
                    </div>
                </div>
                <div className="project">
                    <a href="">
                        <div className="projectImage">
                            <img src={Pic2} alt="" />
                        </div>
                    </a>
                    <div className="projectDesc">
                        <h1>Markdown Previewer</h1>
                        <p> Technologies :
                            <span>Html</span>
                            <span className="br"></span>
                            <span>Css</span>
                            <span className="br"></span>
                            <span>Javascript</span>
                        </p>
                        <div className="details">
                          
                        </div>
                    </div>
                    <div className="link">
                        <a href="" className="link1" title="view source code"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="" className="link2" title="view demo"><FontAwesomeIcon icon={faCodepen} /></a>
                    </div>
                </div>
                <div className="project">
                    <a href="">
                        <div className="projectImage">
                            <img src={Pic3} alt="" />
                        </div>
                    </a>
                    <div className="projectDesc">
                        <h1>Todo App</h1>
                        <p> Technologies :
                            <span>Html</span>
                            <span className="br"></span>
                            <span>Css</span>
                            <span className="br"></span>
                            <span>Javascript</span>
                        </p>
                        <div className="details">
                            <h4>Features : </h4>
                            <ol>
                                <li>Toggle button to check and uncheck a todo task.</li>
                                <li>Uses a local storage to save todo tasks.</li>
                                <li>Delete button to delete a todo task.</li>
                                <li>Mobile Responsive.</li>
                            </ol>
                        </div>
                    </div>
                    <div className="link">
                        <a href="" className="link1" title="view source code"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="" className="link2" title="view demo"><FontAwesomeIcon icon={faCodepen} /></a>
                    </div>
                </div>
                <div className="project">
                    <a href="">
                        <div className="projectImage">
                            <img src={Pic4} alt="" />
                        </div>
                    </a>
                    <div className="projectDesc">
                        <h1>Quiz App</h1>
                        <p> Technologies :
                            <span>Html</span>
                            <span className="br"></span>
                            <span>Css</span>
                            <span className="br"></span>
                            <span>Javascript</span>
                        </p>
                        <div className="details">
                            <h4>Features : </h4>
                            <ol>
                                <li>A countdown Timer.</li>
                                <li>Toggle Start and End button.</li>
                                <li>Disables other options after click.</li>
                                <li>Mobile Responsive.</li>
                                <li>Randomly generates questions.</li>
                            </ol>
                        </div>
                    </div>
                    <div className="link">
                        <a href="" className="link1" title="view source code"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://codepen.io/Moshood13/pen/wvYpNVM" className="link2" title="view demo"><FontAwesomeIcon icon={faCodepen} /></a>
                    </div>
                </div>
                <div className="project">
                    <a href="">
                        <div className="projectImage">
                            <img src={Pic5} alt="" />
                        </div>
                    </a>
                    <div className="projectDesc">
                        <h1>Random Quote App</h1>
                        <p> Technologies :
                            <span>Html</span>
                            <span className="br"></span>
                            <span>Css</span>
                            <span className="br"></span>
                            <span>Javascript</span>
                        </p>
                        <div className="details">
                            <h4>Features : </h4>
                            <ol>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ol>
                        </div>
                    </div>
                    <div className="link">
                        <a href="" className="link1" title="view source code"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="" className="link2" title="view demo"><FontAwesomeIcon icon={faCodepen} /></a>
                    </div>
                </div>
            </div>
            <div className="link">
                <p>To view more <span><em>projects</em></span> click <a href="">here</a></p>
            </div>
        </div>
    )
}

export default Portfolio;