import React from 'react';
import { inject, observer } from 'mobx-react';
import loginwithFB from '../../assets/loginfb.png';
import loginwithGoogle from '../../assets/logingoogle.png';
import Input from '../Input';
import { StyledDiv, StyledLink } from './styles';

const SignupComponent = ({ store: { userStore } }) => (
  <StyledDiv>
    <div id="heading">
      <h1> Building a movement </h1>
      <p> We believe in a world where young people are a central to solution building, policy-making and lasting change. </p>
    </div>
    <div id="form-container">
      <div>
        <form action="POST">
          <div id="loginvia">
            <img src={loginwithFB} alt="fb" />
            <img src={loginwithGoogle} alt="google" />
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
  </StyledDiv>
);

export default inject('store')(observer(SignupComponent));
