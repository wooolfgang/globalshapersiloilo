import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import Label from './Label';
import Header from './Header';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  margin-bottom: 30px;
`;

const PictureContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: gray;
  background-size: cover;
  margin: 10px auto;
`;

const ChangeProfilePicture = styled.button`
  font-size: 0.9em;
  cursor: pointer;
  display: block;
  text-align: center;
  margin: auto;
`;

const PersonalInfo = () => (
  <StyledDiv>
    <Header> Personal </Header>
    <PictureContainer />
    <ChangeProfilePicture>Upload</ChangeProfilePicture>
    <Label>Email</Label>
    <Input placeholder="juan_dela_cruz@gmail.com" />
    <Label>
      Phone Number: <small>(+63)</small>
    </Label>
    <Input type="tel" placeholder="9876543210" />
  </StyledDiv>
);

export default PersonalInfo;
