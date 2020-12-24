import React from 'react';
import aboutImage from '../images/home1.png'; 


const About = () => {
    return ( 
        <div className="about">

            <div className="description">
                <div className="heading">
                    <h1>We work to make</h1>
                    <h1>your <span>dreams</span> come</h1>
                    <h1>true</h1>
                </div>
                <p>Contact us for photography or videography ideas that you have. We have professionals with amazing skills to help you achieve it</p>
                <button>Contact Us</button>
            </div>

            <div className="about-image">
                <img src={aboutImage} alt="man holding camera"/>
            </div>

        </div>
    )
}





export default About;