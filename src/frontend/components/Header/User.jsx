import React from 'react';
import { inject, observer } from 'mobx-react';
import { instanceOf } from 'prop-types';
import styled from 'styled-components';
import Dropdown from '../Dropdown';
import UserStore from '../../stores/UserStore';
import ViewStore from '../../stores/ViewStore';

const StyledDiv = styled.div`
  margin: auto;
  position: relative;
`;

const Username = styled.span`
  border-radius: 3px;
  padding: 8px 10px;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 1px 1px ${props => props.theme.tertiary};
  border: 1px solid ${props => props.theme.secondary};
  font-size: 16px;
  font-family: ${props => props.theme.fontTwo};

  :hover {
    box-shadow: 1px 1px 1px 1px ${props => props.theme.secondary};
  }
`;

const Button = styled.button`
  border: none;
  background: none;
  margin: auto;
  width: 100%;
  font-size: 14px;
  font-family: ${props => props.theme.fontOne};
  outline: none;
  cursor: pointer;

  :hover {
    background: lightgray;
  }
`;

const User = ({ viewStore, userStore }) => (
  <StyledDiv>
    <Username onClick={viewStore.toggleDropdownView}> {userStore.currentUser.fullName} </Username>
    {
      viewStore.userDropdownViewed &&
      <Dropdown
        viewed={viewStore.userDropdownViewed}
        setView={viewStore.setUserDropdownView}
        toggleView={viewStore.toggleDropdownView}
      >
        <Button onClick={userStore.logout}> Logout </Button>
      </Dropdown>
    }
  </StyledDiv >
);

User.propTypes = {
  viewStore: instanceOf(ViewStore).isRequired,
  userStore: instanceOf(UserStore).isRequired,
};

export default inject('viewStore', 'userStore')(observer(User));
