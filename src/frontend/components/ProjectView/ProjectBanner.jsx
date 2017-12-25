import React from 'react';
import styled from 'styled-components';
import Link from '../Link';
import { VolunteerButton } from '../Buttons';

const StyledDiv = styled.div`
  grid-area: project;
  display: grid;
  width: 100vw;
  background: #3a7bd5; 
  background: -webkit-linear-gradient(to right, #3a6073, #3a7bd5);
  background: linear-gradient(to right, #3a6073, #3a7bd5);

  @media screen and (min-width: 700px) {
    grid-template-areas: 'titleContainer organizerContainer';
    grid-auto-columns: 2fr 2fr;
    height: 250px;
  }

  @media screen and (max-width: 700px) {
    grid-template-areas: 'titleContainer' 'organizerContainer';
    grid-auto-rows: 150px 250px;
    height: 400px;
  }
`;

const TitleContainer = styled.div`
  text-align: center;
  grid-area: titleContainer;
`;

const StyledH1 = styled.h1`
  margin: 0;
  font-size: 2em;
  font-weight: normal;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  color: white;
`;

const OrganizerContainer = styled.div`
  grid-area: organizerContainer;
  text-align: center;
  height: 70%;
  padding: 10px;
  box-sizing: border-box;
  width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.grayOne};
  box-shadow: ${props => props.theme.cardThree};

  span {
    margin: 3px 0 10px 0;
    color: gray;
    font-size: .90em;
  }
`;

const OrgHeader = styled.div`
  margin: 0;
  font-size: 1.5em;
  font-weight: normal;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;

  a {
    width: auto;
    margin: 0px !important;
  }
`;

const OrgImage = styled.div`
  width: 42px;
  height: 42px;
  background: gray;
  border-radius: 50%;
  margin-right: 7px;
`;

const ProjectBanner = () => (
  <StyledDiv>
    <TitleContainer>
      <StyledH1>Project Title Here</StyledH1>
    </TitleContainer>
    <OrganizerContainer>
      <OrgHeader>
        <OrgImage />
        <Link to="/organization"> Organization Name </Link>
      </OrgHeader>
      <span>Posted 11/02/2017</span>
      <VolunteerButton>Volunteer</VolunteerButton>
    </OrganizerContainer>
  </StyledDiv>
);

export default ProjectBanner;
