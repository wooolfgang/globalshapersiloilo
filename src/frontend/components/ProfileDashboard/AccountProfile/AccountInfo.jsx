import React from 'react';
import styled from 'styled-components';
import { shape, string } from 'prop-types';

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;

  p {
    font-size: 1em;
    margin: 12px;
    font-family: ${props => props.theme.fontTwo};
  }
`;

const AccountInfo = ({ currentUser }) => (
  <StyledDiv>
    <p> {currentUser.username} </p>
    <p> {currentUser.fullName} </p>
    <p> {currentUser.email} </p>
  </StyledDiv>
);

AccountInfo.propTypes = {
  currentUser: shape({
    username: string,
    fullName: string,
    currentUser: string,
  }).isRequired,
};

export default AccountInfo;
