import React from 'react';
import styled from 'styled-components';
import { shape, string } from 'prop-types';

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

const Username = styled.p`
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

const Info = ({ user }) => (
  <StyledDiv>
    <Name>{user.fullName}</Name>
    <Username>{user.username}</Username>
    <Motto>{user.motto ? user.motto : '"I forgot to enter my motto"'}</Motto>
  </StyledDiv>
);

Info.propTypes = {
  user: shape({
    fullName: string,
    username: string,
    motto: string,
  }).isRequired,
};

export default Info;
