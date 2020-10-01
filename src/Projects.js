import React from 'react';
import styled from 'styled-components';
import sparetocare from './assets/sparetocare.png';
import milkandcookies from './assets/milkandcookies.png';

const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: middle;
    align: center;
    padding-top: 100px;
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 50px;
`

const ProjectName = styled.p`
    font-size: 50px;
    text-align: left;
    line-height: 80px;
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

const LeftJProject = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align: center;
    padding: 40px;
`

const RightJProject = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align: center;
    padding: 40px;
`

const ProjectButton = styled.div`
    background-color: #DEDCDC;
    border-radius: 15px;
    margin:20px;
    font-size: 40px;
    width:260px;
    height:190px;
    color: white;
    border: none;
    padding: 5px 15px;
    outline:none;
`

const NameAndDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
`

const PanelDiv = styled.div`
    display: flex;
    flex-direction: row;
`

const TypeButton = styled.button`
    background-color: #DEDCDC;
    border-radius: 15px;
    margin-left: 5px;
    margin-right: 10px;
    margin-top: 30px;
    font-size: 14px;
    color: white;
    border: none;
    display: inline-block;
    padding: 5px 15px;
    margin-bottom: 0px;
    outline:none;
`

export default function Projects() {
    return(
        <div>
            <ContentDiv>
                <LeftJProject>
                <ProjectButton>
                    <a href='https://devpost.com/software/milk-cookies-a5rzbe' target='_blank'><img src={milkandcookies} style=
                        {{borderRadius: '15px',
                        fontSize: '40px',
                        width:'260px',
                        height:'130px',
                        color: 'white',
                        border: 'none', 
                        padding: '25px 0px',
                        outline:'none'}}
                    /></a>
                   </ProjectButton>
                    <NameAndDescription>
                        <PanelDiv>
                            <TypeButton>chrome API</TypeButton>
                            <TypeButton>javascript</TypeButton>
                        </PanelDiv>
                        <ProjectName>Milk & Cookies</ProjectName>
                        <Description>Stuff about Milk & Cookies</Description>
                    </NameAndDescription>
                </LeftJProject>
                <RightJProject>
                    <NameAndDescription>
                        <PanelDiv>
                            <TypeButton>chrome API</TypeButton>
                            <TypeButton>javascript</TypeButton>
                        </PanelDiv>
                        <ProjectName>Spare to Care</ProjectName>
                        <Description>Stuff about Spare to Care</Description>
                    </NameAndDescription>
                    <ProjectButton>
                    <a href='https://devpost.com/software/spare-to-care' target='_blank'><img src={sparetocare} style=
                        {{borderRadius: '15px',
                        margin:'10px',
                        fontSize: '40px',
                        width:'210px',
                        height:'150px',
                        color: 'white',
                        border: 'none', 
                        padding: '10px 25px',
                        outline:'none'}}
                    /></a>
                    </ProjectButton>
                </RightJProject>
                <LeftJProject>
                    <ProjectButton>Project 3</ProjectButton>
                    <NameAndDescription>
                        <PanelDiv>
                            <TypeButton>p5.js</TypeButton>
                        </PanelDiv>
                        <ProjectName>GitHub Demo</ProjectName>
                        <Description>Stuff about GitHub Demo</Description>
                    </NameAndDescription>
                </LeftJProject>
                <RightJProject>
                    <NameAndDescription>
                        <PanelDiv>
                            <TypeButton>React.js</TypeButton>
                        </PanelDiv>
                        <ProjectName>CoFED Web Portal</ProjectName>
                        <Description>Stuff about CoFED Web Portal</Description>
                    </NameAndDescription>
                    <ProjectButton>Project 4</ProjectButton>
                </RightJProject>
            </ContentDiv>
        </div>
    );
}