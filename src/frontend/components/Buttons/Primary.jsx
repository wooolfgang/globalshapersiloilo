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
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  font-family: ${props => props.theme.fontOne};
  
  :focus {
    outline: none;
  }

  :hover {
    color: white;
    background: none;
  }
`;

const Primary = ({ children, onClick }) => (
  <StyledPrimary onClick={onClick}> {children} </StyledPrimary>
);

export default Primary;

