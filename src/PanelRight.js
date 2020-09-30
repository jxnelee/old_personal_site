import React from 'react';
import styled from 'styled-components';
import NavPanel from './NavPanel';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import Contact from './Contact';

const Scrollable = styled.div`
    overflow-y: auto;
    word-wrap: break-word;
`

const NavPanelDiv = styled.div`
    width: 80%;
    float: right;
    position: fixed;
`

export default function PanelRight() {
    return(
        <div>
            <NavPanelDiv>
                <NavPanel></NavPanel>
            </NavPanelDiv>
            
            <Scrollable>
                <div id='about'>
                    <About></About>
                </div>
                <div id='experiences'>
                    <Experiences></Experiences>
                </div>
                <div id='projects'>
                    <Projects></Projects>
                </div>
                <div id='contact'>
                    <Contact></Contact>
                </div>
            </Scrollable>
        </div>
    );
}