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
  padding: 4px;
  border-radius: 3px;
  border: 1px solid ${props => props.theme.tertiary};
  color: ${props => props.theme.tertiary};
  font: ${props => props.theme.fontOne};
`;

const EditProfileButton = () => (
  <StyledDiv >
    Edit Profile
  </StyledDiv>
);

export default EditProfileButton;
