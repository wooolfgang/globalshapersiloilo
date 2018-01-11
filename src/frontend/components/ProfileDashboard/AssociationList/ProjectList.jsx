import React from 'react';
import styled from 'styled-components';
import { arrayOf, object } from 'prop-types';
import ListIcon from '../../Icons/ListIcon';
import Project from './UserProject';

const Heading = styled.div`
  width: 50%:
  height: auto;
  padding: 8px;
  margin: 2px 0px 0px 8px;
  font-size: .95em;
  font-family: ${props => props.theme.fontTwo};
  display: flex;
  align-items: center;

  span {
    margin-left: 5px;
  }

  svg {
    height: 16px;
    width: 16px;
  }
`;

const Projects = styled.div`
  padding: 8px;
  font-size: .85em;
`;

const ProjectList = ({ projects }) => (
  <div >
    <Heading>
      <ListIcon />
      <span> {projects.length > 1 ? 'Projects' : 'Project'} </span>
    </Heading>
    <Projects>
      {
        projects.map(project => <Project project={project} key={project._id} />)
      }
    </Projects>
  </div>
);

ProjectList.propTypes = {
  projects: arrayOf(object),
};

ProjectList.defaultProps = {
  projects: [],
};

export default ProjectList;
