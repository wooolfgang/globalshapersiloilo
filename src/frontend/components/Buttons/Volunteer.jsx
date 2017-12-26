import React from 'react';
import styled from 'styled-components';

const StyledVolunteer = styled.button`
  width: 130px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 5px 22px;
  font-size: 18.5px;
  color: white;
  transition: all 200ms;
  border-radius: 0px;
  box-shadow: 3px 3px ${props => props.theme.tertiary};
  background: ${props => props.theme.secondaryLighter}; 
  font-family: ${props => props.theme.fontThree};
  
  :hover {
    background: ${props => props.theme.secondary};
  }
`;

const VolunteerButton = ({ children, onClick }) => (
  <StyledVolunteer onClick={onClick}> {children} </StyledVolunteer>
);

export default VolunteerButton;
