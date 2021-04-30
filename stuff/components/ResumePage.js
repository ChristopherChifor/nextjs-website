import React, { useState } from 'react'
import styled from 'styled-components'
import { Subtitle, Title } from '../styles';
import NavBar from './NavBar';

const ResumeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.3fr 1.3fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "title info"
    "about experience"
    "poo download";
    min-height: 100vh;
    @media (max-width: 700px) {
        grid-template-columns: 1fr;
        background-color: red;
        grid-template-areas:
    "title"
    "info"
    "about"
    "experience"
    "poo"
    "download";
    }
`;

const TitleSection= styled.div`
    grid-area: title;
    
`
const Info= styled.div`
    grid-area: info;
`
const About = styled.div` grid-area: about;`
const Experience = styled.div` grid-area: experience;`
const Poo = styled.div` grid-area: poo;`
const Download = styled.div` grid-area: download;`

export default function ResumePage() {
    const [contactOpen, setContactOpen] = useState(false)
  const toggleContact = () => {
    setContactOpen(!contactOpen)
  }
    return (
        <>
        <NavBar/>
        <ResumeWrapper>
            <TitleSection>
                <Subtitle>hello</Subtitle>
                </TitleSection>
            <Info></Info>
            <About>infoooo</About>
            <Experience>infoooo</Experience>
            <Poo>infoooo</Poo>
            <Download>infoooo</Download>
        </ResumeWrapper>
        </>
    )
}
