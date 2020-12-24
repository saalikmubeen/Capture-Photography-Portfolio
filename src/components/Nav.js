import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Nav = () => {
    return (
        <StyledNav>
            <h1 id="logo"><Link to="/">Capture</Link></h1>
            <ul>
                <li><Link to="/">1. About Us</Link></li>
                <li><Link to="/work">2. Our Work</Link></li>
                <li><Link to="/contact">3. Contact Us</Link></li>
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
    a {
        font-size: .9rem;
    }
    }
`




export default Nav;