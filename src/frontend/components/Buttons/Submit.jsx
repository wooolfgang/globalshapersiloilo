import React from 'react';
import styled from 'styled-components';

const StyledSubmit = styled.button`
  border: none;
  border-radius: 0px;
  color: white;
  height: 40px;
  width: 200px;
  font-size: 15px;
  cursor: pointer;
  transition-duration: .2s;
  width: ${props => props.width && props.width};
  font-family: ${props => props.theme.fontTwo};
  background-color: ${props => props.theme.buttonPrimary};

  :hover {
    background-color: ${props => props.theme.buttonPrimaryDarker};
  }
`;

const Submit = ({ children, onClick, width }) => (
  <StyledSubmit onClick={onClick} width={width}> {children} </StyledSubmit>
);

export default Submit;
