import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import Link from '../Link';
import OrganizerIcon from '../Icons/OrganizerIcon';
import ProfileImage from '../ProfileImage';

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

const ImageContainer = styled.div`
  margin: 40px 0 10px 0;
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

class ChatSideBar extends React.Component {
  state = {
    project: undefined,
  }

  async componentDidMount() {
    const { projectId, projectStore } = this.props;
    const project = await projectStore.fetchProject(projectId);
    (() => this.setState({ project }))();
  }

  render() {
    const project = this.state.project;
    return (
      <Sidebar>
        <ProjectDetails>
          <ImageContainer>
            <ProfileImage imgUrl={project && project.imgUrl} width="150px" height="150px" />
          </ImageContainer>
          <ProjectHeader> {project && project.name} </ProjectHeader>
          <DetailsContainer>
            <small>
              {
                project && project.projectChallenge
              }
            </small>
          </DetailsContainer>
        </ProjectDetails>
        <OrganizerList>
          <Header>Organizers <OrganizerIcon /> </Header>
          {
            project && project.organizers.map(user =>
              (
                <Link to={`/profile/${user._id}`}> {user.fullName}
                </Link>
              ),
            )
          }
        </OrganizerList>
      </Sidebar>
    );
  }
}

export default inject('projectStore')(observer(ChatSideBar));
