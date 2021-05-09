import React, { useState } from 'react'
import styled from 'styled-components'
import { AppWrapper, Main, Subtitle, Title } from '../styles';
import Contact from './Contact';
import NavBar from './NavBar';
import {Link} from '../styles'


const ResumeWrapper = styled.div`
  margin-left: 2rem;
  display: grid;
  justify-content: center;
  grid-template-columns: 0.5fr 0.5fr;
  grid-template-rows: 0.2fr 0.2fr 1fr;
  gap: 10px 0px;
  font-size: 130%;
  grid-template-areas:
    "work education"
    "job school"
    "skills courses";
    min-height: 100vh;
    @media (min-width: 1000px){
        margin-left: 5rem;
        font-size: 150%;
    }
    @media (max-width: 700px) {
        grid-template-columns: 1fr;
        /* background-color: red; */
        grid-template-areas:
    "work"
    "job"
    "skills"
    "education"
    "school"
    "courses";
    }
`;

const TitleSection = styled.div`
    margin-top: 50px;
    grid-area: work;
    font-size: 150%;
`;

const Info = styled.div`
    margin-top: 50px;
    grid-area: education;
    font-size: 150%;
`;


const Mykigai = styled.div`
    grid-area: job;
`;

const University = styled.div`
    grid-area: school;
`;


const Poo = styled.div`
    grid-area: skills;
`;


const Download = styled.div` grid-area: courses;`

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
                        <h1>Experience</h1>
                    </TitleSection>
                    <Info>
                        <h1>Education</h1>
                    </Info>
                    <Mykigai>
                        <h1><Link href="https://www.mykigai.com/">Mykigai 🧬</Link></h1>
                        Full Stack Developer • Product Designer
                        <h5> <i>2021 Summer</i></h5>
                    </Mykigai>
                    <University>
                        <h1><Link href="https://www.utoronto.ca/">University of Toronto 🏫</Link></h1>
                            HBSc • Computer Science, Mathematics, Statistics and Economics <br />
                        <h5> <i>2019-2023</i></h5>
                    </University>
                    <Poo>
                        <h3>Skills applied:</h3>
                        <li>Vue.js</li>
                        <li>Nuxt.js</li>
                        <li>Figma</li>
                        <li>HTML/CSS</li>
                        <li>UI/UX Design</li>
                        <li>Wireframing</li>
                        <li>Flask</li>
                    </Poo>
                    <Download>
                        <h3>Relevant courses:</h3>
                        <li>Methods for Machine learning II</li>
                        <li>Data Structures and Analysis</li>
                        <li>Multivariable Calculus</li>
                        <li>Software Design</li>
                        <li>Probability, Statistics and Data Analysis II</li>
                        <li>Financial Economics</li>
                    </Download>
                    <h1>Check out my song:<iframe src="https://open.spotify.com/embed/track/24DasXEtte7wU2v3OiJa5q" width="80" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></h1>
                </ResumeWrapper>
                <Contact isOpen={contactOpen} toggleContact={toggleContact} />
            </Main>
        </AppWrapper>
    )
}
