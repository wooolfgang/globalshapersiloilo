import React from 'react';
import styled from 'styled-components';
import { instanceOf } from 'prop-types';
import { inject } from 'mobx-react';
import AwardIcon from './AwardIcon';
import UserStore from '../../../stores/UserStore';

const StyledDiv = styled.div`
  width: 300px;
  height: 325px; 
  margin: 20px 40px;
  border: 1px solid rgba(0,0,0,.05);
  background-color: #fff;
  position: relative;
`;

const Upper = styled.div`
  height: 35%;
  border-bottom: 1px solid rgba(0,0,0,.05);
  background: ${props => props.theme.grayOne};
`;

const EditProfile = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
  color: ${props => props.theme.tertiary};
  font: ${props => props.theme.fontOne};

  :hover {
    text-decoration: underline;
  }
`;

const Middle = styled.div`
  height: 45%;
  padding-top: 30px;
  text-align: center;
  box-sizing: border-box;

  p {
    font-size: 1em;
    margin: 12px;
    font-family: ${props => props.theme.fontTwo};
  }
`;

const AccountImage = styled.div`
  width: 125px;
  height: 125px;
  background: url(${props => props.imgUrl});
  background-size: cover;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -110%);
`;

const Bottom = styled.div`
  height: 20%;
  border-top: 1px solid rgba(0,0,0,.05);
  text-align: center;
  font-size: .8em;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin: 2px;
  }
`;

const AccountProfile = ({ userStore: { currentUser } }) => (
  <StyledDiv>
    <AccountImage imgUrl={currentUser.imgUrl} />
    <Upper >
      <EditProfile> Edit Profile </EditProfile>
    </Upper>
    <Middle >
      <p> {currentUser.username} </p>
      <p> {currentUser.fullName} </p>
      <p> {currentUser.email} </p>
    </Middle>
    <Bottom >
      <p> Join a project! </p>
      <AwardIcon />
    </Bottom>
  </StyledDiv>
);

AccountProfile.propTypes = {
  userStore: instanceOf(UserStore).isRequired,
};

export default inject('userStore')(AccountProfile);
