import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: #DEDCDC;
    border-radius: 15px;
    margin-left: 80px;
    margin-right: 50px;
    margin-top: 50px;
    font-size: 20px;
    color: white;
    border: none;
    display: inline-block;
    padding: 5px 15px;
    margin-bottom: 15px;
    outline:none;
`

const PanelDiv = styled.div`
    background-color:white;
    padding-left:40px;
    opacity:1;
    position:fixed;
`

export default function NavPanel() {
    return(
        <PanelDiv> 
            <a href='#about'><Button>about</Button></a>
            <a href='#experiences'><Button>experiences</Button></a>
            <a href='#projects'><Button>projects</Button></a>
            <a href='#contact'><Button>contact</Button></a>
        </PanelDiv>
    );
}