import React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { Primary } from '../Buttons';
import heroImg from '../../assets/hero-iloilo.jpg';

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
    font-family: 'Raleway', 'sans-serif';
    font-size: 35px;
    margin: 0px;
    margin-bottom: 15px;
    padding: 8px 20px;
    color: white;
  }
`;

const HeroContainer = ({ rootStore }) => (
  <StyledDiv>
    <h1> Find a cause that's <strong><u>worth</u></strong> joining for.</h1>
    <Primary onClick={rootStore.uiStore.onSignupModalView}> Volunteer Now </Primary>
  </StyledDiv>
);

export default inject('rootStore')(observer(HeroContainer));
