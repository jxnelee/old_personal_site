import React from 'react';
import styled from 'styled-components';
import sparetocare from './assets/sparetocare.png';
import milkandcookies from './assets/milkandcookies.png';
import githublogo from './assets/githublogo.png';
import cofed from './assets/cofed.png';
import axios from 'axios';

const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: middle;
    align: center;
    padding-top: 60px;
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 50px;
    border-top: 9px;
`

const ProjectLead = styled.p`
    font-size: 50px;
    text-align: left;
    line-height: 80px;
    weight: 700;
    margin-bottom: 30px;
    margin-left: 40px;
`

const ProjectName = styled.p`
    font-size: 40px;
    text-align: left;
    line-height: 60px;
    weight: 700;
    margin: 0px;
`

const Description = styled.p`
    font-size: 15px;
    text-align: left;
    line-height: 25px;
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
    background-color: #d7f2f7;
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
    background-color: #9edae6;
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
    const [projects, setProjects] = React.useState(null);
    async function fetData() {
        const res = await axios.get(
            'https://api.airtable.com/v0/appqZDvLfhRgrp4L5/Projects',
            {
                headers: {
                    authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
                },
            }
        );
        console.log(res.data);
        setProjects(res.data.records);
    }
    React.useEffect(() => {
        fetData();
    }, []);
    if (!projects) {
        return <div>Loading...</div>;
    }

    return(
        <div>
            <ContentDiv>
                <ProjectLead><b>I've learned a lot by doing these projects...</b></ProjectLead>

                {projects.map((record, i) => {
                    if (i % 2 === 0) {
                        return (
                            <LeftJProject key={record.id}>
                                <ProjectButton>
                                    <a href={record.fields.Link} target='_blank'><img src={record.fields.Attachments[0].url} style=
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
                                    {record.fields.Languages.map((language) => (
                                        <TypeButton>{language}</TypeButton>
                                    ))}
                                    </PanelDiv>
                                    <ProjectName>{record.fields.Name}</ProjectName>
                                    <Description>{record.fields.Notes}</Description>
                                </NameAndDescription>
                            </LeftJProject>
                        )
                    } else {
                        return (
                            <RightJProject key={record.id}>
                                <NameAndDescription>
                                    <PanelDiv>
                                    {record.fields.Languages.map((language) => (
                                        <TypeButton>{language}</TypeButton>
                                    ))}
                                    </PanelDiv>
                                    <ProjectName>{record.fields.Name}</ProjectName>
                                    <Description>{record.fields.Notes}</Description>
                                </NameAndDescription>
                                <ProjectButton>
                                    <a href={record.fields.Link} target='_blank'><img src={record.fields.Attachments[0].url} style=
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
                            </RightJProject>
                        )
                    }
                })}
                
            </ContentDiv>
        </div>
    );
}