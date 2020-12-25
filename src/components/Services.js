import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import clock from "../images/clock.svg";
import diaphragm from "../images/diaphragm.svg";
import money from "../images/money.svg";
import teamwork from "../images/teamwork.svg";
import home2 from "../images/home2.png";
import { Section, Description, Image } from '../styles'; 
import { servicesAnimation } from '../animations';


const Services = () => {
    const [element, view] = useInView({ threshold: 0.35 });
    const controls = useAnimation();

    if (view) {
        controls.start('visible')
    } else {
        controls.start('hidden')
    }

    return (
        <Section ref={element} variants={servicesAnimation} animate={controls} initial="hidden">

            <ServicesDescription>
            <h2>High <span>quality</span> services</h2>
            <Cards>
                <Card>
                    <div className="icon">
                        <img alt="icon" src={clock} />
                        <h3>Efficient</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Card>
                <Card>
                    <div className="icon">
                        <img alt="icon" src={teamwork} />
                        <h3>Teamwork</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Card>
                <Card>
                    <div className="icon">
                        <img alt="icon" src={diaphragm} />
                        <h3>Diaphragm</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Card>
                <Card>
                    <div className="icon">
                        <img alt="icon" src={money} />
                        <h3>Affordable</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Card>
            </Cards>
                
            </ServicesDescription>    

            <Image>
                <img src={home2} alt="camera"/>
            </Image>
        </Section>
    )
}


const ServicesDescription = styled(Description)`
    h2 {
        padding-bottom: 4rem;
    }
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Card = styled.div`
    div{
        display: flex;
        align-items: center;
    }
    p {
        width: 70%;
        font-size: 1rem;
        padding: 2rem 0rem 4rem 0rem;
    }
    h3 {
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
        font-size: .8rem;
    }
    img {
        width: 2rem;
    }
`


export default Services;