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
                    <span className="inline">I'm a</span>
                    <section className="animation">
                        <div className="first"><div>Front-End Developer</div></div>
                        <div className="second"><div>Freelancer</div></div>
                        <div className="third"><div>Web Designer</div></div>
                    </section>
                    <div className="name">
                        <h1>
                            <span>Moshood</span>
                            <span className="name1">Kareem</span>
                        </h1>
                    </div>
                    <p className="summary">A Junior and gifted <span className="em">Front-end developer </span> with excellent team building and leadership abililities honed over a career in Web development industry. Deliver high quality service and consistent business results with a resourceful approach to handling routine and complex challenges.</p>
                </div>

                <div className="buttons">
                    <button className="cv btn">Download CV</button>
                    <button className="ct btn">Contact</button>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;