import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  color: white;
  width: 70px;
  height: 28px;
  font-size: .80em;
  cursor: pointer;
  transition-duration: .2s;
  border-radius: 2px;
  outline: none;
  margin: 2px;
  justify-self: flex-end; 
  align-self: center;
  position: absolute;
  right: 10px;
  background: ${props => props.theme.buttonPrimary};

  :hover {
    background: ${props => props.theme.buttonPrimaryDarker};
  }
`;
const PostButton = ({ value }) => (
  <Button >
    {value}
  </Button>
);

PostButton.propTypes = {
  value: string.isRequired,
};

export default PostButton;
