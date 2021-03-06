import React from 'react';
import styled from 'styled-components';
import clock from "../images/clock.svg";
import diaphragm from "../images/diaphragm.svg";
import money from "../images/money.svg";
import teamwork from "../images/teamwork.svg";
import home2 from "../images/home2.png";
import { Section, Description, Image } from '../styles'; 
import { scrollAnimation } from '../animations';
import useScroll from '../hooks/useScroll';


const Services = () => {
    const [element, controls] = useScroll();

    return (
        <Section ref={element} variants={scrollAnimation} animate={controls} initial="hidden">

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

    @media (max-width: 900px) {
        justify-content: center;
    }
`

const Card = styled.div`
    flex-basis: 50%;
    @media (max-width: 900px) {
        flex-basis: auto;
    }

    @media (max-width: 400px) {
        flex-basis: 100%;
        justify-self: center;
    }

    div{
        display: flex;
        align-items: center;

        @media (max-width: 400px) {
            justify-content: center;
        }
    }
    p {
        width: 70%;
        font-size: 1rem;
        padding: 2rem 0rem 4rem 0rem;
        
        @media (max-width: 400px) {
            width: 100%;
            text-align: center;
        }
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