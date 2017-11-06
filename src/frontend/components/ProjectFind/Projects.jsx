import React from 'react';
import styled from 'styled-components';
import Project from './Project/Project';

const StyledDiv = styled.div`
  margin: auto;
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  padding: 20px 90px;
  justify-content: space-around;
`;

const Projects = ({ projects }) => (
  <StyledDiv>
    {
      projects.map(project => <Project key={project._id} project={project} />)
    }
  </StyledDiv>
);

export default Projects;
