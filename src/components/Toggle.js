import React, { useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';


const Toggle = ({ children, title }) => {
    const [toggle, setToggle] = useState(false);
    return (
        <AnimateSharedLayout>
            <motion.div layout onClick={() => setToggle(!toggle)}>
                <p className="question" layout>
                    {title}
                </p>
                {toggle && children}
            <div className="faq-line"/>
            </motion.div>
        </AnimateSharedLayout>
    )
}


export default Toggle;