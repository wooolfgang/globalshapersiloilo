import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 60px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  background: white;
  height: 80%;
  border: none;
  width: 450px;
  font-size: 18px;
  padding: 0px 20px;
  box-shadow: ${props => props.theme.cardOne};
  transition: all 0.1s cubic-bezier(.25,.8,.25,1);
  outline: none;

  :focus, :hover {
    box-shadow: 0 4px 4px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
  }, 
`;

const SearchButton = styled.input`
  border: none;
  height: 75%;
  margin-left: 10px;
  padding: 0px 20px;
  cursor: pointer;
  color: white;
  font-size: 16px;
  font-family: 'Open Sans', serif;  
  outline: none;
  transition: all 0.3s;
  background: ${props => props.theme.buttonPrimary};
  box-shadow: ${props => props.theme.cardOne};

  :hover {
    background: ${props => props.theme.buttonPrimaryDarker};
  }
`;

const Search = () => (
  <StyledDiv>
    <SearchInput placeholder="Community work... " />
    <SearchButton type="submit" value="Search" />
  </StyledDiv>
);

export default Search;
