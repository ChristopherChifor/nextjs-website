import React from 'react'
import styled from 'styled-components';

const NavBarWrapper = styled.nav`
  padding: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const NavButton = styled.button`
    all: unset;
    color: black;
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

`
const ContactButton = styled(NavButton)`
    background-color: black;
    border-radius: 0.3rem;
    color: whitesmoke;
    font-weight: 800;
`

export default function NavBar({toggleContact}) {
    return (
        <NavBarWrapper>
           <NavButton> 
            <a href="/">
                <img src='/home.svg'/>
            </a>
           </NavButton>
           
           <a href="/resume">
                <NavButton>
                   Résumé
                </NavButton>
            </a>
            <a href="/about">
                <NavButton>
                    About
                </NavButton>
            </a>
           <ContactButton onClick={toggleContact}>Get in touch</ContactButton>
        </NavBarWrapper>
    )
}