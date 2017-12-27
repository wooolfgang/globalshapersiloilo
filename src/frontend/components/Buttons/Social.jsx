import React from 'react';
import styled from 'styled-components';
import { facebookApp, googleApp } from '../../assets/theme/images';

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

export const Google = ({ children, href, onPath }) => (
  <StyledGoogle href={href} onPath={onPath}><img src={googleApp} alt="google" /><span>{children}</span> </StyledGoogle>
);

export const Facebook = ({ children, href, onPath }) => (
  <StyledFacebook href={href} onPath={onPath} ><img src={facebookApp} alt="facebook" /><span> {children} </span> </StyledFacebook>
);
