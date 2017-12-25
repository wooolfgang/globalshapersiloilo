import React from 'react';
import styled from 'styled-components';
import { string, number } from 'prop-types';
import ProjectDetail from './ProjectDetail';
import ProjectRequirements from './ProjectRequirements';

const StyledDiv = styled.div`
  grid-area: projectDetails;
  margin: 0;
  display: grid;
  background: #FAFAFA;

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

const ProjectDetailsContainer = ({ projectChallenge, taskDescription, volunteerReason, volunteersNeeded, remainingSlots }) => (
  <StyledDiv>
    <div id="details">
      <ProjectDetail
        header="Task Description"
        content={taskDescription}
      />
      <ProjectDetail
        header="What challenge this project aims to address?"
        content={projectChallenge}
      />
      <ProjectDetail
        header="Why volunteer for this project?"
        content={volunteerReason}
      />
    </div>
    <div id="requirements">
      <ProjectRequirements
        volunteersNeeded={volunteersNeeded}
        remainingSlots={remainingSlots}
      />
    </div>
  </StyledDiv >
);

ProjectDetailsContainer.propTypes = {
  projectChallenge: string.isRequired,
  taskDescription: string.isRequired,
  volunteerReason: string.isRequired,
  volunteersNeeded: number.isRequired,
  remainingSlots: number.isRequired,
};

export default ProjectDetailsContainer;
