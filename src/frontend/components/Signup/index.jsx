import React from 'react';
import { inject } from 'mobx-react';
import signupwithFB from '../../assets/fb.png';
import signupwithGoogle from '../../assets/google.png';
import Input from './Input';
import StyledDiv from './styles';

const SignupComponent = ({ store: { userStore } }) => (
  <StyledDiv>
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
          <Input type="text" label="Username" required id="username" />
          <Input type="email" label="Email" required id="email" />
          <Input type="password" label="Password" required id="password" />
        </div>
        <div id="personal">
          <p>Personal Details</p>
          <Input type="text" label="Full Name" required id="name" />
          <Input type="date" required id="date" />
          <Input type="text" label="Address" required id="address" />
          <Input type="text" label="Phone Number" required id="phoneNumber" />
          <Input type="text" label="Occupation" required id="occupation" />
          <Input type="text" label="Company/School/Organization" required id="affiliation" />
        </div>
        <div id="signup">
          <button id="signupbtn" onClick={(e) => { e.preventDefault(); userStore.signup(); }}> BECOME A SHAPER </button>
        </div>
      </form>
    </div>
  </StyledDiv >
);

export default inject('store')(SignupComponent);
