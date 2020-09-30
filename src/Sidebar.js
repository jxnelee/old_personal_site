import React from 'react';
import styled from 'styled-components'
import dots from './dots.png';

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: middle;
    word-wrap: break-word;
    align-content: center;
`
const Dots = styled.img`
    width: 100%;
    height: 100%;
`
const NameField = styled.p`
    font-size: 96px;
    text-align: center;
    line-height: 112px;
    weight: 700;
`
const InfoField = styled.p`
    font-size: 24px;
    text-align: center;
    weight: 400;
    line-height: 28px;
    text-align: center;
`
export default function Sidebar() {
    return(
        <Wrapper>
            <NameField>jane lee</NameField>
            <Dots src={dots}/>
            <InfoField>akjsdhfjkshdjfksaksjhfkdshfsdfksdfhfakjdhfahdfkdhfkdshfkksdhfkdf</InfoField>
        </Wrapper>
    ); 
}
