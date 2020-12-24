import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import athlete from "../images/athlete-small.png";
import theracer from "../images/theracer-small.png";
import goodtimes from "../images/goodtimes-small.png";

const WorkPage = () => {
    return (
        <Work>

            <Item>
                <h2>The Athlete</h2>
                <div className="line" />
                <Link to="/work/the-athlete"> 
                    <img src={athlete} alt="athlete"/>
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


const Work = styled.div`
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



export default WorkPage;