import React from 'react'
import styled from 'styled-components';
// import { ReactComponent as Home } from '../icons/home.svg';

const NavBarWrapper = styled.nav`
  padding: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const NavButton = styled.button`
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
               {/* <Home/>  */}
           </NavButton>
           <NavButton>Résumé</NavButton>
           <NavButton>About</NavButton>
           <ContactButton onClick={toggleContact}>Get in touch</ContactButton>
        </NavBarWrapper>
    )
}
