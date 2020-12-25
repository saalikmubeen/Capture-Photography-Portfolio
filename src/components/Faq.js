import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';
import styled from 'styled-components';
import Toggle from './Toggle';
import { fadeAnimation } from '../animations';


const Faq = () => {
    const [element, view] = useInView({ threshold: 0.35 });
    const controls = useAnimation();

    if (view) {
        controls.start('visible')
    } else {
        controls.start('hidden')
    }

    return (
        <StyledFaq ref={element} variants={fadeAnimation} animate={controls} initial="hidden">
            <h2>Any Questions? <span>FAQ</span></h2>
            <div className="faq-questions">

                <Toggle title="How Do I Start?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                            autem accusamus ex laboriosam porro, adipisci quam.
                        </p>
                    </div>
                </Toggle>

                <Toggle title="What Products Do You Offer?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                        autem accusamus ex laboriosam porro, adipisci quam voluptatum
                        magnam placeat corporis.
                        </p>
                    </div>    
                </Toggle>

                <Toggle title="Different Payment Methods">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                            autem accusamus ex laboriosam porro, adipisci quam voluptatum
                            magnam placeat corporis.
                        </p>
                    </div>
                </Toggle>

                <Toggle title="Daily Schedule">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                            autem accusamus ex laboriosam porro, adipisci quam voluptatum
                            magnam placeat corporis.
                        </p>
                    </div>
                </Toggle>

            </div>        
        </StyledFaq>
    )
}


const StyledFaq = styled(motion.div)`
    min-height: 100vh;
    display: block;
    padding: 5rem 10rem;
    color: white;
    span {
        display: block;
    }

    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
        padding: 1.5rem 0rem;
        cursor: pointer;
        color: white;
        font-size: 1.8rem;
        font-weight: bold;
    }
    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
            font-size: 1.1rem;
        }
}
`

export default Faq;