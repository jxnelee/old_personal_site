import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: #DEDCDC;
    border-radius: 15px;
    margin-left: 80px;
    margin-right: 60px;
    margin-top: 50px;
    font-size: 20px;
    color: white;
    border: none;
    display: inline-block;
    padding: 5px 15px;
    outline:none;
`

export default function NavPanel() {
    return(
        <div>
            <a href='#about'><Button>about</Button></a>
            <a href='#experiences'><Button>experiences</Button></a>
            <a href='#projects'><Button>projects</Button></a>
            <a href='#contact'><Button>contact</Button></a>
        </div>
    );
}