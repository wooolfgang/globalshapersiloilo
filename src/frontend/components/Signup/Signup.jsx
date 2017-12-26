import React from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import SignupInput from './SignupInput';
import Success from './Success';
import Container from './Container';
import Error from '../Form/ErrorMsg';
import { Google, Facebook } from '../Buttons/Social';
import Submit from '../Buttons/Submit';

const SignupComponent = ({ userStore, formsStore }) => (
  <div>
    {
      !userStore.authenticated ?
        <Container>
          {
            !formsStore.signupSuccess ?
              <div>
                <h2> Become a pioneer of the Iloilo Shaper Community. </h2>
                <div id="container">
                  <div>
                    <Google onPath={'/signup'} href={'/auth/google'}> Continue with Google </Google>
                    <Facebook onPath={'/signup'} href={'/auth/facebook'}> Continue with Facebook </Facebook>
                  </div>
                  <hr />
                  <form action="POST">
                    <div id="account">
                      <p id="title">Account Details</p>
                      <SignupInput type="text" label="Username" required id="username" signUp>
                        <Error message={formsStore.signupErrorMsg.username} />
                      </SignupInput>
                      <SignupInput type="password" label="Password" required id="password" signUp>
                        <Error message={formsStore.signupErrorMsg.password} />
                      </SignupInput>
                      <SignupInput type="email" label="Email" required id="email" signUp>
                        <Error message={formsStore.signupErrorMsg.email} />
                      </SignupInput>
                    </div>
                    <div id="personal">
                      <p id="title">Personal Details</p>
                      <SignupInput type="text" label="Full Name" required id="fullName" signUp>
                        <Error message={formsStore.signupErrorMsg.fullName} />
                      </SignupInput>
                      <SignupInput type="date" required id="birthDay" signUp >
                        <Error message={formsStore.signupErrorMsg.birthDay} />
                      </SignupInput>
                      <SignupInput type="text" label="Address" required id="address" signUp >
                        <Error message={formsStore.signupErrorMsg.address} />
                      </SignupInput>
                      <SignupInput type="text" label="Phone Number" required id="phoneNumber" signUp >
                        <Error message={formsStore.signupErrorMsg.phoneNumber} />
                      </SignupInput>
                      <SignupInput type="text" label="Occupation" required id="occupation" signUp >
                        <Error message={formsStore.signupErrorMsg.occupation} />
                      </SignupInput>
                      <SignupInput type="text" label="Company/School/Organization" required id="affiliation" signUp >
                        <Error message={formsStore.signupErrorMsg.affiliation} />
                      </SignupInput>
                    </div>
                    <div id="signup">
                      <Submit onClick={(e) => { e.preventDefault(); userStore.signup(); }} width="200px">
                        SIGN UP
                      </Submit>
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

export default inject('userStore', 'formsStore')(observer(SignupComponent));
