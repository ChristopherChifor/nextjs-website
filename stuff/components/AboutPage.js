import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { AppWrapper, Main, Subtitle, Title } from '../styles';
import Contact from './Contact';
import NavBar from './NavBar';
import {Link} from '../styles'
import { Ball } from './Hero'
import useMousePosition from './Hero'

const AboutWrapper = styled.div`
    margin-left: 2rem;
`

const Me = styled.div`
    margin-top: 50px;
    font-size: 150%;
    margin-left: 5rem;
    @media (max-width: 600px) {
      margin-left: 0;
  }
`;

const WhoAmI = styled.div`
    margin-top: 50px;
    font-size: 130%;
    margin-left: 10rem;
    font-size: 3rem;
    @media (max-width: 600px) {
      margin-left: 0;
  }
`;


const Circle = styled.div`
  position: absolute;
  height: 10rem;
  width: 10rem;
  background-color: #ff6500;
  border-radius: 50%;
  left: 7rem;
  display: inline-block;
  z-index: -1;
`;

const Info =styled.div`
  margin-left: 10rem;
  margin-top: 2rem;
  width: 50rem;
  word-wrap: break-word;
  font-size: 2rem;
  @media (max-width: 600px) {
      margin-left: 0;
      width: 25rem;
      font-size: 2.1rem;
  }

`
let previousPosition = { x: 0, y: 0 };
export default function AboutPage() {
    const position = useMousePosition();
    const ref = useRef()
    const [contactOpen, setContactOpen] = useState(false)
    const toggleContact = () => {
        setContactOpen(!contactOpen)
    }
    return(
        <AppWrapper>
            <Main>
            <Ball x={position.x} y={position.y} />
                <NavBar toggleContact={toggleContact} />
                <AboutWrapper>
                    <Me>
                        <Title> <Circle />
                         About Me 
                        </Title>
                    </Me>
                    <WhoAmI>
                        <b>Who am I?</b>
                    </WhoAmI>
                    <Info>Hi! My name is <b>Christopher Chifor</b> and I am a Full Stack Developer and Product Designer at 
                    <Link href="https://www.mykigai.com/" target="_blank"> Mykigai</Link>. Currently based in 
                    Toronto, Canada. I am completing my HBSc at the University of Toronto with a background in 
                    Software Development, Design and UX/UI.
                    </Info>
                    <WhoAmI>
                        <b>What do I do?</b>
                    </WhoAmI>
                    <Info>
                    I combine user research, wireframing, prototyping & development to transform complex problems into intriguing solutions.
                    In my free time, I love to learn more about machine learning and blockchain technologies all while keeping up with my studies.
                    
                    </Info>
                    
                    <Contact isOpen={contactOpen} toggleContact={toggleContact} />
                    {/* <img src="/public/forest.png" /> */}
                </AboutWrapper>
                


            </Main>
        </AppWrapper>
    )

    

}