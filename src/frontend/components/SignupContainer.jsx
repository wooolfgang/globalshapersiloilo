import React from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import { Close } from './Buttons';

const StyledDiv = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 130vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;

  form {
    padding: 10px;
    color: #375D81;
    font-size: 20px;
    text-align: center;
    transform: translate(0, 0);
  }

  input {
    height: 25px;
    font-size: 15px;
    margin-bottom: 30px;
    border: 1px solid #375D81;
    text-align: center;
    border-radius: 5px;
  }

  h2 {
    text-align: center;
  }

  input[type="submit"] {
    background-color: #375D81;
    width: 100px;
    color: white;
  }

  ${props => !props.viewed && 'display: none;'}
`;

const Modal = styled.div`
  width: 650px;
  height: 500px;
  background-color: #E1E6FA;
  margin-top: -30vh;
  display: flex;
  border-radius: 10px;
`


const LeftFloat = styled.div`
  height: 96%;
  background-color: #C4D7ED;
  flex: 2;
  border-radius: 10px;
  margin: 10px;
`

const MiddleFloat = styled.div`
  margin: auto;
  padding: 10px;
`

const RightFloat = styled.div`
  height: 96%;
  background-color: #C4D7ED;
  flex: 1;
  border-radius: 10px;
  margin: 10px;

  img {
    height: 26px;
    width: 175px;
  }

  a {
    position: fixed;
    top: 47%;
    padding: 10px;
  }
`

const SignupContainer = ({ viewed, rootStore }) => (
  <StyledDiv viewed={rootStore.uiStore.signupModalViewed} >
    <Modal>
      <LeftFloat>
        <h2>Signup here</h2>
        <form action="POST">
          Name:
          <div>
            <input type="text" name="name" placeholder="*Name" required />
          </div>
          Email:
          <div>
            <input type="email" name="email" placeholder="*Email" required />
          </div>
          Birthdate:
          <div>
            <input type="date" name="birthdate" placeholder="*Birthdate" />
          </div>
          Occupation:
          <div>
            <input type="text" name="occupation" placeholder="*Occupation" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </LeftFloat>
      <MiddleFloat>
        <h3>or</h3>
      </MiddleFloat>
      <RightFloat>
        <Close onClick={rootStore.uiStore.onSignupModalView}>x</Close>
        <a href="#"><img src="../src/frontend/assets/loginfb.png" alt="..." /> </a>
      </RightFloat>
    </Modal>
  </StyledDiv>
);

export default inject('rootStore')(observer(SignupContainer));