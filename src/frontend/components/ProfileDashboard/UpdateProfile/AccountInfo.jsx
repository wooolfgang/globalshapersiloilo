import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import Label from './Label';
import Header from './Header';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  margin-bottom: 20px;
`;

const AccountInfo = () => (
  <StyledDiv>
    <Header> Account </Header>
    <Label>Username</Label>
    <Input placeholder="juandelacruz" />
    <Label>Password</Label>
    <Input value="password" type="password" />
  </StyledDiv>
);

export default AccountInfo;
