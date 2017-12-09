import React from 'react';
import styled from 'styled-components';
import { Secondary } from '../Buttons';
import GoogleMap from './GoogleMap';

const StyledDiv = styled.div`
  height: 475px;
  width: 100vw;
  display: flex;
  background: ${props => props.theme.tertiary};

  @media screen and (max-width: 630px) {
    padding: 5px 0px;
    height: auto;
  };
`;

const SectionContainer = styled.div`  
  width: 80%;
  height: 80%;
  display: flex;
  margin: auto;
  flex-wrap: wrap;
 
  @media screen and (max-width: 750px) {
    width: 96%;
  };

  @media screen and (max-width: 630px) {
    height: 100%;
  }
`;

const ProjectSearch = styled.div`
  flex: 1;
  min-width: 300px;
  min-height: 300px;
  background: #FAFAFA;
  display: flex;
`;

const LocalListings = styled.div`
  flex: 1;
  min-width: 300px;
  min-height: 300px;
  overflow: hidden;
`;

const Container = styled.div`
  height: 70%;
  width: 70%;
  margin: auto;
  border: 2px solid #375D81;
  padding: 20px;

  h2 {
    margin: 0px;
    margin-top: 25px;
    margin-bottom: 15px;  
    font-family: ${props => props.theme.fontThree};
  }

  h3 {
    margin: 0px;
    margin-bottom: 12px;
    font-family: ${props => props.theme.fontTwo};
  }
`;

const SubContainer = () => (
  <StyledDiv>
    <SectionContainer>
      <ProjectSearch>
        <Container>
          <h2> What's your passion? </h2>
          <h3> We'll find the right projects for you. </h3>
          <Secondary href="/#/find"> Find Projects</Secondary>
        </Container>
      </ProjectSearch>
      <LocalListings>
        <GoogleMap markers={[{
          lat: 10.720321,
          lng: 122.562019,
        }, {
          lat: 10.7186,
          lng: 122.5477,
        }, {
          lat: 10.7603,
          lng: 122.5260,
        }]}
        />
      </LocalListings>
    </SectionContainer>
  </StyledDiv>
);

export default SubContainer;
