import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
padding: 15px;
border-radius: 999px;
border: 1px solid ${props => props.theme.secondary};

#user, #logout {
  padding: 0px;
  margin: 0px;
}

#user {
  font-size: 17px;
}

#logout {
  font-size: 11px;
  text-decoration: underline;
  cursor: pointer;
  border: none;
  background: none;
}
`;

const User = ({ username, handleLogout }) => (
  <StyledDiv>
    <p id="user">  {username} </p>
    <button id="logout" onClick={handleLogout}> Logout </button>
  </StyledDiv>
);

export default User;
