import React from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import { instanceOf } from 'prop-types';
import styled from 'styled-components';
import SigninForm from './SigninForm';
import Slogan from './Slogan';
import UserStore from '../../stores/UserStore';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  background: #3a7bd5; 
  background: -webkit-linear-gradient(to right, #3a6073, #3a7bd5);
  background: linear-gradient(to right, #3a6073, #3a7bd5);

  @media screen and (min-width: 769px) {
    height: 85vh;
    grid-template-areas: "slogan . form-container";
    grid-auto-columns: auto 1fr auto;
  }

  @media screen and (max-width: 768px) {
    grid-template-areas: "slogan" "form-container";
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
  }
`;

const SigninComponent = ({ userStore }) => (
  <div>
    {
      !userStore.authenticated ?
        <Container>
          <Slogan />
          <SigninForm margin="50px" />
        </Container> : <Redirect to="/" />
    }
  </div>
);

SigninComponent.propTypes = {
  userStore: instanceOf(UserStore).isRequired,
};

export default inject('userStore')(observer(SigninComponent));
