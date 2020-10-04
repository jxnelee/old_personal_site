import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import styled from 'styled-components'
import PanelRight from './PanelRight';

const LeftDiv = styled.div`
	float: left;
	width: 23%;
	justify-content: middle;
	position: fixed;
	margin-top: 0px;
  padding-top: 0px;
`

const RightDiv = styled.div`
	float: right;
	width: 80%;
	height: 90%;
`

const BlueDiv = styled.div`
	background-color:#9edae6;
`

const YellowDiv = styled.div`
	background-color:yellow;
`

function App() {
  return (
    <div className="App">
      <LeftDiv>
        <Sidebar></Sidebar>
      </LeftDiv>
      <RightDiv>
        <PanelRight></PanelRight>
      </RightDiv>
    </div>
  );
}

export default App;
