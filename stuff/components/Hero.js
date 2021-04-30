import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Info, Section, Subtitle, Title } from '../styles'

export const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", setFromEvent);

        return () => {
            window.removeEventListener("mousemove", setFromEvent);
        };
    }, []);

    return position;
};
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

const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 1rem;
    font-size: 2rem;
    max-width: 41ch;
    margin-top: 4rem;

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

const Footer = styled.div`
    padding: 0rem 2rem;
    position: fixed;     
       text-align: left;    
       bottom: 0px; 
       width: 100%;
    position: fixed;
`;


let previousPosition = { x: 0, y: 0 };
export default function Hero() {
    const ref = useRef()
    const position = useMousePosition();

    return (
        <Section ref={ref}>
            <Ball x={position.x} y={position.y} />
            <Title>Chris Chifor</Title>
            <Subtitle>Full Stack Developer and Product Designer</Subtitle>
            <Info>Located in Toronto, Canada 📍 <br />
            Studying at the University of Toronto</Info>
            <Info>Currently working on Longevity at  <a href="https://www.mykigai.com/"><b>MYKIGAI</b></a></Info>
            <SocialContainer>
                <a href="https://github.com/ChristopherChifor">
                    <img src='/github.svg' />
                    {/* <Image src="/github.svg" alt="git icon" width={30} height={30}/> */}
                </a>
                <a href="https://www.linkedin.com/in/christopher-chifor/"><img src='/linkedin.svg' /></a>
                <a href="https://twitter.com/ChrisChifor"><img src='/twitter.svg' /></a>
                <a href="https://distrokid.com/hyperfollow/ock4/cant-find-you-feat-oliana"><img src='/headphones.svg' /></a>
            </SocialContainer>
            <Footer>Designed and built by me :) </Footer>
        </Section>
    )
}
