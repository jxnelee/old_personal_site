import React from 'react';
import styled from 'styled-components';
import lights from './assets/lights.png';

const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: middle;
    align: center;
    padding: 140px;
`

const Lights = styled.img`
    width: 100%;
    height: 100%;
`

const Intro = styled.p`
    font-size: 90px;
    text-align: left;
    line-height: 120px;
    weight: 700;
    margin: 0px;
    margin-top: 20px;
`

const Description = styled.p`
    font-size: 50px;
    text-align: left;
    line-height: 59px;
    weight: 400;
    margin: 0px;
`

export default function About() {
    return(
        <div>
            <ContentDiv>
                <Lights src={lights}></Lights>
                <Intro>Hi, I'm Jane!</Intro>
                <Description>I'm a student at <b>UC Berkeley</b>. Currently, I'm on a journey to discover how I can apply my passion for <b>computer science</b>.</Description>
            </ContentDiv>
        </div>
    );
    
}