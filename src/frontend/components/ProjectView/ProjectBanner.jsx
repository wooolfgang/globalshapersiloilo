import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { string, instanceOf } from 'prop-types';
import Link from '../Link';
import VolunteerButton from '../Buttons/Volunteer';
import ConfirmationModal from './ConfirmationModal';
import ViewStore from '../../stores/ViewStore';
import ChatLink from '../ChatLink';
import UserStore from '../../stores/UserStore';

const StyledDiv = styled.div`
  grid-area: project;
  display: grid;
  width: 100vw;
  background: #3a7bd5; 
  background: -webkit-linear-gradient(to right, #3a6073, #3a7bd5);
  background: linear-gradient(to right, #3a6073, #3a7bd5);

  @media screen and (min-width: 700px) {
    grid-template-areas: 'titleContainer organizerContainer';
    grid-auto-columns: 2fr 2fr;
    height: 250px;
  }

  @media screen and (max-width: 700px) {
    grid-template-areas: 'titleContainer' 'organizerContainer';
    grid-auto-rows: 150px 250px;
    height: 400px;
  }
`;

const TitleContainer = styled.div`
  text-align: center;
  grid-area: titleContainer;
`;

const StyledH1 = styled.h1`
  margin: 0;
  font-size: 2em;
  font-weight: normal;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  color: white;
`;

const OrganizerContainer = styled.div`
  grid-area: organizerContainer;
  text-align: center;
  height: 70%;
  padding: 10px;
  box-sizing: border-box;
  width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.grayOne};
  box-shadow: ${props => props.theme.cardThree};

  span {
    margin: 3px 0 10px 0;
    color: gray;
    font-size: .90em;
  }
`;

const OrgHeader = styled.div`
  margin: 0;
  font-size: 1.5em;
  font-weight: normal;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;

  a {
    width: auto;
    margin: 0px !important;
  }
`;

const ProjectBanner = (props) => {
  const { organizationName, projectName, createdAt, projectId } = props;
  const { toggleVolunteerModal } = props.viewStore;
  const { currentUser, isAuthenticating } = props.userStore;
  return (
    <StyledDiv>
      <TitleContainer>
        <StyledH1>{projectName}</StyledH1>
      </TitleContainer>
      <OrganizerContainer>
        <OrgHeader>
          <Link to="/organization"> {organizationName} </Link>
        </OrgHeader>
        <span>Posted {createdAt}</span>
        {
          !isAuthenticating &&
          <VolunteerButton
            onClick={toggleVolunteerModal}
            to={`/project/${projectId}`}
            volunteered={currentUser && currentUser.projectIds.includes(projectId)}
          />
        }
        {
          currentUser && currentUser.projectIds.includes(projectId) &&
          <ChatLink projectId={projectId} margin="8px 0 0 0" />
        }
      </OrganizerContainer>
      <ConfirmationModal projectId={projectId} />
    </StyledDiv>
  );
};

ProjectBanner.propTypes = {
  organizationName: string.isRequired,
  projectName: string.isRequired,
  createdAt: string.isRequired,
  projectId: string.isRequired,
  viewStore: instanceOf(ViewStore).isRequired,
  userStore: instanceOf(UserStore).isRequired,
};

export default inject('viewStore', 'userStore')(observer(ProjectBanner));
