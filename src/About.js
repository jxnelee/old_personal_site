import React from 'react';
import styled from 'styled-components';
import lights from './lights.png';

const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: middle;
    padding: 140px;
`

const Lights = styled.img`
    width: 100%;
    height: 100%;
`

const Description = styled.p`
    font-size: 90px;
    text-align: left;
    line-height: 112px;
    weight: 700;
    margin: 0px;
`

export default function About() {
    return(
        <div>
            <ContentDiv>
                <Lights src={lights}></Lights>
                <Description>kajsdjkfhakjshfkjshfkjahsdkjhfkjsahdfksd</Description>
            </ContentDiv>
        </div>
    );
    
}