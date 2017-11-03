import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import colors from '../../assets/theme';
import Sidebar from './Sidebar';
import UserList from './UserList';

const Container = styled.div`
  display: flex;
  background: ${colors.tertiary};
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
    return (
      <Container>
        <UserList />
        <Sidebar />
      </Container>
    )
  }
};

export default inject('store')(observer(Admin));

