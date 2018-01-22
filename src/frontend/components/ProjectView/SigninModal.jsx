import React from 'react';
import { inject, observer } from 'mobx-react';
import { instanceOf } from 'prop-types';
import Modal from '../Modal';
import SigninForm from '../Signin/SigninForm';
import ViewStore from '../../stores/ViewStore';

const SigninModal = ({ viewStore: { closeSigninModal, signInModalViewed } }) => (
  <Modal showed={signInModalViewed} height="auto" width="auto" closeModal={closeSigninModal} >
    <SigninForm margin="0px 0px 0px 0px" />
  </Modal>
);

SigninModal.propTypes = {
  viewStore: instanceOf(ViewStore).isRequired,
};

export default inject('viewStore')(observer(SigninModal));
