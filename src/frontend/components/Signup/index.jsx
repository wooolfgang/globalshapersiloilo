import React from 'react';
import { inject, observer } from 'mobx-react';
import signupwithFB from '../../assets/fb.png';
import signupwithGoogle from '../../assets/google.png';
import Input from '../Input';
import Success from './Success';
import StyledDiv from './styles';

const SignupComponent = ({ store: { userStore } }) => (
  <StyledDiv>
    {
      !userStore.signupSuccess ?
        <div>
          <h2> Become a pioneer of the Iloilo Shaper Community. </h2>
          <div id="container">
            <div>
              <img id="fblogin" src={signupwithFB} alt="fb" />
              <img id="googlelogin" src={signupwithGoogle} alt="google" />
            </div>
            <hr />
            <form action="POST">
              <div id="account">
                <p>Account Details</p>
                <Input type="text" label="Username" required id="username" signUp />
                <Input type="password" label="Password" required id="password" signUp />
                <Input type="email" label="Email" required id="email" signUp />
              </div>
              <div id="personal">
                <p>Personal Details</p>
                <Input type="text" label="Full Name" required id="fullName" signUp />
                <Input type="date" required id="birthDay" signUp />
                <Input type="text" label="Address" required id="address" signUp />
                <Input type="text" label="Phone Number" required id="phoneNumber" signUp />
                <Input type="text" label="Occupation" required id="occupation" signUp />
                <Input type="text" label="Company/School/Organization" required id="affiliation" signUp />
              </div>
              <div id="signup">
                <button id="signupbtn" onClick={(e) => { e.preventDefault(); userStore.signup(); }}>
                  BECOME A SHAPER
                </button>
              </div>
            </form>
          </div>
        </div>
        : <Success />
    }
  </StyledDiv>
);

export default inject('store')(observer(SignupComponent));
