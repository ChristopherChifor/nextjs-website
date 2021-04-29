import React from 'react'
import styled from 'styled-components'
// import { ReactComponent as Close } from '../icons/x.svg';


const ContactWrapper = styled.div`
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #111;
  color: whitesmoke;
  overflow-x: hidden;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  /* border-radius: 1rem; */
  
  width: ${props => props.isOpen ? 20 : 0}vw; 
  @media (max-width: 600px) {
    width: ${props => props.isOpen ? 100 : 0}vw; 
  }

  & > * {
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      &:first-child {
          margin-top: 1.5rem;
      }
  }
`;

const CloseContact = styled.div`
    border-radius: 0.3rem;
    color: whitesmoke;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.2s ease;

&:hover{
    transform: scale(1.3); 
}  
`
const ContactSection = styled.div`
    display: flex;
    justify-content: flex-end;

`
const Fieldset = styled.div`
    display: flex;
    flex-direction: column;
    border: none;
    margin-bottom: 2em;
`

export default function Contact({ isOpen, toggleContact }) {
    return (
        <ContactWrapper isOpen={isOpen}>
            <ContactSection>
                <CloseContact onClick={toggleContact}> <img src='/close_white_24dp.svg'/> </CloseContact>
            </ContactSection>
            <h1>Contact Me</h1>
            <Fieldset>
            <label htmlFor="name-field">Name</label>
            <input type="text" name="name-field"/>
            </Fieldset>
            <Fieldset>
            <label htmlFor="email-field">Email</label>
            <input type="email" name="email-field"/>
            </Fieldset>
            <Fieldset>
            <label htmlFor="content">Message</label>
            <textarea name="content" cols="30" rows="10"></textarea>
            </Fieldset>
        </ContactWrapper>
    )
}
