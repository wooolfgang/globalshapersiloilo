import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 10px;
  height: 30px;
  width: 300px;
  border: 1px solid lightgray;
  font-size: 1.1em;
  display: block;
  align-self: center;

  :focus {
    outline: 1px solid ${props => props.theme.tertiary};
  }
`;

const Input = props => (
  <StyledInput {...props} />
);

export default Input;
