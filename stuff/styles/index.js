import styled from 'styled-components'

export const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  padding:3rem;
`;


export const Title = styled.h1`
    font-size: 7rem;
`;

export const Subtitle = styled.h2`
    font-size: 2.5rem;
`;

export const Info = styled.p`
    font-size: 2rem;
    margin-top: 4rem;
    margin-bottom: 2rem;
`;

export const Main = styled.div`
  margin-right: ${props => props.isOpen ? 20 : 0}vw; 
  @media (max-width: 600px) {
    margin-right: ${props => props.isOpen ? 100 : 0}vw; 
  }
`;

export const AppWrapper = styled.div`
  & > * {
    transition: all 0.5s ease;
  }
`;

const linkColor = '#1e90ff'
export const Link = styled.a`
    all: unset;
    color: ${linkColor};
    position: relative;
    /* mix-blend-mode: difference; */
    &::before {
        content: '';
        /* background-color: ${linkColor}; */
        width: 100%;
        height: 3px;
        position: absolute;
        bottom: -2px;
        transition: all 0.1s ease-in;
    }
    &:hover {
        cursor: pointer;
        color: #ff6500;
        &::before {
            bottom: 0;
            width: 40%
        }
    }
    
`