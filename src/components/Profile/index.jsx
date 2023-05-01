import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faLaptop, faLaptopCode, faMobileScreen, faUser } from "@fortawesome/free-solid-svg-icons";

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
                    <p>Dolor reprehenderit aut repudiandae maiores recusandae. Consequatur dolor nisi labore commodi ipsa? Excepturi velit laboriosam at voluptatibus cupiditate eDolor reprehenderit aut repudiandae maiores recusandae. Consequatur dolor nisi labore commodi ipsa? Excepturi velit laboriosam at voluptatibus cupiditate est vel. Dolorem praesentium itaque fugiat placeat quas consequatur? Obcaecati natus rerumDolor reprehenderit aut repudiandae maiores recusandae. Consequatur dolor nisi labore commodi ipsa? Excepturi velit laboriosam at voluptatibus cupiditate est vel. Dolorem praesentium itaque fugiat placeat quas consequatur? Obcaecati natus rerumst vel. Dolorem praesentium itaque fugiat placeat quas consequatur? Obcaecati natus rerum</p>
                    <br />
                    <p>Consectetur consectetur nesciunt nesciunt blanditiis amet? Quod quis unde aliquid excepturi laudantium? Illo architecto aliquam velit illo magnam neque perferendis sint Incidunt eius ipsa inventore labore eos velit. Minus hic magni reiciendis necessitatibus ex Quidem officia deleniti accusamus obcaecati dolores. Porro culpa quibusdam impedit porro praesentium excepturi. Alias ab consequatur?</p>
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
                    <button className="btn">Download Resume</button>
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
                        <p>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero.</p>
                    </div>
                    <div className="serviceList">
                        <FontAwesomeIcon icon={faMobileScreen} className="icon"/>
                        <h4>Responsive Design</h4>
                        <p>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero.</p>
                    </div>
                    <div className="serviceList">
                        <FontAwesomeIcon icon={faHeadset} className="icon"/>
                        <h4>Audio Engineer</h4>
                        <p>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;