import { useState } from "react";
import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ResumePage from "./components/ResumePage";
import { AppWrapper, Main } from "./styles";



function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const [resumeOpen, setResumeOpen] = useState(true)

  const toggleContact = () => {
    setContactOpen(!contactOpen)
  }
  return (
    <AppWrapper>
      <Main isOpen={contactOpen}>
        <NavBar toggleContact={toggleContact} />
        {/* {resumeOpen ? <ResumePage /> : <Hero />} */}
        <Hero/>
      </Main>
      <Contact isOpen={contactOpen} toggleContact={toggleContact} />
    </AppWrapper>
  );
}

export default App;
