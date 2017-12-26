import React from 'react';
import { shape, string, number } from 'prop-types';
import styled from 'styled-components';
import Preview from './Preview';
import BookmarkIcon from '../../BookmarkIcon';
import VolunteerButton from '../../Buttons/Volunteer';

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

const VolunteerContainer = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translate(-50%, 0);
`;

const BookmarkIconContainer = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  cursor: pointer;
`;

const ProjectCard = ({ project }) => (
  <StyledDiv>
    <Preview imgUrl={project.imgUrl} taskDescription={project.taskDescription} />
    <ProjectDetails>
      <span id="project-title">{project.name} </span>
      <span>By: {project.organizationName} </span>
      <span>Contact Person: {project.organization.contactPerson} </span>
      <span>Contact #: {project.organization.phoneNumber} </span>
      <span>Slots left: {project.getRemainingSlots} </span>
    </ProjectDetails>
    <VolunteerContainer>
      <VolunteerButton to={`/project/${project._id}`}> Volunteer </VolunteerButton>
    </VolunteerContainer>
    <BookmarkIconContainer>
      <BookmarkIcon />
    </BookmarkIconContainer>
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
    getRemainingSlots: number.isRequired,
  }).isRequired,
};

export default ProjectCard;
