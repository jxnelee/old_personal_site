import React from 'react';
import styled from 'styled-components'
import dots from './assets/dots.png';
import lights from './assets/lights.svg';
import table from './assets/plantandtable.svg';

const Wrapper = styled.div`
    padding: 10px;
    padding-top: 0px;
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    word-wrap: break-word;
    vertical-align: center;
    margin:auto;
`
const Dots = styled.img`
    width: 100%;
    height: 100%;
`
const NameField = styled.button`
    font-size: 80px;
    text-align: center;
    line-height: 85px;
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
            <img src={lights} style=
                    {{marginRight: '20px',
                    marginLeft: '25px',
                    marginTop: '0px',
                    marginBottom: '20px',
                    border: 'none',
                    display: 'inline-block',
                    width: '220px',
                    height: '290px'}}/>
            <NameField><b>Jane Lee</b></NameField>
            <InfoField>UC Berkeley</InfoField>
            <img src={table} style=
                    {{marginBottom: '0px',
                    border: 'none',
                    marginLeft: '70px',
                    display: 'inline-block',
                    width: '130px',
                    height: '240px'}}/>
        </Wrapper>
    ); 
}
