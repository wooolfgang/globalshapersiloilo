import React from 'react';
import styled from 'styled-components';
import GoogleMap from '../LandingPage/GoogleMap';

const RequirementBox = styled.div`
  height: 400px;
  margin-top: 30px;
  text-align: center;
  box-shadow: ${props => props.theme.cardTwo};

  @media screen and (min-width: 700px) {
    width: 340px;
  }

  @media screen and (max-width: 699px) {
    width: 100%;
  }
`;

const Container = styled.div`
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
`;

const StyledH3 = styled.h3`
  margin: 5px;
  font-size: 1em;
  font-weight: normal;
`;

const MapContainer = styled.div`
  overflow: hidden;
  height: 330px;
`;

const ProjectRequirements = () => (
  <RequirementBox>
    <Container>
      <StyledH3>Volunteers Needed: </StyledH3>
      <StyledH3>Slots left: </StyledH3>
    </Container>
    <MapContainer>
      <GoogleMap markers={[{
        lat: 10.720321,
        lng: 122.562019,
      }]}
      />
    </MapContainer>
  </RequirementBox>
);

export default ProjectRequirements;
