import React from "react";
import "./home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="homePage">
            <div className="details">
                <div className="title">
                    <div className="name">
                        <h1>
                            <span>Moshood</span>
                            <span className="name1">Kareem</span>
                        </h1>
                    </div>
                    <section className="animation">
                        <div className="first"><div>Front-End Developer</div></div>
                        <div className="second"><div>Freelancer</div></div>
                        <div className="third"><div>Web Designer</div></div>
                    </section>

                </div>

                <div className="buttons">
                    <div className="button">
                    <a href="MoshoodKareem.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="cv btn">Download CV</button>
                        </a>
                    </div>
                    <div className="button">
                        <Link to="/contact">
                        <button className="ct btn">Contact</button>
                        </Link>                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;