import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const Nav = () => {
    const { pathname } = useLocation();
    return (
        <StyledNav>
            <h1 id="logo"><Link to="/">Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/">1. About Us</Link>
                    <Line initial={{ width: "0%" }} animate={{ width: pathname === '/' ? "100%" : '0%' }} transition={{ duration: 0.75 }} />
                </li>

                <li>
                    <Link to="/work">2. Our Work</Link>
                    <Line initial={{ width: "0%" }} animate={{ width: pathname === '/work' ? "100%" : '0%' }} transition={{ duration: 0.75 }} />
                </li>

                <li>
                    <Link to="/contact">3. Contact Us</Link>
                    <Line initial={{ width: "0%" }} animate={{ width: pathname === '/contact' ? "100%" : '0%' }} transition={{ duration: 0.75 }} />
                </li>
            </ul>
        </StyledNav>
    )
}


const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    top: 0;

    a {
    color: white;
    text-decoration: none;
    }

    #logo a{
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
        color: white;
    }

    ul{
        display: flex;
        list-style: none
    } 

    li {
    color: white;
    text-decoration: none;
    padding-left: 5rem;
    position: relative;
    a {
        font-size: .9rem;
    }
    }
`

const Line = styled(motion.div)`
    height: 0.3rem;
    background: #23d997;
    width: 0%;
    margin-top: .6rem;
`



export default Nav;