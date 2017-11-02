import React from 'react';
import styled from 'styled-components';
import { Secondary } from '../Buttons';
import GettingStartedGoogleMap from './MapContainer';
import media from '../../assets/theme/media';

const StyledDiv = styled.div`
  height: 475px;
  width: 100vw;
  display: flex;
  background: ${props => props.theme.tertiary};

  ${media.tablet`
    height: 850px;
  `}
`;

const SectionContainer = styled.div`  
  width: 80%;
  height: 80%;
  display: flex;
  margin: auto;
  flex-wrap: wrap;
`;

const ProjectSearch = styled.div`
  flex: 1;
  min-width: 300px;
  background: #FAFAFA;
  display: flex;
`;

const LocalListings = styled.div`
  flex: 1;
  min-width: 300px;
`;

const Container = styled.div`
  height: 70%;
  width: 70%;
  margin: auto;
  border: 2px solid #375D81;
  padding: 20px;

  h2 {
    font-family: 'Playfair Display', 'serif';
    margin: 0px;
    margin-top: 25px;
    margin-bottom: 15px;
  }

  h3 {
    font-family: 'Raleway', 'sans-serif';
    margin: 0px;
    margin-bottom: 10px;
  }

`;

const SubContainer = () => (
  <StyledDiv>
    <SectionContainer>
      <ProjectSearch>
        <Container>
          <h2> What's your passion? </h2>
          <h3> We'll find the right projects for you. </h3>
          <Secondary> Find Projects</Secondary>
        </Container>
      </ProjectSearch>
      <LocalListings>
        <GettingStartedGoogleMap
          containerElement={
            <div style={{ height: '100%' }} />
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }
        />
      </LocalListings>
    </SectionContainer>
  </StyledDiv>
);

export default SubContainer;
