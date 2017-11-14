import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { Google, Facebook, Submit } from '../Buttons';
import SigninInput from './SigninInput';
import ErrorMsg from '../Form/ErrorMsg';
import Container from './Container';

const StyledLink = styled(Link) `
  color: ${props => props.theme.secondary}
`;

const SignupComponent = ({ store: { userStore } }) => (
  <div>
    {
      !userStore.authenticated ?
        <Container>
          <div id="heading">
            <p id="title"> Building a movement </p>
            <p> We believe in a world where young people are a central to solution building, policy-making and lasting change. </p>
          </div>
          <div id="form-container">
            <div>
              <form action="POST">
                <div id="loginvia">
                  <Google onPath="/signin" href="auth/google"> Signin with Google </Google>
                  <Facebook onPath="/signin" href="auth/facebook"> Signin with Facebook </Facebook>
                </div>
                <p id="line" />
                <ErrorMsg message={userStore.signinErrorMsg} />
                <div id="field-container">
                  <SigninInput label="Username" type="text" id="username" required />
                  <SigninInput label="Password" type="password" id="password" required />
                </div>
                <div id="btn-container">
                  <Submit onClick={(e) => { e.preventDefault(); userStore.login(); }} width="290px">
                    SIGN IN
                  </Submit>
                </div>
                <h4> Don't have an account? <StyledLink to="/signup">Register now. </StyledLink></h4>
              </form>
            </div>
          </div>
        </Container> : <Redirect to="/" />
    }
  </div>
);

export default inject('store')(observer(SignupComponent));
