import React from 'react';
import { shape, string, func } from 'prop-types';
import styled from 'styled-components';
import Preview from './Preview';

const StyledDiv = styled.div`
  min-width: 400px;
  min-height: 400px;
  border: 1px solid lightgray;
  flex: 1;
  margin: 8px 5px;
  position: relative;
`;

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  font-family: ${props => props.theme.fontTwo};
  position: absolute;
  top: 50%;
  left: 0%;

  #project-title {
    font-weight: 800;
    text-decoration: underline;
    margin-bottom: 10px;
    font-family: ${props => props.theme.fontOne};
  }
`;

const VolunteerButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 130px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 5px 22px;
  font-size: 18.5px;
  color: white;
  transition: all 200ms;
  border-radius: 0px;
  box-shadow: 3px 3px ${props => props.theme.tertiary};
  background: ${props => props.theme.secondary};
  font-family: ${props => props.theme.fontThree};

  :hover {
    background: ${props => props.theme.secondaryLighter}; 
  }
`;

const ProjectCard = ({ project }) => (
  <StyledDiv>
    <Preview imgUrl={project.imgUrl} taskDescription={project.taskDescription} />
    <ProjectDetails>
      <span id="project-title">{project.name} </span>
      <span>By: {project.organizationName} </span>
      <span>Contact Person: {project.organization.contactPerson} </span>
      <span>Contact #: {project.organization.phoneNumber} </span>
      <span>Slots left: {project.getRemainingSlots()} </span>
    </ProjectDetails>
    <VolunteerButton> Volunteer </VolunteerButton>
  </StyledDiv >
);

ProjectCard.propTypes = {
  project: shape({
    imgUrl: string.isRequired,
    name: string.isRequired,
    organizationName: string,
    organization: shape({
      contactPerson: string,
      phoneNumber: string,
    }).isRequired,
    getRemainingSlots: func.isRequired,
  }).isRequired,
};

export default ProjectCard;
