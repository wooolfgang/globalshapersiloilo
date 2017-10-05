import React from 'react';
import { inject, observer } from 'mobx-react';
import signupwithFB from '../../assets/fb.png';
import signupwithGoogle from '../../assets/google.png';
import Input from '../Input';
import Success from './Success';
import Container from './Container';
import Error from '../ErrorMsg';

const SignupComponent = ({ store: { userStore } }) => (
  <Container>
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
                <p id="title">Account Details</p>
                <Input type="text" label="Username" required id="username" signUp>
                  <Error message={userStore.signupError.username} />
                </Input>
                <Input type="password" label="Password" required id="password" signUp>
                  <Error message={userStore.signupError.password} />
                </Input>
                <Input type="email" label="Email" required id="email" signUp>
                  <Error message={userStore.signupError.email} />
                </Input>
              </div>
              <div id="personal">
                <p id="title">Personal Details</p>
                <Input type="text" label="Full Name" required id="fullName" signUp>
                  <Error message={userStore.signupError.fullName} />
                </Input>
                <Input type="date" required id="birthDay" signUp >
                  <Error message={userStore.signupError.birthDay} />
                </Input>
                <Input type="text" label="Address" required id="address" signUp >
                  <Error message={userStore.signupError.address} />
                </Input>
                <Input type="text" label="Phone Number" required id="phoneNumber" signUp >
                  <Error message={userStore.signupError.phoneNumber} />
                </Input>
                <Input type="text" label="Occupation" required id="occupation" signUp >
                  <Error message={userStore.signupError.occupation} />
                </Input>
                <Input type="text" label="Company/School/Organization" required id="affiliation" signUp >
                  <Error message={userStore.signupError.affiliation} />
                </Input>
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
  </Container>
);

export default inject('store')(observer(SignupComponent));
