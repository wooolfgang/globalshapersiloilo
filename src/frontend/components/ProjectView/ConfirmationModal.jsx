import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { instanceOf } from 'prop-types';
import Modal from '../Modal';
import ViewStore from '../../stores/ViewStore';

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

const ConfirmationModal = ({ viewStore: { volunteerModalViewed, closeVolunteerModal } }) => (
  <Modal showed={volunteerModalViewed} closeModal={closeVolunteerModal} >
    <Header> Are you sure to volunteer? </Header>
    <Container>
      <Button primary> Yes </Button>
      <Button> No </Button>
    </Container>
  </Modal>
);

ConfirmationModal.propTypes = {
  viewStore: instanceOf(ViewStore).isRequired,
};

export default inject('viewStore')(observer(ConfirmationModal));
