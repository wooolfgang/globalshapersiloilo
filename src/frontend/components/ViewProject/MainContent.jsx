import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  grid-area: project;
  display: grid;
  width: 100vw;
  background: lightgray;

  @media screen and (min-width: 700px) {
    grid-template-areas: 'titleContainer organizerContainer';
    grid-auto-columns: 3fr 2fr;
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
  font-size: 3em;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

const StyledH2 = styled.h2`
  margin: 0;
  font-size: 2em;
`;

const OrganizerContainer = styled.div`
  grid-area: organizerContainer;
  padding: 10%;
  text-align: center;
`;

const ApplyButton = styled.button`
  border: none;
  color: white;
  background: #332eff;
  padding: 10px 40px;
  font-size: 1.5em;
  cursor: pointer;
  border-radius: 10px;
`;

class MainContent extends React.Component {
  render() {
    return (
      <StyledDiv>
        <TitleContainer>
          <StyledH1>Project Title Here</StyledH1>
        </TitleContainer>
        <OrganizerContainer>
          <StyledH2>Organizer name here</StyledH2>
          <p>Posted: dateHere</p>
          <ApplyButton>Volunteer</ApplyButton>
        </OrganizerContainer>
      </StyledDiv>
    );
  }
}

export default MainContent;
