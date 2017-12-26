import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledVolunteer = styled(Link) `
  width: 130px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 5px 22px;
  font-size: 18.5px;
  color: white;
  transition: all 200ms;
  border-radius: 0px;
  text-decoration: none;
  box-shadow: 3px 3px ${props => props.theme.tertiary};
  background: ${props => props.theme.secondaryLighter}; 
  font-family: ${props => props.theme.fontThree};
  
  :hover {
    background: ${props => props.theme.secondary};
  }
`;

const VolunteerButton = ({ children, onClick, to }) => (
  <StyledVolunteer onClick={onClick} to={to}> {children} </StyledVolunteer>
);

export default VolunteerButton;
