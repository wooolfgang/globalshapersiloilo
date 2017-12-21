import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: lightgray;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: url('https://i.pinimg.com/736x/d9/56/88/d9568870abe1741fad8998060b5df0c4--square-faces-squares.jpg');
  background-size: cover;
`;

const ProfileImage = () => (
  <StyledDiv />
);

export default ProfileImage;
