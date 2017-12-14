import React from 'react';
import styled from 'styled-components';
import Divider from './Divider';

const SectionContainer = styled.div`
  background: white; 
  display: grid;
  text-align: center;

  @media screen and (min-width: 1200px) {
    grid-template-areas: "why how who";
    grid-auto-columns: 1fr;
    padding: 50px;
  }

  @media screen and (max-width: 1199px) {
    grid-template-areas: "why" "how" "who";
    grid-auto-columns: 1fr;
    padding: 0px 0px;
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
  background: white;
  padding: 20px 20px;  

  h2 {
    margin: 0px;  
    margin-top: -10px;
    font-weight: bold;
    font-size: 32px;
    color: ${props => props.theme.secondary};
    font-family: ${props => props.theme.fontThree};
  }

  p {
    line-height: 2;
    word-spacing: 0.4px;
    margin: 0px;
    padding: 20px;
  }

  @media screen and (min-width: 1200px) {
    margin: 0 20px;
    padding: 10px 10px;
  };
`;

const Content = () => (
  <SectionContainer>
    <Container id="why">
      <h2> Why </h2>
      <Divider />
      <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." </p>
    </Container>
    <Container id="how">
      <h2> How </h2>
      <Divider />
      <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." </p>
    </Container>
    <Container id="who">
      <h2> Who </h2>
      <Divider />
      <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." </p>
    </Container>
  </SectionContainer>
);

export default Content;
