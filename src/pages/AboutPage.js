import React from 'react';
import About from '../components/About';
import Services from '../components/Services';
import Faq from '../components/Faq.js';

const AboutPage = () => {
    return (
        <div className="AboutPage">
            <About />
            <Services />
            <Faq/>
        </div>
    )
}


export default AboutPage;