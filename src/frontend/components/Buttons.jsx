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
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

  :focus {
    outline: none;
  }

  :hover {
    color: white;
    background: none;
  }
`;

const StyledSecondary = styled.button`
  color: #00529B;
  background: none;
  border: 2px solid #00529B;
  border-radius: 5px;
  font-size: 22px;
  padding: 5px;
  cursor: pointer;
  transition: .3s;
  font-family: 'Roboto', 'sans-serif';

  :focus {
    outline: none;
  }
`;

const StyledClose = styled.button`
  background: palevioletred;
  padding: 5px 8px;
  font-size: 17px;
  border: none;
  cursor: pointer;
  width: 100px;
  color: white;
  font-family: 'Roboto', 'sans-serif';
  margin: 5px;

  :focus {
    outline: none;
  }
`;

export const Primary = ({ children, onClick }) => (
  <StyledPrimary onClick={onClick}> {children} </StyledPrimary>
);

export const Secondary = ({ children, onClick }) => (
  <StyledSecondary onClick={onClick}> {children} </StyledSecondary>
);

export const Close = ({ children, onClick }) => (
  <StyledClose onClick={onClick}> {children} </StyledClose>
);
