import React from 'react';
import styled from 'styled-components';
import Preview from './Preview';

const StyledDiv = styled.div`
  width: 400px;
  height: 400px;
  border: 1px solid lightgray;
`;

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Raleway', sans-serif;
  height: 110px;
  padding: 20px;

  #project-title {
    font-family: 'Open Sans', serif;
    font-weight: 800;
    text-decoration: underline;
    margin-bottom: 10px;
  }
`;

const VolunteerButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  font-family: 'Playfair Display', sans-serif;
  padding: 5px 22px;
  font-size: 18.5px;
  color: white;
  transition: all 0.3s;
  display: block;
  margin: auto;
  box-shadow: 3px 3px ${props => props.theme.tertiary};
  background: ${props => props.theme.secondary};

  :hover {
    background: white;
    color: ${props => props.theme.secondary}; 
  }
`;


const Project = ({ project }) => (
  <StyledDiv>
    <Preview imgUrl={project.imgUrl} proposal={project.proposal} />
    <ProjectDetails>
      <span id="project-title">{project.projectName} </span>
      <span>By: {project.organizationName} </span>
      <span>Contact Person: {project.contactPerson.fullName} </span>
      <span>Contact #: {project.contactPerson.phoneNumber} </span>
      <span>Slots left: {project.getRemainingSlots()} </span>
    </ProjectDetails>
    <VolunteerButton> Volunteer </VolunteerButton>
  </StyledDiv >
);

export default Project;
