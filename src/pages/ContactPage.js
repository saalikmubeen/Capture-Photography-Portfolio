import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animations';

const Contact = () => {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="visible" exit="exit">Contact page</motion.div>
    )
}


export default Contact;