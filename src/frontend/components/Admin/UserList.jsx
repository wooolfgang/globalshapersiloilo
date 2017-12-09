import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

const Container = styled.div`
  margin-left: 11vw;
  width: 100vw;
  overflow-y: scroll;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  
  tr:nth-child(even){background-color: ${props => props.theme.primary}}
`;

const TableDiv = styled.td`
  text-align: left;
  padding: 2%;
`;

const UserList = ({ userStore }) => (
  <Container>
    <Table>
      <tr>
        <TableDiv>Name</TableDiv>
        <TableDiv>Contact #</TableDiv>
        <TableDiv>Email</TableDiv>
        <TableDiv>Address</TableDiv>
        <TableDiv>Birthday</TableDiv>
        <TableDiv>Occupation</TableDiv>
        <TableDiv>Affiliation</TableDiv>
      </tr>
      {
        userStore.users.map(user => (<tr>
          <TableDiv>{user.username}</TableDiv>
          <TableDiv>{user.phoneNumber}</TableDiv>
          <TableDiv>{user.email}</TableDiv>
          <TableDiv>{user.address}</TableDiv>
          <TableDiv>{user.birthDay}</TableDiv>
          <TableDiv>{user.occupation}</TableDiv>
          <TableDiv>{user.affiliation}</TableDiv>
        </tr>))
      }
    </Table>
  </Container>

);

export default inject('userStore')(observer(UserList));
