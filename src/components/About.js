import React from 'react';
import aboutImage from '../images/home1.png'; 
import { Section, Description, Image } from '../styles';
import { motion } from 'framer-motion';


const About = () => {
    return ( 
        <Section>

            <Description>
                <div className="heading">
                    <h2>We work to make</h2>
                    <h2>your <span>dreams</span> come</h2>
                    <h2>true</h2>
                </div>
                <p>Contact us for photography or videography ideas that you have. We have professionals with amazing skills to help you achieve it</p>
                <button>Contact Us</button>
            </Description>

            <Image>
                <img src={aboutImage} alt="man holding camera"/>
            </Image>

        </Section>
    )
}


export default About;