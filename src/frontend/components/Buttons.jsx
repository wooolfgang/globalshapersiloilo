import React from 'react';
import styled from 'styled-components';

const StyledPrimary = styled.button`
  color: #375D81;
  background: white;
  border: 2px solid white;
  border-radius: 5px;
  font-size: 22px;
  padding: 8px;
  cursor: pointer;
  transition: .3s;

  :focus {
    outline: none;
  }

  :hover {
    color: white;
    background: none;
  }
`

const Primary = ({ children }) => (
  <StyledPrimary> {children} </StyledPrimary>
);

export { Primary };