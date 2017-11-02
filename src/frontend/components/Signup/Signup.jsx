import React from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import Input from '../Input';
import Success from './Success';
import Container from './Container';
import Error from '../ErrorMsg';
import { Google, Facebook } from '../Buttons';

const SignupComponent = ({ store: { userStore } }) => (
  <div>
    {
      !userStore.authenticated ?
        <Container>
          {
            !userStore.signupSuccess ?
              <div>
                <h2> Become a pioneer of the Iloilo Shaper Community. </h2>
                <div id="container">
                  <div>
                    <Google onPath={'/signup'}> Continue with Google </Google>
                    <Facebook onPath={'/signup'} > Continue with Facebook </Facebook>
                  </div>
                  <hr />
                  <form action="POST">
                    <div id="account">
                      <p id="title">Account Details</p>
                      <Input type="text" label="Username" required id="username" signUp>
                        <Error message={userStore.signupErrorMsg.username} />
                      </Input>
                      <Input type="password" label="Password" required id="password" signUp>
                        <Error message={userStore.signupErrorMsg.password} />
                      </Input>
                      <Input type="email" label="Email" required id="email" signUp>
                        <Error message={userStore.signupErrorMsg.email} />
                      </Input>
                    </div>
                    <div id="personal">
                      <p id="title">Personal Details</p>
                      <Input type="text" label="Full Name" required id="fullName" signUp>
                        <Error message={userStore.signupErrorMsg.fullName} />
                      </Input>
                      <Input type="date" required id="birthDay" signUp >
                        <Error message={userStore.signupErrorMsg.birthDay} />
                      </Input>
                      <Input type="text" label="Address" required id="address" signUp >
                        <Error message={userStore.signupErrorMsg.address} />
                      </Input>
                      <Input type="text" label="Phone Number" required id="phoneNumber" signUp >
                        <Error message={userStore.signupErrorMsg.phoneNumber} />
                      </Input>
                      <Input type="text" label="Occupation" required id="occupation" signUp >
                        <Error message={userStore.signupErrorMsg.occupation} />
                      </Input>
                      <Input type="text" label="Company/School/Organization" required id="affiliation" signUp >
                        <Error message={userStore.signupErrorMsg.affiliation} />
                      </Input>
                    </div>
                    <div id="signup">
                      <button id="signupbtn" onClick={(e) => { e.preventDefault(); userStore.signup(); }}>
                        SIGN UP
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              : <Success />
          }
        </Container> : <Redirect to="/" />
    }
  </div>
);

export default inject('store')(observer(SignupComponent));
