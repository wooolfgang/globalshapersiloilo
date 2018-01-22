import React from 'react';
import styled from 'styled-components';
import { crowd } from '../../assets/theme/images';

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

const Image = styled.div`
  position: absolute;
  background: url(${crowd});
  background-size: contain;
  width: 80%;
  left: 50%;
  transform: translateX(-50%);
  height: 210px;
  top: 240px;

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

const Slogan = () => (
  <StyledDiv>
    <Heading>
      <Title> Building a movement </Title>
      <Motto> We believe in a world where young people are a central to solution building, policy-making and lasting change. </Motto>
    </Heading>
    <Image />
  </StyledDiv>
);

export default Slogan;
