import React from 'react';
import styled from 'styled-components';
import { arrayOf, object } from 'prop-types';
import Link from '../../Link';
import ListIcon from './ListIcon';

const StyledDiv = styled.div`
`;

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

  a {
    margin: 3px !important;
    margin-left: 20px !important;
  }
`;

const ProjectList = ({ projects }) => (
  <StyledDiv >
    <Heading>
      <ListIcon />
      <span> {projects.length > 1 ? 'Projects' : 'Project'} </span>
    </Heading>
    <Projects>
      {
        projects.map(project => <Link key={project._id} to={`/project/${project._id}`}> {project.name} </Link>)
      }
    </Projects>
  </StyledDiv>
);

ProjectList.propTypes = {
  projects: arrayOf(object),
};

ProjectList.defaultProps = {
  projects: [],
};

export default ProjectList;
