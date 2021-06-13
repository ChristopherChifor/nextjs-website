import React, { useState } from 'react'
import styled from 'styled-components'
import { AppWrapper, Main, Subtitle, Title } from '../styles';
import Contact from './Contact';
import NavBar from './NavBar';
import {Link} from '../styles'


export default function AboutPage() {
    const [contactOpen, setContactOpen] = useState(false)
    const toggleContact = () => {
        setContactOpen(!contactOpen)
    }
    return(
        //TODO
        <AppWrapper>
            <Main>
                <NavBar toggleContact={toggleContact} />


            </Main>
        </AppWrapper>
    )

    

}