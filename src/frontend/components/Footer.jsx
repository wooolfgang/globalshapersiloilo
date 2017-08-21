import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 125px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const StyledNav = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;

  li {
    padding: 5px;
  }
`

const StyledContainer = styled.div`
  width: 400px;
  
  input {
    width: 200px;
    background: none;
    border: none;
    border-bottom: 2px solid #333;
    font-size: 17px;
    color: #333;
    font-family: 'Roboto', 'sans-serif';
  }

  input:focus {
    outline: none;
  }

  button {
    border: none;
    background: none;
    font-size: 17px;
    font-family: 'Roboto', 'sans-serif';
    color: #333;
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }
`

const Footer = () => (
  <StyledDiv>
    <StyledNav>
      <li> Home </li>
      <li> Volunteer </li>
      <li> About Us </li>
    </StyledNav>
    <StyledContainer>
        <input type="text"/>
        <button> Sign Up </button>
    </StyledContainer>
  </StyledDiv>
);

export default Footer;