import React from 'react';
import styled from 'styled-components';
import aboutImage from '../images/home1.png'; 


const About = () => {
    return ( 
        <StyledAbout>

            <Description>
                <div className="heading">
                    <h2>We work to make</h2>
                    <h2>your <span>dreams</span> come</h2>
                    <h2>true</h2>
                </div>
                <p>Contact us for photography or videography ideas that you have. We have professionals with amazing skills to help you achieve it</p>
                <button>Contact Us</button>
            </Description>

            <Image>
                <img src={aboutImage} alt="man holding camera"/>
            </Image>

        </StyledAbout>
    )
}


const StyledAbout = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`

const Description = styled.div`
    flex: 1;
    padding-right: 5rem;

`

const Image = styled.div`
    flex: 1;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`

export default About;