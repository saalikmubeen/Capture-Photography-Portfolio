import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import athlete from "../images/athlete-small.png";
import theracer from "../images/theracer-small.png";
import goodtimes from "../images/goodtimes-small.png";

import { pageAnimation, fadeAnimation, lineAnimation, ImageAnimation, colorAnimation, colorAnimationContainer } from '../animations';

const WorkPage = () => {
    return (
        <Work variants={pageAnimation} initial="hidden" animate="visible" exit="exit">

            <motion.div variants={colorAnimationContainer}>
                <Frame1 variants={colorAnimation}/>
                <Frame2 variants={colorAnimation}/>
                <Frame3 variants={colorAnimation}/>
                <Frame4 variants={colorAnimation} />
            </motion.div>
            

            <Item>
                <motion.h2 variants={fadeAnimation}>The Athlete</motion.h2>
                <motion.div variants={lineAnimation} className="line" />
                <Link to="/work/the-athlete"> 
                    <Hide>
                        <motion.img variants={ImageAnimation} src={athlete} alt="athlete"/>
                    </Hide>
                    
                </Link>
            </Item>

            <Item>
                <h2>The Racer</h2>
                <div className="line" />
                <Link to="/work/the-racer"> 
                    <img src={theracer} alt="athlete"/>
                </Link>
            </Item>

            <Item>
                <h2>Good Times</h2>
                <div className="line" />
                <Link to="/work/good-times"> 
                    <img src={goodtimes} alt="athlete"/>
                </Link>
            </Item>

        </Work>
    )
}


const Work = styled(motion.div)`
    min-height: 100vh;
    background-color: white;
`


const Item = styled.div`
     padding: 5rem 10rem;

     h2 {
         margin: 1rem 0rem;
     }

    padding-bottom: 3rem;

    .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
    }
    img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    }
`

const Hide = styled.div`
    overflow: hidden;
`

const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 3;
`;
const Frame2 = styled(Frame1)`
    background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
    background: #8effa0;
`;


export default WorkPage;