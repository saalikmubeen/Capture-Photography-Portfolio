import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled(motion.div)`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;

    @media (max-width: 900px) {
        display: block;
        padding: 2rem 2rem;
        text-align: center;
  }
`

const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    z-index: 2;

    @media (max-width: 1300px) {
        padding: 0;
        button {
            margin: 2rem 0rem 5rem 0rem;
        }    
    }

`

const Image = styled.div`
    flex: 1;
    overflow: hidden;
    z-index: 2;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`

const Hide = styled.div`
    overflow: hidden;
`

export { Section, Description, Image, Hide };