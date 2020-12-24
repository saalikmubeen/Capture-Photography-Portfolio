import styled from 'styled-components';


const Section = styled.div`
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

export { Section, Description, Image };