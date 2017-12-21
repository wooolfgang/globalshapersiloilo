import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  grid-area: details;
  flex: 3;
  text-align: center;
  background: ${props => props.theme.grayTwo};
`;

const Name = styled.p`
  margin: 70px 0 0 0;
  font-size: 1.8em;
  font-family: ${props => props.theme.fontTwo};  
`;

const Occupation = styled.p`
  font-size: 1em;
  margin: 5px;
  font-family: ${props => props.theme.fontTwo}; 
`;

const Motto = styled.p`
  font-size: .95em;
  margin: 5px;
  font-style: italic;
  font-family: ${props => props.theme.fontTwo};    
`;

const Info = () => (
  <StyledDiv>
    <Name>Shiba Inu</Name>
    <Occupation>Like A Boss @ My Owners House (duh!)</Occupation>
    <Motto>"The Walking Doge."</Motto>
  </StyledDiv>
);

export default Info;
