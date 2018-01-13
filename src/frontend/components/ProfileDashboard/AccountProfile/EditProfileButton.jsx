import React from 'react';
import styled from 'styled-components';
import Link from '../../Link';

const StyledLink = styled(Link) `
  background: none;
  width: inherit;
  font-size: .70em;
  margin: 0;
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

  :hover {
    text-decoration: none;  
  }
`;

const EditProfileButton = () => (
  <StyledLink to="/profile/update">
    Edit Profile
  </StyledLink>
);

export default EditProfileButton;
