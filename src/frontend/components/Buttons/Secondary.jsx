import React from 'react';
import styled from 'styled-components';

const StyledSecondary = styled.a`
  color: #00529B;
  background: none;
  border: 2px solid #00529B;
  font-size: 20px;
  padding: 5px;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 2px 2px ${props => props.theme.tertiary};
  font-family: ${props => props.theme.fontOne};

  :focus {
    outline: none;
  }
`;

const Secondary = ({ children, href }) => (
  <StyledSecondary href={href}> {children} </StyledSecondary>
);

export default Secondary;
