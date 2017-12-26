import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { instanceOf } from 'prop-types';
import { Link } from 'react-router-dom';
import { Google, Facebook } from '../Buttons/Social';
import Submit from '../Buttons/Submit';
import SigninInput from './SigninInput';
import ErrorMsg from '../Form/ErrorMsg';
import FormsStore from '../../stores/FormsStore';
import UserStore from '../../stores/UserStore';

const StyledLink = styled(Link) `
  color: ${props => props.theme.secondary}
`;

const StyledDiv = styled.div`
  display: flex;
  text-align: center;
  background: white;
  background: #FAFAFA;
  grid-area: form-container;

  @media screen and (min-width: 769px) {
    height: 400px;
    margin: 50px;
    padding: 30px;
  };

  @media screen and (max-width: 768px) {
    padding: 40px 10px;
    
    form {
      margin: auto;
    }
  }

  @media screen and (max-width: 412px) {
    padding: 50px 5px;
  }
`;

const SocialLogin = styled.div`
  font-size: 15px;
`;

const Line = styled.p`
  border-top: 1px solid #aaa;
`;

const Fields = styled.div`
  align-items: center;
  flex-direction: column;
  margin-top: 35px;
  width: 100%;
  display: flex;
`;

const SubmitContainer = styled.div`
  grid-area: btn-container;
`;

const SigninForm = ({ formsStore, userStore }) => (
  <StyledDiv>
    <form action="POST">
      <SocialLogin>
        <Google onPath="/signin" href="auth/google"> Signin with Google </Google>
        <Facebook onPath="/signin" href="auth/facebook"> Signin with Facebook </Facebook>
      </SocialLogin>
      <Line />
      <ErrorMsg message={formsStore.signinErrorMsg} />
      <Fields>
        <SigninInput label="Username" type="text" id="username" required />
        <SigninInput label="Password" type="password" id="password" required />
      </Fields>
      <SubmitContainer>
        <Submit onClick={(e) => { e.preventDefault(); userStore.login(); }} width="290px">
          SIGN IN
        </Submit>
      </SubmitContainer>
      <h4> Don't have an account? <StyledLink to="/signup">Register now. </StyledLink></h4>
    </form>
  </StyledDiv>
);

SigninForm.propTypes = {
  formsStore: instanceOf(FormsStore).isRequired,
  userStore: instanceOf(UserStore).isRequired,
};

export default inject('formsStore', 'userStore')(observer(SigninForm));
