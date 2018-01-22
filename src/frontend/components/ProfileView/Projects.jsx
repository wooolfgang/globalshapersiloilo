import React from 'react';
import styled from 'styled-components';
import { arrayOf, object } from 'prop-types';
import Project from './Project';

const HeaderText = styled.h1`
  margin-top: 20px;
  font-size: 1.2em;
  font-weight: normal;
  text-align: center;
`;

const Projects = ({ projects }) => (
  <div>
    <HeaderText>Completed Projects</HeaderText>
    {
      (projects && projects.length !== 0) ?
        projects.map(project => <Project key={project._id} project={project} />) :
        <Project project={{ name: 'No projects', projectChallenge: "User hasn't joined any projects yet..." }} />
    }
  </div>
);

Projects.propTypes = {
  projects: arrayOf(object).isRequired,
};

export default Projects;
