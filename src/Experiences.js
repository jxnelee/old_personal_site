import React from 'react';
import styled from 'styled-components';
import cosmos from './assets/cosmos.png';
import codebase from './assets/codebase.png';
import cpl from './assets/cpl.png';
import chs from './assets/chs.png';
import symantec from './assets/symantec.png';
import table from './assets/tablescene.svg';

const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: middle;
    padding: 140px;
    padding-top: 70px;
    padding-bottom: 0px;
    margin-bottom: 0px;
`

const ExperiencesLead = styled.p`
    font-size: 50px;
    text-align: left;
    line-height: 80px;
    weight: 700;
    margin-bottom: 70px;
`

const GrowingDiv = styled.div`
    background-color: #d7f2f7;
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
    font-size: 30px;
    text-align: left;
    line-height: 40px;
    weight: 700;
    margin-bottom: 0px;
    margin-top: 5px;
`

const Description = styled.p`
    font-size: 15px;
    text-align: left;
    line-height: 25px;
    weight: 300;
    margin-top: 5px;
`

const TableDiv = styled.div`
    justify-content: right;
    align: right;
    margin-right: 0px;
    position: absolute;
    top: 1400px;
    right: 100px;
    z-index: -100;
`

export default function Experiences() {
    return(
        <div>
            <ContentDiv>
                <ExperiencesLead><b>Here are some experiences that have shaped my journey...</b></ExperiencesLead>
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
                        <Description>Developed SAT math curriculum for a tutoring chatbot with XMind software. Conducted data audits using Git and R programming. Filed public records requests to gather data from various county jails</Description>
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
                <TableDiv>
                    <img src={table} style=
                        {{marginRight: '20px',
                        marginLeft: '25px',
                        marginTop: '20px',
                        marginBottom: '40px',
                        border: 'none',
                        width: '405px',
                        height: '700px'}}/>
                </TableDiv>
            </ContentDiv>
        </div>
    );
}