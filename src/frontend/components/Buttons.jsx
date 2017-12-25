import React from 'react';
import styled from 'styled-components';
import { facebookApp, googleApp } from '../assets/theme/images';

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

const StyledSecondary = styled.a`
  color: #00529B;
  background: none;
  border: 2px solid #00529B;
  font-size: 20px;
  padding: 5px;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 2px 2px ${props => props.theme.tertiary};
  font-family: ${props => props.theme.fontOne};

  :focus {
    outline: none;
  }
`;

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

const Social = styled.a`
  padding: 12px 28px;
  border-radius: 3px;
  font-size: 14px;
  color: white;
  margin: 0px 5px 15px 5px;
  cursor: pointer;
  position: relative;
  text-decoration: none !important;
  font-family: ${props => props.theme.fontTwo};
  
  ${props => props.onPath === '/signin' && 'width: 300px; display: flex;'};  
  ${props => props.onPath === '/signup' && 'width: 200px; display: inline-block;'};  

  img {
    width: 16px;
    height: 16px; 
    position: absolute;
    left: 20px;
  }

  span {
    margin: auto;
  }
`;

const StyledGoogle = styled(Social) `
  background-color: #DB3236;
`;

const StyledFacebook = styled(Social) `
  background-color: #3B579D;
`;

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

export const Primary = ({ children, onClick }) => (
  <StyledPrimary onClick={onClick}> {children} </StyledPrimary>
);

export const Secondary = ({ children, href }) => (
  <StyledSecondary href={href}> {children} </StyledSecondary>
);

export const Close = ({ children, onClick }) => (
  <StyledClose onClick={onClick}> {children} </StyledClose>
);

export const Google = ({ children, href, onPath }) => (
  <StyledGoogle href={href} onPath={onPath}><img src={googleApp} alt="google" /><span>{children}</span> </StyledGoogle>
);

export const Facebook = ({ children, href, onPath }) => (
  <StyledFacebook href={href} onPath={onPath} ><img src={facebookApp} alt="facebook" /><span> {children} </span> </StyledFacebook>
);

export const Submit = ({ children, onClick, width }) => (
  <StyledSubmit onClick={onClick} width={width}> {children} </StyledSubmit>
);

export const VolunteerButton = ({ children }) => (
  <StyledVolunteer> {children} </StyledVolunteer>
);

