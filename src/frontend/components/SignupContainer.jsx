import React from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import { Close } from './Buttons';

const StyledDiv = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;

  ${props => !props.viewed && 'display: none;'}
`;

const Modal = styled.div`
  width: 675px;
  height: 450px;
  background-color: white;
`

const ButtonsContainer = styled.div`
  position: absolute;
  bottom: 65px;
  height: 100px;
  width: 675px;
  background-color: #C4D7ED;
`

const SignupContainer = ({ viewed, rootStore }) => (
  <StyledDiv viewed={rootStore.uiStore.signupModalViewed} >
    <Modal>
      <Close onClick={rootStore.uiStore.onSignupModalView}> Close </Close>
      <ButtonsContainer> </ButtonsContainer>
    </Modal>
  </StyledDiv>
);

export default inject('rootStore')(observer(SignupContainer));