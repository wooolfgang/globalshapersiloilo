import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  grid-area: projectDetails;
  background: lightblue;
  margin: 0;
  display: grid;
  @media screen and (max-width: 700px) {
    grid-template-areas: 'details' 'requirements';
  }

  @media screen and (min-width: 700px) {
    padding: 30px;
    grid-template-areas: 'details requirements';
  }

  #details {
    grid-area: details;
  }

  #requirements {
    grid-area: requirements;
  }
`;

const DetailsContainer = styled.div`
  padding: 30px;
  background: lightgreen;
  border-radius: 10px;
  overflow: auto;
  @media screen and (max-width: 700px) {
    margin-top: 30px;
  }

  @media screen and (min-width: 700px) {
    margin: 30px;
    width: 700px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    height: 200px;
  }
`;

const RequirementBox = styled.div`
  height: 400px;
  background: lightgray;
  margin-top: 30px;
  padding: 10px;
  text-align: center;

  @media screen and (min-width: 700px) {
    width: 300px;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const StyledH1 = styled.h1`
  margin: 0;
  font-size: 2em;
`;
const StyledH3 = styled.h3`
  margin: 0;
  font-size: 1.5em;
`;

const Description = styled.p`
  margin-top: 50px;
`;

class ProjectDetails extends React.Component {
  render() {
    return (
      <StyledDiv>
        <div id="details">
          <DetailsContainer>
            <StyledH1>What is this Project?</StyledH1>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              ad aperiam neque fugit, maiores corporis voluptate! Ullam in,
              aspernatur impedit facilis adipisci eum porro consequuntur
              consequatur earum, quisquam quibusdam placeat tenetur sed,
              necessitatibus est nostrum officiis neque enim mollitia fugiat!
            </Description>
          </DetailsContainer>
          <DetailsContainer>
            <StyledH1>What to do?</StyledH1>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              quidem rerum animi corrupti. Culpa vitae excepturi deserunt et
              laboriosam qui repudiandae eius esse voluptate, cumque odio
              recusandae laudantium vel provident!
            </Description>
          </DetailsContainer>
          <DetailsContainer>
            <StyledH1>Why we need volunteers?</StyledH1>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              quidem rerum animi corrupti. Culpa vitae excepturi deserunt et
              laboriosam qui repudiandae eius esse voluptate, cumque odio
              recusandae laudantium vel provident!
            </Description>
          </DetailsContainer>
          <DetailsContainer>
            <StyledH1>How This Will Help?</StyledH1>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              quidem rerum animi corrupti. Culpa vitae excepturi deserunt et
              laboriosam qui repudiandae eius esse voluptate, cumque odio
              recusandae laudantium vel provident!
            </Description>
          </DetailsContainer>
        </div>
        <div id="requirements">
          <RequirementBox>
            <div>
              <StyledH3>Volunteers Needed</StyledH3>
              <span>volunteered / totalNeededVolunteers</span>
              <hr />
            </div>
            <div>
              <StyledH3>Location</StyledH3>
              <span>Somewhere over the rainbow</span>
            </div>
          </RequirementBox>
        </div>
      </StyledDiv>
    );
  }
}

export default ProjectDetails;
