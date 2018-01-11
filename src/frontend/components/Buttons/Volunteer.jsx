import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledVolunteer = styled(Link) `
  width: 130px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 5px 0px;
  font-size: 18.5px;
  color: white;
  transition: all 200ms;
  border-radius: 0px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 3px 3px ${props => props.theme.tertiary};
  background: ${props => (props.volunteered ? 'none' : props.theme.secondaryLighter)};
  font-family: ${props => (props.volunteered ? props.theme.fontTwo : props.theme.fontThree)};
  color: ${props => (props.volunteered ? props.theme.tertiary : 'white')};
  border: ${props => props.volunteered && `1px solid ${props.theme.tertiary}`};
    
  :hover {
  background: ${props => !props.volunteered && props.theme.secondary};
}
`;

const VolunteerButton = ({ children, onClick, to, volunteered }) => (
  <StyledVolunteer
    onClick={onClick}
    to={to}
    volunteered={volunteered}
  >
    {volunteered ? 'Volunteered' : 'Volunteer'}
  </StyledVolunteer>
);

export default VolunteerButton;
