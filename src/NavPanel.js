import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: #DEDCDC;
    border-radius: 15px;
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 50px;
    font-size: 20px;
    color: white;
    border: none;
    display: inline-block;
    padding: 5px 15px;
`

export default function NavPanel() {
    return(
        <div>
            <Button>about</Button>
            <Button>experiences</Button>
            <Button>projects</Button>
            <Button>contact</Button>
        </div>
    );
}