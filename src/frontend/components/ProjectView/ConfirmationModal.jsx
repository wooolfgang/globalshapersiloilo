import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { instanceOf, string } from 'prop-types';
import Modal from '../Modal';
import ViewStore from '../../stores/ViewStore';
import ProjectStore from '../../stores/ProjectStore';
import UserStore from '../../stores/UserStore';

const Header = styled.h3`
  font-weight: normal;
  text-align: center;
`;

const Container = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Button = styled.button`
  font-size: 1em;
  border-radius: 3px;
  cursor: pointer;
  color: #333;
  transition-duration: 200ms;
  width: 60px;
  color: ${props => (props.primary ? 'white' : props.theme.accent)};
  background: ${props => (props.primary ? props.theme.accent : 'none')};
  border: 1px solid ${props => props.theme.accent};
`;

const ConfirmationModal = ({ viewStore, projectStore, projectId, userStore }) => (
  <Modal showed={viewStore.volunteerModalViewed} closeModal={viewStore.closeVolunteerModal} >
    <Header> Are you sure to volunteer? </Header>
    <Container>
      <Button
        onClick={() => projectStore.addVolunteer(projectId, userStore.currentUser._id)}
        primary
      >
        Yes
      </Button>
      <Button onClick={viewStore.closeVolunteerModal}> No </Button>
    </Container>
  </Modal>
);

ConfirmationModal.propTypes = {
  viewStore: instanceOf(ViewStore).isRequired,
  projectStore: instanceOf(ProjectStore).isRequired,
  userStore: instanceOf(UserStore).isRequired,
  projectId: string.isRequired,
};

export default inject('viewStore', 'projectStore', 'userStore')(observer(ConfirmationModal));
