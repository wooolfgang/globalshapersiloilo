import React from 'react';
import styled from 'styled-components';

const StyledPrimary = styled.button`
  color: #00529B;
  background: white;
  border: 2px solid white;
  border-radius: 5px;
  font-size: 22px;
  padding: 8px;
  cursor: pointer;
  transition: .3s;
  font-family: 'Roboto', 'sans-serif';

  :focus {
    outline: none;
  }

  :hover {
    color: white;
    background: none;
  }
`

const StyledSecondary = styled.button`
  color: #00529B;
  background: none;
  border: 2px solid #00529B;
  font-size: 22px;
  padding: 0px 8px;
  cursor: pointer;
  transition: .3s;
  font-family: 'Roboto', 'sans-serif';

  :focus {
    outline: none;
  }
`

const Primary = ({ children }) => (
  <StyledPrimary> {children} </StyledPrimary>
);

const Secondary = ({ children }) => (
  <StyledSecondary> {children} </StyledSecondary>
);

export { Primary, Secondary };