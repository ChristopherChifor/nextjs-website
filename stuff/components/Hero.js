import React, { useRef } from 'react'
import styled from 'styled-components'
import { Section } from '../styles'
import useMouse from '@react-hook/mouse-position'
import github from "../icons/github.svg";

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
    font-size: 7rem;
`;

const Subtitle = styled.h2`
    font-size: 2.5rem;
`;

const Info = styled.p`
    font-size: 2rem;
`;

const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 1rem;
    font-size: 2rem;
    max-width: 41ch;

    & > * {
        /* width: 50px; */
        /* height: 50px; */
        & > * {
            width: 50px;
            height: 50px;
        }
  
    }
  
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


let previousPosition = { x: 0, y: 0 };
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
            <Ball x={previousPosition.x} y={previousPosition.y} />
            <Title>Chris Chifor</Title>
            <Subtitle>Full Stack Developer and Product Designer</Subtitle>
            <Info>Located in Toronto, Canada 📍 <br/>
            Studying at the University of Toronto</Info>
            <Info>Currently working on Longevity at  <b>MYKIGAI</b></Info>
            <SocialContainer>
                <a href="https://github.com/ChristopherChifor">
                    <img src='/github.svg'/>
                    {/* <Image src="/github.svg" alt="git icon" width={30} height={30}/> */}
                </a>
                {/* <Github/> */}
                <a href="https://github.com/ChristopherChifor"><img src='/linkedin.svg'/></a>
                <a href="https://github.com/ChristopherChifor"><img src='/twitter.svg'/></a>
                <a href="https://github.com/ChristopherChifor"><img src='/headphones.svg'/></a>
                {/* <Image src="/twitter.svg" alt="git icon" width={30} height={30}/> */}
                {/* <Image src="/linkedin.svg" alt="git icon" width={30} height={30}/> */}
                {/* <Image src="/headphones.svg" alt="git icon" width={30} height={30}/> */}
            </SocialContainer>
        </Section>
    )
}
