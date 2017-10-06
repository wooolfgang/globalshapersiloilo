import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Google, Facebook } from '../Buttons';
import Input from '../Input';
import Container from './Container';
import colors from '../../theme/constants';

const StyledLink = styled(Link) `
  color: ${colors.secondary}
 `;

const SignupComponent = ({ store: { userStore } }) => (
  <Container>
    <div id="heading">
      <h1> Building a movement </h1>
      <p> We believe in a world where young people are a central to solution building, policy-making and lasting change. </p>
    </div>
    <div id="form-container">
      <div>
        <form action="POST">
          <div id="loginvia">
            <Google onPath="/signin"> Signin with Google </Google>
            <Facebook onPath="/signin"> Signin with Facebook </Facebook>
          </div>
          <p id="line" />
          <div id="field-container">
            <Input label="Username" type="text" id="username" required signIn />
            <Input label="Password" type="password" id="password" required signIn />
          </div>
          <div id="btn-container">
            <button onClick={(e) => { e.preventDefault(); userStore.login(); }} id="loginbtn"> SIGN IN </button>
          </div>
          <h4> Don't have an account? <StyledLink to="/signup">Register now. </StyledLink></h4>
        </form>
      </div>
    </div>
  </Container>
);

export default inject('store')(observer(SignupComponent));