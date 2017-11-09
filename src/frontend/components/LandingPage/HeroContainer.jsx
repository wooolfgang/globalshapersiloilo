import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { heroImg } from '../../assets/theme/images';

const StyledDiv = styled.div`
  height: 450px;
  background: url(${heroImg}) no-repeat center center fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    color: white;
    font-size: 35px;
    margin: 0px;
    margin-bottom: 15px;
    padding: 8px 20px;
    color: white;
    font-family: ${props => props.theme.fontTwo};
  }
`;

const StyledLink = styled(Link) ` 
  background: white;
  border: 2px solid white;
  border-radius: 5px;
  font-size: 22px;
  padding: 8px;
  cursor: pointer;
  transition: .3s;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  text-decoration: none !important;
  color: ${props => props.theme.secondary}; 
  font-family: ${props => props.theme.fontOne};
  outline: none;
  
  :hover {
    color: white !important;
    background: none;
  }
`;

const HeroContainer = () => (
  <StyledDiv>
    <h1> {console.log(heroImg)} Find a cause that's <strong><u>worth</u></strong> joining for.</h1>
    <StyledLink to="/signup">Volunteer Now </StyledLink>
  </StyledDiv>
);

export default HeroContainer;
