import React from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';
import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  background: none;
  color: white;
  font-size: 1.1em;
  cursor: pointer;
  transition: all 200ms;
  border-radius: 3px;
  padding: 7px 20px;
  outline: none;
  margin: 0 7px;
  font-family: ${props => props.theme.fontTwo};
`;

const Update = Button.extend`
  background: ${props => props.theme.buttonPrimary};
  transition: all 200ms;

  :hover {
    background: ${props => props.theme.buttonPrimaryDarker};
  }
`;

const Cancel = Button.extend`
  border: 1px solid ${props => props.theme.buttonPrimary};
  color: ${props => props.theme.buttonPrimary};
`;

const ButtonsContainer = ({ updateProfile }) => (
  <StyledDiv>
    <Link to="/"><Cancel>Cancel</Cancel></Link>
    <Update onClick={updateProfile}>Update</Update>
  </StyledDiv>
);

ButtonsContainer.propTypes = {
  updateProfile: func.isRequired,
};

export default ButtonsContainer;
