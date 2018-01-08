import React from 'react';
import styled from 'styled-components';
import Link from '../Link';
import OrganizerIcon from '../Icons/OrganizerIcon';

const Sidebar = styled.div`
  grid-area: sidebar;
  display: grid;
  background: ${props => props.theme.grayOne};

  @media screen and (max-width: 700px) {
    grid-template-areas: 'projectDetails organizerDetails';
    grid-template-columns: 80% 20%;
    grid-gap: 20px;
  }

  @media screen and (min-width: 700px) {
    grid-template-areas: 'projectDetails' 'organizerDetails';
  }
`;

const ProjectDetails = styled.div`
  grid-area: 'projectDetails';
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const OrganizerLogo = styled.div`
  height: 150px;
  width: 150px;
  margin: 40px 0 10px 0;
  border-radius: 50%;
  background: gray;
  
  @media screen and (max-width: 700px) {
    height: 80px;
    width: 80px;
    margin: 0 auto;
  }
`;

const ProjectHeader = styled.h2`
  font-weight: normal;
`;

const DetailsContainer = styled.div`
  width: 80%;
`;

const OrganizerList = styled.div`
  grid-area: 'organizerDetails';
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-align: center;
  }
`;

const Header = styled.h3`
  font-weight: normal;
  display: flex;
  align-items: center;

  svg {
      width: 20px;
      height: auto;
      margin-left: 5px;
    }
`;

const ChatSideBar = () => (
  <Sidebar>
    <ProjectDetails>
      <OrganizerLogo />
      <ProjectHeader>Project Name </ProjectHeader>
      <DetailsContainer>
        <small>
          A little Details about the project. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Incidunt, sapiente?
        </small>
      </DetailsContainer>
    </ProjectDetails>
    <OrganizerList>
      <Header>Organizers <OrganizerIcon /> </Header>
      <Link to="profile">Juan dela Cruz</Link>
      <Link to="profile">Pedro Penduko</Link>
    </OrganizerList>
  </Sidebar>
);

export default ChatSideBar;
