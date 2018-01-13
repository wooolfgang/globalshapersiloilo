import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { string, func } from 'prop-types'
import Input from './Input';
import Label from './Label';
import Header from './Header';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  margin-bottom: 20px;
`;

const Info = styled.span`
  font-size: .7em;
  text-align: center;
  margin-top: 2px;
`;

const AccountInfo = ({ username, onChange }) => (
  <StyledDiv>
    <Header> Account </Header>
    <Label>Username</Label>
    <Input placeholder="juandelacruz" id="username" value={username} onChange={onChange} />
    <Label>Password</Label>
    <Input type="password" placeholder="New password" />
    <Info> Leave this blank if you don't want to change password </Info>
  </StyledDiv>
);

AccountInfo.propTypes = {
  username: string.isRequired,
  onChange: func.isRequired,
};

export default observer(AccountInfo);
