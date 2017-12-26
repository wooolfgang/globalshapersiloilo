import React from 'react';
import styled from 'styled-components';

const StyledClose = styled.button`
  background: palevioletred;
  padding: 5px 8px;
  font-size: 17px;
  border: none;
  cursor: pointer;
  color: white;
  margin: 5px;
  font-family: ${props => props.theme.fontOne};

  :focus {
    outline: none;
  }

  @media screen and (min-width: 700px) {
    width: 100px;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const Close = ({ children, onClick }) => (
  <StyledClose onClick={onClick}> {children} </StyledClose>
);

export default Close;
