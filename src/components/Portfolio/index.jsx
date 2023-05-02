import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Pic1 from "../../Assets/projects/calc.png"


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
                        <p>
                            <span>Html</span>
                            <span>Css</span>
                            <span>Javascript</span>
                        </p>
                    </div>
                    <div className="button">
                        <button></button>
                    </div>
                </div>
                <div className="project">
                    <div className="projectImage">
                        <img src={Pic1} alt="" />
                    </div>
                    <div className="projectDesc">
                        <h1>Basic Calculator</h1>
                        <p>
                            <span>Html</span>
                            <span>Css</span>
                            <span>Javascript</span>
                        </p>
                    </div>
                </div>
                <div className="project">
                    <div className="projectImage">
                        <img src={Pic1} alt="" />
                    </div>
                    <div className="projectDesc">
                        <h1>Basic Calculator</h1>
                        <p>
                            <span>Html</span>
                            <span>Css</span>
                            <span>Javascript</span>
                        </p>
                    </div>
                </div>
                <div className="project">
                    <div className="projectImage">
                        <img src={Pic1} alt="" />
                    </div>
                    <div className="projectDesc">
                        <h1>Basic Calculator</h1>
                        <p>
                            <span>Html</span>
                            <span>Css</span>
                            <span>Javascript</span>
                        </p>
                    </div>
                </div>
                <div className="project">
                    <div className="projectImage">
                        <img src={Pic1} alt="" />
                    </div>
                    <div className="projectDesc">
                        <h1>Basic Calculator</h1>
                        <p>
                            <span>Html</span>
                            <span>Css</span>
                            <span>Javascript</span>
                        </p>
                    </div>
                </div>
                <div className="project">
                    <div className="projectImage">
                        <img src={Pic1} alt="" />
                    </div>
                    <div className="projectDesc">
                        <h1>Basic Calculator</h1>
                        <p>
                            <span>Html</span>
                            <span>Css</span>
                            <span>Javascript</span>
                        </p>
                    </div>
                </div>
               <div className="project">
                    <div className="projectImage">
                        <img src={Pic1} alt="" />
                    </div>
                    <div className="projectDesc">
                        <h1>Basic Calculator</h1>
                        <p>
                            <span>Html</span>
                            <span>Css</span>
                            <span>Javascript</span>
                        </p>
                    </div>
                </div>
                <div className="project">
                    <div className="projectImage">
                        <img src={Pic1} alt="" />
                    </div>
                    <div className="projectDesc">
                        <h1>Basic Calculator</h1>
                        <p>
                            <span>Html</span>
                            <span>Css</span>
                            <span>Javascript</span>
                        </p>
                    </div>
                </div>
                <div className="project">
                    <div className="projectImage">
                        <img src={Pic1} alt="" />
                    </div>
                    <div className="projectDesc">
                        <h1>Basic Calculator</h1>
                        <p>
                            <span>Html</span>
                            <span>Css</span>
                            <span>Javascript</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;