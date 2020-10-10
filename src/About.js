import React from 'react';
import styled from 'styled-components';
import lights from './assets/lights.png';
import socialgood from './assets/socialgood.svg';
import education from './assets/education.svg';
import axios from 'axios';

const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: middle;
    align: center;
    padding: 140px;
    padding-bottom: 0px;
    marginBottom: 0px;
`

const Lights = styled.img`
    width: 100%;
    height: 100%;
`

const Intro = styled.p`
    font-size: 90px;
    text-align: left;
    line-height: 210px;
    weight: 700;
    margin: 0px;
    margin-top: 40px;
`

const Description = styled.p`
    font-size: 35px;
    text-align: left;
    line-height: 50px;
    weight: 400;
    margin: 0px;
`

const Label = styled.p`
    font-size: 20px;
    text-align: center;
    line-height: 30px;
    weight: 400;
    margin: 0px;
    color: #9edae6 !Important;
`

const PanelDiv = styled.div`
    padding-left:40px;
    padding-top: 40px;
    padding-bottom: 10px;
    margin-bottom: 0px;
    justify-content: middle;
    align: center;
    display: flex;
    flex-direction: row;
`

const IconAndDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
    margin-right: 100px;
    margin-bottom: 20;
    padding-bottom: 20;
`

const AboutSubLead = styled.p`
    font-size: 50px;
    text-align: left;
    line-height: 80px;
    weight: 700;
    margin-bottom: 0px;
`

const Icon = styled.img`
    marginRight: 30px;
    marginTop: 20px;
    marginBottom: 10px;
    border: none;
    display: inline-block;
    width: 235px;
    height: 170px;
`

export default function About() {
    const [interests, setInterests] = React.useState(null);
    async function fetData() {
        const res = await axios.get(
            'https://api.airtable.com/v0/appqZDvLfhRgrp4L5/Interests',
            {
                headers: {
                    authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
                },
            }
        );
        console.log(res.data);
        setInterests(res.data.records);
    }
    React.useEffect(() => {
        fetData();
    }, []);
    if (!interests) {
        return <div>Loading...</div>;
    }

    return(
        <div>
            <ContentDiv>
                
                <Intro>Hi, I'm Jane!</Intro>
                <Description>I'm a student at <b>UC Berkeley</b>. Currently, I'm on a journey to discover how I can apply my passion for <b>computer science</b>.</Description>
                <AboutSubLead><b>I'm also passionate about...</b></AboutSubLead>
                <PanelDiv>
                    {interests.map((record) => (
                        <IconAndDescription key={record.id}>
                            <Icon src={record.fields.Attachments[0].url}/>
                            <Label><b>{record.fields.Name}</b></Label>
                        </IconAndDescription>
                    ))}
                </PanelDiv>
            </ContentDiv>
        </div>
    );
    
}