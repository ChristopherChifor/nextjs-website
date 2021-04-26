import React, {useRef} from 'react'
import styled from 'styled-components'
import { Section } from '../styles'
import useMouse from '@react-hook/mouse-position'
// import { ReactComponent as Github } from '../icons/github.svg';
// import { ReactComponent as Linkedin } from '../icons/linkedin.svg';
// import { ReactComponent as Twitter } from '../icons/twitter.svg';
// import { ReactComponent as Spotify } from '../icons/headphones.svg';


const Ball = styled.div`
    position: absolute;
    top: ${props => props.y}px;
    left: ${props => props.x}px;
    display: block;
    width: 400px;
    height: 400px;
    background-image: linear-gradient(285deg, #1e90ff 29%, #ff6500 58%,  #ff1493 80%);
    opacity: 0.7;
    -webkit-filter: blur(68px);
    filter: blur(68px);
    pointer-events: none;
    border-radius:100%;
    transform: translate(-50%, -50%);
    transition: all 0.1s ease;
    z-index: -1;
`;

const Title = styled.h1`
    padding: 2rem;
    font-size: 7rem;
    padding-bottom: 0;
`;

const Subtitle = styled.h2`
    padding: 2rem;
    font-size: 2.5rem;
    padding-top: 0;
    margin-left: 2rem;
`;

const Info = styled.p`
    padding: 2rem;
    font-size: 2rem;
    padding-top: 0;
    margin-left: 2rem;
`;

const Social = styled.div`
    height: 1rem;
    width: 10rem;
    margin-left: 4.1rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between; 
    box-sizing: border-box;

`;

const SocialButton = styled.button`
    all: unset;
    &:last-child {
        margin-left: auto;
    }
    &:first-child {
        margin-right: auto;
    }
    text-transform: capitalize;
    font-weight: 600;
    padding: 0.6rem 0.9rem;
    transition: all 0.2s ease-out;
    &:hover {
        cursor: pointer;
        transform: translateY(-0.1rem)
    }
`;

const SocialIcon = styled.svg`

`;


let previousPosition = {x: 0, y: 0};
export default function Hero() {
    const ref = useRef()
    // const mouse = useMouse(ref, {
    //     enterDelay: 100,
    //     leaveDelay: 100,
    //   })

    // if (mouse.isOver) {
    //     previousPosition.x = mouse.x;
    //     previousPosition.y = mouse.screenY;

    // }

    return (
        <Section ref={ref}>
            <Ball x={previousPosition.x} y={previousPosition.y}/>
            <Title>Chris Chifor</Title>
            <Subtitle>Front End Developer</Subtitle>
            <Info>Located in Toronto, Canada 📍 <br/>
            Studying at the University of Toronto</Info>
            <Info>Currently working on Longevity at <b>MYKIGAI</b></Info>
            {/* <Social><Linkedin/><Github/><Twitter/><Spotify/></Social> */}
        </Section>
    )
}
