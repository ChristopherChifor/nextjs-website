import { useState } from "react";
import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ResumePage from "./components/ResumePage";


const Main = styled.div`
  margin-right: ${props => props.isOpen ? 20 : 0}vw; 
  @media (max-width: 600px) {
    margin-right: ${props => props.isOpen ? 100 : 0}vw; 
  }
`;

const AppWrapper = styled.div`
  & > * {
    transition: all 0.5s ease;
  }
`;
function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const [resumeOpen, setResumeOpen] = useState(false)

  const toggleContact = () => {
    setContactOpen(!contactOpen)
  }
  return (
    <AppWrapper>
      <Main isOpen={contactOpen}>
        <NavBar toggleContact={toggleContact}/>
        {resumeOpen ? <ResumePage/> : <Hero/>}
      </Main>
      <Contact isOpen={contactOpen} toggleContact={toggleContact}/>
    </AppWrapper>
  );
}

export default App;
