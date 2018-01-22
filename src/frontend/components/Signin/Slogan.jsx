import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  position: relative;

  @media screen and (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;

const Heading = styled.div`
  color: white;
  grid-area: slogan;
  margin: 0 auto;
  width: 580px;

  @media screen and (max-width: 768px) {
    width: 80%;
  }

  @media screen and (min-width: 769px) {
    padding: 50px 100px;
    width: 80%;
  };
`;

const Title = styled.p`
  font-family: ${props => props.theme.fontThree};
  font-size: 2.3em;

  @media screen and (max-width: 412px) {
    font-size: 1.7em;
  } 
`;

const Motto = styled.p`
  @media screen and (max-width: 412px) {
    font-size: 1em;
  } 
`;

const Slogan = () => (
  <StyledDiv>
    <Heading>
      <Title> Building a movement </Title>
      <Motto> We believe in a world where young people are a central to solution building, policy-making and lasting change. </Motto>
    </Heading>
  </StyledDiv>
);

export default Slogan;
