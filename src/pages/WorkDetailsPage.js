import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import workData from '../workData';
import { pageAnimation, ImageAnimation, titleAnimation } from '../animations';
import useScroll  from '../hooks/useScroll';


const WorkDetailsPage = () => {
    const history = useHistory();
    const [work, setWork] = useState(null);
    const [element1, controls1] = useScroll();
    const [element2, controls2] = useScroll();

    useEffect(() => {
        const currentWork = workData().filter((work) => work.url === history.location.pathname)[0];
        setWork(currentWork);
    }, [history])
    return (
        <>
            {work &&
                <WorkDetails variants={pageAnimation} initial="hidden" animate="visible" exit="exit">

                    <Headline>
                    <h2>{work.title}</h2>
                    <Hide>
                        <motion.img ref={element1} variants={ImageAnimation} initial="hidden" animate={controls1} src={work.mainImg} alt="work" />
                    </Hide>
                    </Headline>

                    <Awards>
                        {work.awards.map((award) => (
                            <Award
                                title={award.title}
                                description={award.description}
                                key={award.title}
                            />
                        ))}
                    </Awards>

                <ImageStyles>
                    <Hide>
                        <motion.img ref={element2} variants={ImageAnimation} initial="hidden" animate={controls2} src={work.secondaryImg} alt="work" />
                    </Hide>
                    </ImageStyles>
            
                </WorkDetails>
            }
        </>
    )
}

const Award = ({ title, description }) => {
     const [element, controls] = useScroll(0.2);
    return (
        <AwardStyle ref={element} variants={titleAnimation} initial="hidden" animate={controls}>
            <h3>{title}</h3>
            <div className="line" />
            <p>{description}</p>
        </AwardStyle>
    );
};


const WorkDetails = styled(motion.div)`
    color: white;
`

const Headline = styled.div`
    padding-top: 20vh;
    position: relative;
    min-height: 90vh;
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
    h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
    }
`

const Awards = styled.div`
    display: flex;
    min-height: 80vh;
    align-items: center;
    justify-content: space-around;
    margin: 5rem 10rem;

    @media (max-width: 1200px) {
        display: block;
        margin: 2rem 2rem;
    }
`

const AwardStyle = styled(motion.div)`
    padding: 4rem;
    h3 {
        font-size: 1.7rem;
    }
    .line {
        width: 100%;
        background: #23d997;
        height: 0.3rem;
        margin: 1rem 0rem;
    }
    p {
        padding: 1.5rem 0rem;
}
`

const ImageStyles = styled.div`
    min-height: 50vh;
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
}
`

const Hide = styled.div`
    overflow: hidden;
`
export default WorkDetailsPage;