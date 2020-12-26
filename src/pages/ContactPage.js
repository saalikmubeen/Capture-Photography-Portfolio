import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../animations';

const Contact = () => {
    return (
        <StyledContact variants={pageAnimation} initial="hidden" animate="visible" exit="exit">
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2>Send Us A Message</h2>
                        </Social>
                </Hide>

                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2>Send an email.</h2>
                    </Social>
                </Hide>

                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2>Social Media</h2>
                    </Social>
                </Hide>
            </div>
        </StyledContact>
    )
}

const StyledContact = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    background-color: white;
    min-height: 90vh;

    @media (max-width: 900px) {
        padding: 3rem 5rem;
        font-size: 1rem;
    }
`;

const Title = styled.div`
    margin-bottom: 4rem;
    color: black;

    @media (max-width: 900px) {
        margin-top: 5rem;
        font-size: 2rem,;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;
const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #353535;

    @media (max-width: 900px) {
        height: 2rem;
        width: 2rem;
    }

    @media (max-width: 900px) {
        height: 1.5rem;
        width: 1.5rem;
    }
`;
const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    cursor: pointer;
    h2 {
        margin: 2rem;

        @media (max-width: 900px) {
            font-size: 2rem;
        }

        @media (max-width: 500px) {
            font-size: 1rem;
        }
    }
`;

export default Contact;