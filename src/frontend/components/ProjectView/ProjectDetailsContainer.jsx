import React from 'react';
import styled from 'styled-components';
import ProjectDetail from './ProjectDetail';
import ProjectRequirements from './ProjectRequirements';

const StyledDiv = styled.div`
  grid-area: projectDetails;
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

const ProjectDetailsContainer = () => (
  <StyledDiv>
    <div id="details">
      <ProjectDetail
        header="What challenge this project aims to address?"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        ad aperiam neque fugit, maiores corporis voluptate! Ullam in,
        aspernatur impedit facilis adipisci eum porro consequuntur
        consequatur earum, quisquam quibusdam placeat tenetur sed,
        necessitatibus est nostrum officiis neque enim mollitia fugiat!"
      />
      <ProjectDetail
        header="Why volunteer for this project?"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        ad aperiam neque fugit, maiores corporis voluptate! Ullam in,
      aspernatur impedit facilis adipisci eum porro consequuntur
      consequatur earum, quisquam quibusdam placeat tenetur sed,
      necessitatibus est nostrum officiis neque enim mollitia fugiat!"
      />
      <ProjectDetail
        header="Task Description"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        ad aperiam neque fugit, maiores corporis voluptate! Ullam in,
      aspernatur impedit facilis adipisci eum porro consequuntur
      consequatur earum, quisquam quibusdam placeat tenetur sed,
      necessitatibus est nostrum officiis neque enim mollitia fugiat!"
      />
    </div>
    <div id="requirements">
      <ProjectRequirements />
    </div>
  </StyledDiv >
);

export default ProjectDetailsContainer;
