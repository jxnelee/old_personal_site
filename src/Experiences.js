import React from 'react';
import styled from 'styled-components';

const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: middle;
    padding: 140px;
`

const Description = styled.p`
    font-size: 90px;
    text-align: left;
    line-height: 112px;
    weight: 700;
    margin: 0px;
`

export default function Experiences() {
    return(
        <div>
            <ContentDiv>
                <Description>kajsdjkfhakjshfkjshfkjahsdkjhfkjsahdfksd</Description>
            </ContentDiv>
        </div>
    );
}