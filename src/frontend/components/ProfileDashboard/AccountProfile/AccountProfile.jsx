import React from 'react';
import styled from 'styled-components';
import { instanceOf } from 'prop-types';
import { inject } from 'mobx-react';
import HeartIcon from '../../Icons/HeartIcon';
import UserStore from '../../../stores/UserStore';
import ProfileImage from '../../ProfileImage';
import EditProfileButton from './EditProfileButton';
import AccountInfo from './AccountInfo';

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

const Middle = styled.div`
  height: 45%;
  padding-top: 30px;
  text-align: center;
  box-sizing: border-box;
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
    margin: 3px;
  }

  svg {
    height: 18px;
    width: 18px;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -110%);
`;

const AccountProfile = ({ userStore: { currentUser } }) => (
  <StyledDiv>
    <ImageContainer>
      <ProfileImage
        imgUrl={!currentUser.provider && currentUser.imgUrl}
        width="125px"
        height="125px"
      />
    </ImageContainer>
    <Upper >
      <EditProfileButton />
    </Upper>
    <Middle >
      <AccountInfo currentUser={currentUser} />
    </Middle>
    <Bottom >
      <p> Join a project! </p>
      <HeartIcon />
    </Bottom>
  </StyledDiv>
);

AccountProfile.propTypes = {
  userStore: instanceOf(UserStore).isRequired,
};

export default inject('userStore')(AccountProfile);
