import React from 'react';
import styled from 'styled-components';
import { shape, string } from 'prop-types';

const ProjectContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 15px 0px;
  border-left: 2px solid gray;
  text-align: left;
  padding: 15px;
  background: ${props => props.theme.grayOne};
`;

const StyledH2 = styled.h2`
  margin: 0;
  font-weight: normal;
  font-size: 1.15em;
  color: ${props => props.theme.tertiary};
`;

const StyledP = styled.p`
  margin: 3px 0;
  font-size: .85em;
`;

const Project = ({ project }) => (
  <ProjectContainer>
    <StyledH2>{project.name}</StyledH2>
    <StyledP>{project.projectChallenge}</StyledP>
  </ProjectContainer>
);

Project.propTypes = {
  project: shape({
    name: string,
    projectChallenge: string,
  }).isRequired,
};

export default Project;
