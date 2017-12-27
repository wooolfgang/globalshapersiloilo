import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: grid;
  height: 100vh;
  grid-template-areas: 'title' 'content';
  grid-auto-rows: 70px 1fr;
`;

const HeaderTitleContainer = styled.div`
  background: lightblue;
  grid-area: title;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  top: 50%;
  position: relative;
  transform: translateY(-50%);
  margin-left: 50px;
`;

const MainContainer = styled.div`
  grid-area: content;
  /* background: lightgray; */
  text-align: center;
  padding-top: 20px;
  border: 1px solid gray;
`;

const Divider = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  border-radius: 5px;
  padding: 10px;
  height: 40px;
  width: 300px;
  border: 1px solid black;
  font-size: 1.3em;
`;

const Label = styled.p`
  margin: 5px 0;
  font-size: 1.3em;
  font-weight: bold;
`;

const Update = styled.button`
  border: none;
  background: lightgreen;
  padding: 10px 40px;
  font-size: 1.2em;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
`;

const Cancel = styled.button`
  border: none;
  background: red;
  padding: 7px 20px;
  font-size: 1.1em;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-weight: bold;
`;

const ChangeProfilePicture = styled.button`
  padding: 1px 15px;
  font-size: 0.9em;
  cursor: pointer;
`;

const ChangePassword = styled.button`
  border: none;
  padding: 0 15px;
  border-radius: 5px;
  margin: 2px;
  cursor: pointer;
  background: gray;
  color: white;
`;

const PictureContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: gray; /* url('sourceOfPicture')*/
  background-size: cover;
  margin: 10px auto;
`;

const Line = styled.div`
  border-bottom: 1px solid gray;
  width: 50%;
  margin: 50px auto;
`;

class UpdateProfile extends React.Component {
  render() {
    return (
      <StyledDiv>
        <HeaderTitleContainer>
          <HeaderTitle>Update Profile</HeaderTitle>
        </HeaderTitleContainer>
        <MainContainer>
          <Divider>
            <PictureContainer />
            <ChangeProfilePicture>Change Profile Picture</ChangeProfilePicture>
          </Divider>
          <Divider>
            <Label>Name</Label>
            <Input placeholder="Juan dela Cruz" />
          </Divider>
          <Divider>
            <Label>Birthday</Label>
            <Input type="date"/>
          </Divider>
          <Divider>
            <Label>Email</Label>
            <Input placeholder="juan_dela_cruz@gmail.com" />
          </Divider>
          <Divider>
            <Label>
              Contact <small>(+63)</small>
            </Label>
            <Input type="tel" placeholder="9876543210" />
          </Divider>
          <Line />
          <Divider>
            <Label>Username</Label>
            <Input placeholder="juandelacruz" />
          </Divider>
          <Divider>
            <Label>Password</Label>
            <Input value="password" disabled type="password" />
            <Divider>
              <ChangePassword>Change Password?</ChangePassword>
            </Divider>
          </Divider>
          <Divider>
            <Update>Update</Update>
          </Divider>
          <Divider>
            <Cancel>Cancel</Cancel>
          </Divider>
        </MainContainer>
      </StyledDiv>
    );
  }
}

export default UpdateProfile;
