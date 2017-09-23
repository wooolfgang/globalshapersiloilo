import React from 'react';
import styled from 'styled-components';
import media from '../../theme/media';
import Divider from './Divider';

const StyledDiv = styled.div`
  background-color: white;
  width: 100vw;
  height: 500px;
  display: flex;

  @media (max-width:1250px) {
    height: 750px;
  }

  ${media.desktop`
    height: 1150px;
  `}

  ${media.phone`
    height: 1600px;
  `}
`;

const SectionContainer = styled.div`
  width: 85%;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  display: flex;  
  margin: auto;
`;

const Container = styled.div`
  width: 350px;
  height: 350px;    
  background: #F8F8F8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19);

  h2 {
    margin: 0px;  
    margin-top: -10px;
    color: #00529B;
    font-family: 'Playfair Display', 'serif';
    font-weight: bold;
    font-size: 32px;
  }

  p {
    margin: 0px;
    line-height: 1.75;
    padding: 20px;
  }

  @media (max-width:1250px) {
    margin: 10px;
  }

  ${media.desktop`
    width: 80%;
  `}

  ${media.phone`
    height: 450px;
    width: 95%;
  `}
`;

const Content = () => (
  <StyledDiv>
    <SectionContainer>
      <Container>
        <h2> Why </h2>
        <Divider />
        <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." </p>
      </Container>
      <Container>
        <h2> How </h2>
        <Divider />
        <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." </p>
      </Container>
      <Container>
        <h2> Who </h2>
        <Divider />
        <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." </p>
      </Container>
    </SectionContainer>
  </StyledDiv>
);

export default Content;
