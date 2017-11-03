import React from 'react';
import styled from 'styled-components';
import Divider from './Divider';

const StyledDiv = styled.div`
  background-color: white;
`;

const SectionContainer = styled.div` 
  display: grid;
  text-align: center;

  @media screen and (min-width: 800px) {
    grid-template-areas: "why how who";
    grid-auto-columns: 1fr;
    padding: 50px;
  }

  @media screen and (max-width: 800px) {
    grid-template-areas: "why" "how" "who";
    grid-auto-columns: 1fr;
    padding: 50px 0;
  }

  #why {
    grid-area: why;
  }

  #how {
    grid-area: how;
  }

  #who {
    grid-area: who;
  }
`;

const Container = styled.div`
  background: #F8F8F8;
  padding: 30px 0;  
  box-shadow: ${props => props.theme.cardTwo};

  h2 {
    margin: 0px;  
    margin-top: -10px;
    font-weight: bold;
    font-size: 32px;
    color: ${props => props.theme.secondary};
    font-family: ${props => props.theme.fontThree};
  }

  p {
    margin: 0px;
    line-height: 1.75;
    padding: 20px;
  }

  @media screen and (min-width: 700px) {
    margin: 0 20px;    
  }
`;

const Content = () => (
  <StyledDiv>
    <SectionContainer>
      <div id="why">
        <Container>
          <h2> Why </h2>
          <Divider />
          <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." </p>
        </Container>
      </div>
      <div id="how">
        <Container>
          <h2> How </h2>
          <Divider />
          <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." </p>
        </Container>
      </div>
      <div id="who">
        <Container>
          <h2> Who </h2>
          <Divider />
          <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." </p>
        </Container>
      </div>
    </SectionContainer>
  </StyledDiv>
);

export default Content;
