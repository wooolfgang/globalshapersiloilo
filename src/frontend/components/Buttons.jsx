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
  color: crimson;
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  transition: .3s;
  font-family: 'Roboto', 'sans-serif';
  float: right;

  :focus {
    outline: none;
  }
`

const Primary = ({ children, onClick }) => (
  <StyledPrimary onClick={onClick}> {children} </StyledPrimary>
);

const Secondary = ({ children, onClick }) => (
  <StyledSecondary onClick={onClick}> {children} </StyledSecondary>
);

<<<<<<< HEAD
export { Primary, Secondary };
=======
const Close = ({ children, onClick }) => (
  <StyledClose onClick={onClick}> {children} </StyledClose>
);

export { Primary, Secondary, Close };
>>>>>>> c06596ead2ac4307b8e1cccdeb3d6637982a99b8
