import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
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
                            <img src={Pic3} alt="" />
                        </div>
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
                        <a href="https://github.com/Moshood13/Javascript/tree/Todo" className="link1" title="view source code" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://codepen.io/Moshood13/pen/gOBvYeJ" className="link2" title="view demo" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCodepen} /></a>
                    </div>
                </div>
                <div className="project">
                        <div className="projectImage">
                            <img src={Pic4} alt="" />
                        </div>
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
                        <a href="https://github.com/Moshood13/Javascript" className="link1" title="view source code" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://codepen.io/Moshood13/pen/wvYpNVM" className="link2" title="view demo" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faCodepen} /></a>
                    </div>
                </div>
                <div className="project">
                        <div className="projectImage">
                            <img src={Pic5} alt="" />
                        </div>
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
                                <li>Genrate Random quotes</li>
                                <li>Tweet Quotes</li>
                            </ol>
                        </div>
                    </div>
                    <div className="link">
                        <a href="https://github.com/Moshood13/Javascript/tree/RQM" className="link1" title="view source code" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://codepen.io/Moshood13/pen/KKGQbMB" className="link2" title="view demo" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCodepen} /></a>
                    </div>
                </div>
            </div>
            <div className="link">
                <p>To view more <span><em>projects</em></span> click  <button disabled="disabled" className="btn">here</button></p>
            </div>
        </div>
    )
}

export default Portfolio;