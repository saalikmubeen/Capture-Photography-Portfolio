import React from 'react';
import { motion } from 'framer-motion';

import About from '../components/About';
import Services from '../components/Services';
import Faq from '../components/Faq.js';

import { pageAnimation } from '../animations';

const AboutPage = () => {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="visible" exit="exit" className="AboutPage">
            <About />
            <Services />
            <Faq/>
        </motion.div>
    )
}


export default AboutPage;