import React from 'react';
import styled from 'styled-components';
import cosmos from './assets/cosmos.png';
import codebase from './assets/codebase.png';
import cpl from './assets/cpl.png';
import chs from './assets/chs.png';
import symantec from './assets/symantec.png';

const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: middle;
    padding: 140px;
    padding-bottom: 100px;
`

const GrowingDiv = styled.div`
    background-color: #DEDCDC;
    display: flex;
    flex-direction: row;
    height: 140px;
    width: 20%;
    float: left;
    border-radius: 60px;
    transition: height 0.5s;
    overflow: hidden;
    :hover {
        height: 150px;
        width: 100%;
    }
    margin-bottom: 40px;
`

const NameAndDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin: 10px;
`

const Experience = styled.p`
    font-size: 40px;
    text-align: left;
    line-height: 60px;
    weight: 700;
    margin: 0px;
`

const Description = styled.p`
    font-size: 20px;
    text-align: left;
    line-height: 30px;
    weight: 300;
    margin: 0px;
`

export default function Experiences() {
    return(
        <div>
            <ContentDiv>
                <GrowingDiv>
                    <img src={cpl} style=
                        {{marginRight: '20px',
                        marginLeft: '25px',
                        marginTop: '20px',
                        marginBottom: '40px',
                        border: 'none',
                        display: 'inline-block',
                        width: '110px',
                        height: '100px'}}/>
                    <NameAndDescription>
                        <Experience>Research Intern</Experience>
                        <Description>Stuff about CPL internship</Description>
                    </NameAndDescription>
                </GrowingDiv>
                <GrowingDiv>
                    <img src={codebase} style=
                        {{marginRight: '20px',
                        marginLeft: '25px',
                        marginTop: '20px',
                        marginBottom: '40px',
                        border: 'none',
                        display: 'inline-block',
                        width: '110px',
                        height: '100px'}}/>
                    <NameAndDescription>
                        <Experience>Developer</Experience>
                        <Description>Stuff about Codebase</Description>
                    </NameAndDescription>
                </GrowingDiv>
                <GrowingDiv>
                    <img src={cosmos} style=
                        {{marginRight: '20px',
                        marginLeft: '25px',
                        marginTop: '20px',
                        marginBottom: '40px',
                        border: 'none',
                        display: 'inline-block',
                        width: '110px',
                        height: '100px'}}/>
                    <NameAndDescription>
                        <Experience>Student</Experience>
                        <Description>Stuff about COSMOS</Description>
                    </NameAndDescription>
                </GrowingDiv>
                <GrowingDiv>
                    <img src={chs} style=
                        {{marginRight: '20px',
                        marginLeft: '25px',
                        marginTop: '20px',
                        marginBottom: '40px',
                        border: 'none',
                        display: 'inline-block',
                        width: '110px',
                        height: '100px'}}/>
                    <NameAndDescription>
                        <Experience>ASB Vice President</Experience>
                        <Description>Stuff about ASB</Description>
                    </NameAndDescription>
                </GrowingDiv>
                <GrowingDiv>
                    <img src={symantec} style=
                        {{marginRight: '20px',
                        marginLeft: '25px',
                        marginTop: '20px',
                        marginBottom: '40px',
                        border: 'none',
                        display: 'inline-block',
                        width: '110px',
                        height: '100px'}}/>
                    <NameAndDescription>
                        <Experience>Intern</Experience>
                        <Description>Stuff about Symantec Internship</Description>
                    </NameAndDescription>
                </GrowingDiv>
            </ContentDiv>
        </div>
    );
}