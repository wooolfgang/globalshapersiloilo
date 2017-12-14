import React from 'react';
import { PropTypes } from 'mobx-react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard/ProjectCard';

const StyledDiv = styled.div`
  margin: auto;
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  padding: 20px 7%;
  justify-content: space-around;
`;

const ProjectList = ({ projects }) => (
  <StyledDiv>
    {
      projects.map(project => <ProjectCard key={project._id} project={project} />)
    }
  </StyledDiv>
);

ProjectList.propTypes = {
  projects: PropTypes.observableArray,
};

ProjectList.defaultProps = {
  projects: [],
};

export default ProjectList;
