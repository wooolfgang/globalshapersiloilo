import React from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import { Close } from './Buttons';
import loginWithFacebook from '../assets/loginfb.png';

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

  ${props => !props.viewed && 'display: none;'}
`;

const LeftFloat = styled.div`
  background: #375D81;
  height: 96%;
  border: 2px solid #375D81;
  flex: 2;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
    
  h2 {
    font-family: 'Playfair Display', 'serif';
  }
`

const Form = styled.form`
  padding: 10px;
  font-size: 20px;
  text-align: center;
  transform: translate(0, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  input[type="submit"] {
    background: DarkOrange;
    padding: 5px 8px;
    font-size: 17px;
    border: none;
    cursor: pointer;
    width: 100px;
    color: white;
    font-family: 'Roboto', 'sans-serif';
  }
`

const FormRow = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 80%;

  input {
    height: 25px;
    font-size: 15px;
    margin-bottom: 30px;
    text-align: center;
    font-family: 'Raleway', 'sans-serif';
    flex: 2;
  }

  span {
    font-size: 15px;
    font-family: 'Raleway', 'sans-serif';
    flex: 1;
  }
`

const Modal = styled.div`
  width: 700px;
  height: 500px;
  background-color: white;
  margin-top: -30vh;
  display: flex;
`

const MiddleFloat = styled.div`
  margin: auto;
  padding: 10px;
`

const RightFloat = styled.div`
  height: 96%;
  border: 2px solid #375D81;  
  flex: 1;
  margin: 10px;
  padding: 0px 7px;

  img {
    width: 200px;
    height: auto;
  }

  a {
    position: fixed;
    top: 47%;
  }
`

const SignupContainer = ({ viewed, rootStore }) => (
  <StyledDiv viewed={rootStore.uiStore.signupModalViewed} >
    <Modal>
      <LeftFloat>
        <h2>Volunteer your skills.</h2>
        <Form action="POST">
          <FormRow>
            <span> Full Name: </span>
            <input type="text" name="name" placeholder="Mark John" required />
          </FormRow>
          <FormRow>
            <span> Email: </span>
            <input type="email" name="email" placeholder="john@email.com" required />
          </FormRow>
          <FormRow>
            <span> Birthday: </span>
            <input type="date" name="birthdate" placeholder="" />
          </FormRow>
          <FormRow>
            <span> Skills: </span>
            <input type="text" name="occupation" placeholder="Software Engineer" />
          </FormRow>
          <input type="submit" value="Submit" />
        </Form>
      </LeftFloat>
      <MiddleFloat>
        <h3>or</h3>
      </MiddleFloat>
      <RightFloat>
        <Close onClick={rootStore.uiStore.onSignupModalView}>x</Close>
        <a href="#"><img src={loginWithFacebook} alt="..." /> </a>
      </RightFloat>
    </Modal>
  </StyledDiv>
);

export default inject('rootStore')(observer(SignupContainer));