import React from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import { Close, Submit } from './Buttons';
import loginWithFacebook from '../assets/loginfb.png';
import media from '../theme/media';

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

const Modal = styled.div`
  width: 800px;
  height: 500px;
  background-color: white;
  margin-top: -30vh;
  display: flex;
  flex-wrap: wrap;

  ${media.tablet`
    height: 600px;
    flex-direction: column;
    padding: 0px 7px;
  `}
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
  min-width: 100px;
  justify-content: center;
  align-items: center;
  display: flex;

  img {
    width: 235px;
    height: auto;
  }
`

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
  min-width: 300px;
    
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
          <div>
            <Close onClick={rootStore.uiStore.onSignupModalView}>Cancel</Close>
            <Submit> Submit </Submit>
          </div>
        </Form>
      </LeftFloat>
      <MiddleFloat>
        <h3>or</h3>
      </MiddleFloat>
      <RightFloat>
        <a href="#"><img src={loginWithFacebook} alt="..." /> </a>
      </RightFloat>
    </Modal>
  </StyledDiv>
);

export default inject('rootStore')(observer(SignupContainer));