import React from 'react';
import styled from 'styled-components';
import CreatePost from './CreatePost/CreatePost';
import AccountProfile from './AccountProfile/AccountProfile';
import AssociationList from './AssociationList/AssociationList';
import Feed from './Feed/Feed';

const StyledDiv = styled.div`
  height: 100%;
  width: 100%;
  background: #FAFAFA;
  overflow: auto; 
  margin: auto;
  display: grid;
  grid-template-columns: .85fr 1fr .85fr;
  grid-template-area: 
  "left-section main-section right-section";
`;

const MainSection = styled.div`
  grid-area: "main-section"
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LeftSection = styled.div`
  grid-area: "left-section";
  display: flex;
  justify-content: flex-end;  
`;

const RightSection = styled.div`
  grid-area: "right-section";
  display: flex;
  justify-content: flex-start;
`;

const ProfileDashboard = () => (
  <StyledDiv >
    <LeftSection>
      <AccountProfile />
    </LeftSection>
    <MainSection>
      <CreatePost />
      <Feed />
    </MainSection>
    <RightSection>
      <AssociationList />
    </RightSection>
  </StyledDiv>
);

export default ProfileDashboard;
