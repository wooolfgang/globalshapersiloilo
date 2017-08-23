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
`

const StyledSubmit = styled.button`
  background: DarkOrange;
  padding: 5px 8px;
  font-size: 17px;
  border: none;
  cursor: pointer;
  width: 100px;
  color: white;
  font-family: 'Roboto', 'sans-serif';
  margin: 5px;
`

const Primary = ({ children, onClick }) => (
  <StyledPrimary onClick={onClick}> {children} </StyledPrimary>
);

const Secondary = ({ children, onClick }) => (
  <StyledSecondary onClick={onClick}> {children} </StyledSecondary>
);

const Close = ({ children, onClick }) => (
  <StyledClose onClick={onClick}> {children} </StyledClose>
);

const Submit = ({ children, onClick }) => (
  <StyledSubmit onClick={onClick}> {children} </StyledSubmit>
);

export { Primary, Secondary, Close, Submit };
