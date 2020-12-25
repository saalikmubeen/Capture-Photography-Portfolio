import React from 'react';
import aboutImage from '../images/home1.png'; 
import { Section, Description, Image, Hide } from '../styles';
import { motion } from 'framer-motion';
import { titleAnimation, fadeAnimation, ImageAnimation } from '../animations';


const About = () => {
    return ( 
        <Section>

            <Description>
                <div className="heading">
                    <Hide>
                        <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>true</motion.h2>
                    </Hide>
                </div>
                <motion.p variants={fadeAnimation}>Contact us for photography or videography ideas that you have. We have professionals with amazing skills to help you achieve it</motion.p>
                <motion.button variants={fadeAnimation}>Contact Us</motion.button>
            </Description>

            <Image>
                <motion.img variants={ImageAnimation} src={aboutImage} alt="man holding camera"/>
            </Image>

        </Section>
    )
}


export default About;