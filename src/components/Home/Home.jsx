import React from "react";
import "./home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import cv from "../../Assets/files/MoshoodKareem.pdf"

const Home = () => {

    let date;

    const options = { weekday: "short", month: "long", day: "numeric", year: "numeric" }
    const today = new Date();

    date = today.toLocaleDateString("en-US", options);


    return (
        <div className="homePage">
            <div className="details">
                <div className="title">
                    <div className="date">
                        <span>{date}</span>
                    </div>
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
                        <a href={cv} target="_blank" rel="noopener noreferrer">
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