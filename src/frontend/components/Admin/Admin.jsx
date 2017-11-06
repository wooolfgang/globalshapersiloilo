import React from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import UserList from './UserList';

const Container = styled.div`
  display: flex;
  background: ${props => props.theme.tertiary};
  color: white;
  height: 100vh;
  padding: 0px 20px;
`;

class Admin extends React.Component {
  async componentDidMount() {
    const { store: { userStore } } = this.props;
    await userStore.fetchUsers();
  }

  render() {
    const { store: { userStore } } = this.props;
    if (userStore.currentUser && userStore.currentUser.role === 'admin') {
      return (
        <Container>
          <UserList />
          <Sidebar />
        </Container>
      );
    }
    return (
      <Redirect to="/" />
    );
  }
}

export default inject('store')(observer(Admin));

