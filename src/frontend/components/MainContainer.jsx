import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: white;
  width: 100vw;
  height: 400px;
  display: flex;
`

const SectionContainer = styled.div`
  width: 85%;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  display: flex;  
  margin: auto;
`

const Container = styled.div`
  width: 350px;
  height: 300px;    
  background: #F8F8F8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 0px;  
    margin-top: 20px;
    color: #00529B;
    font-family: 'Playfair Display', 'serif';
    font-weight: bold;
  }

  p {
    margin-top: 8px;
    line-height: 1.75;
    padding: 20px;
  }
`

const MainContainer = () => (
  <StyledDiv>
    <SectionContainer>
      <Container>
        <h2> Why </h2>
        <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." </p>
      </Container>
      <Container>
        <h2> How </h2>
        <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." </p>
      </Container>
      <Container>
        <h2> Who </h2>
        <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." </p>
      </Container>
    </SectionContainer>
  </StyledDiv>
);

export default MainContainer;