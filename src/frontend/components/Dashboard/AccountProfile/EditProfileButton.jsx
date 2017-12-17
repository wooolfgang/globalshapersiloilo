import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.button`
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

const EditProfileButton = () => (
  <StyledDiv >
    Edit Profile
  </StyledDiv>
);

export default EditProfileButton;
