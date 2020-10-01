import React from 'react';
import styled from 'styled-components';
import desk from './assets/desksetup.svg';
import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';
import devpost from './assets/devpost-icon.svg';

const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: middle;
    align: center;
    padding: 140px;
    padding-top: 40px;
    padding-bottom: 0px;
`
const Desk = styled.img`
    width: 100%;
    height: 100%;
    margin-bottom: 0px;
`

const Button = styled.button`
    margin-right: 20px;
    margin-top: 30px;
    margin-bottom: 40px;
    border: none;
    display: inline-block;
    width: 24px;
    height: 24px;
`

const Title = styled.p`
    font-size: 50px;
    padding-top: 50px;
    text-align: left;
    line-height: 59px;
    weight: 900;
    margin: 0px;
`

const Description = styled.p`
    font-size: 30px;
    text-align: left;
    line-height: 59px;
    weight: 400;
    margin: 0px;
`

export default function Contacts() {
    return(
        <div>
            <ContentDiv>
                <Title><b>Please reach out! I'd love to chat.</b></Title>
                <Title>email</Title>
                <Description>jane-lee@berkeley.edu</Description>
                <div align="left">
                    <a href="https://www.linkedin.com/in/jane-lee-916b7818a/" target="_blank"><img src={linkedin} style=
                        {{marginRight: '20px',
                        marginTop: '20px',
                        marginBottom: '40px',
                        border: 'none',
                        display: 'inline-block',
                        width: '24px',
                        height: '24px'}}
                    /></a>
                    <a href="https://github.com/jxnelee/" target="_blank"><img src={github} style=
                        {{marginRight: '20px',
                        marginTop: '20px',
                        marginBottom: '40px',
                        border: 'none',
                        display: 'inline-block',
                        width: '24px',
                        height: '24px'}}
                    /></a>
                    <a href="https://devpost.com/jxnelee?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank"><img src={devpost} style=
                        {{marginRight: '20px',
                        marginTop: '20px',
                        marginBottom: '40px',
                        border: 'none',
                        display: 'inline-block',
                        width: '27px',
                        fill: 'black',
                        height: '27px'}}
                    /></a>
                </div>
                <Desk src={desk}></Desk>
            </ContentDiv>
        </div>
    );
}

