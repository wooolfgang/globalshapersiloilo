import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const StyledDiv = styled.div`
  background: lightgray;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: url(${props => props.imgUrl && props.imgUrl});
  background-size: cover;
`;

const ProfileImage = ({ imgUrl }) => (
  <StyledDiv imgUrl={imgUrl} />
);

ProfileImage.propTypes = {
  imgUrl: string.isRequired,
};

export default ProfileImage;
