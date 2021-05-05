import React, { useState } from 'react'
import styled from 'styled-components'
import { AppWrapper, Main, Subtitle, Title } from '../styles';
import Contact from './Contact';
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

const TitleSection = styled.div`
    grid-area: title;
    
`;

const Info = styled.div`
    grid-area: info;
    font-size: 2.5rem;
`;


const About = styled.div`
    grid-area: about;
`;

const University = styled.div`
    grid-area: experience;
`;


const Poo = styled.div` grid-area: poo;`
const Download = styled.div` grid-area: download;`

export default function ResumePage() {
    const [contactOpen, setContactOpen] = useState(false)
    const toggleContact = () => {
        setContactOpen(!contactOpen)
    }
    return (
        <AppWrapper>
            <Main>
                <NavBar toggleContact={toggleContact} />
                <ResumeWrapper>
                    <TitleSection>
                        <Subtitle>Work Experience</Subtitle>
                    </TitleSection>
                    <Info>
                        <Subtitle>Education</Subtitle>
                    </Info>
                    <About>infoooo</About>
                    <University>
                        <h3>University of Toronto</h3>
                HBSc • Computer Science, Mathmeatics, Statistics and Economics <br />
                        <h5> <i>2019-2023</i></h5>
                    </University>
                    <Poo>infoooo</Poo>
                    <Download>Temporarily unavailable</Download>
                    <Subtitle>oh also i have a song:</Subtitle>
                    <iframe src="https://open.spotify.com/embed/track/24DasXEtte7wU2v3OiJa5q" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </ResumeWrapper>
                <Contact isOpen={contactOpen} toggleContact={toggleContact} />

            </Main>
        </AppWrapper>
    )
}
