import React from 'react';
import styled from 'styled-components';
import { shape, string } from 'prop-types';
import Link from '../../Link';
import ChatIcon from '../../Icons/ChatIcon';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ProjectLink = styled(Link) `
  margin: 0px !important;
  margin-left: 20px !important;
`;

const ChatLink = styled(Link) `
  margin: 0px !important;

  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
    color: gray;
  }
`;

const UserProject = ({ project }) => (
  <StyledDiv>
    <ProjectLink to={`/project/${project._id}`}> {project.name} </ProjectLink>
    <ChatLink to={`/chat/${project._id}`}> <ChatIcon /> </ChatLink>
  </StyledDiv >
);

UserProject.propTypes = {
  project: shape({
    _id: string.isRequired,
    name: string.isRequired,
  }).isRequired,
};

export default UserProject;
