import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import styled from 'styled-components'
import PanelRight from './PanelRight';

const LeftDiv = styled.div`
	float: left;
	width: 20%;
	justify-content: middle;
	position: fixed;
`

const RightDiv = styled.div`
	float: right;
	width: 80%;
	height: 90%;
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
