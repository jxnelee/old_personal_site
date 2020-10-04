import React from 'react';
import styled from 'styled-components'
import dots from './assets/dots.png';

const Wrapper = styled.div`
    padding: 10px;
    margin: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    word-wrap: break-word;
    vertical-align: center;
`
const Dots = styled.img`
    width: 100%;
    height: 100%;
`
const NameField = styled.button`
    font-size: 96px;
    text-align: center;
    line-height: 112px;
    weight: 700;
    border:none;
    background-color:transparent;
    outline:none;
    onclick: "window.location.href='#about'";
`
const InfoField = styled.p`
    font-size: 24px;
    text-align: center;
    weight: 400;
    line-height: 28px;
    text-align: center;
`
//flexbox
export default function Sidebar() {
    return(
        <Wrapper>
            <NameField>jane lee</NameField>
            <Dots src={dots}/>
            <InfoField>akjsdhfjkshdjfksaksjhfkdshfsdfksdfhfakjdhfahdfkdhfkdshfkksdhfkdf</InfoField>
        </Wrapper>
    ); 
}
