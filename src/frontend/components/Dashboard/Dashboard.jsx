import React from 'react';
import styled from 'styled-components';
import CreatePost from './CreatePost/CreatePost';
import UserProfile from './UserProfile';
import EventList from './EventList';
import Feed from './Feed';

const StyledDiv = styled.div`
  height: 100%;
  width: 100%;
  background: #FAFAFA;
  overflow: auto; 
  margin: auto;
  display: grid;
  grid-template-columns: .85fr 1fr .85fr;
  grid-template-rows: 200px 1fr;
  grid-template-area: ". . ."
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

const Dashboard = () => (
  <StyledDiv >
    <LeftSection>
      <UserProfile />
    </LeftSection>
    <MainSection>
      <CreatePost />
      <Feed />
    </MainSection>
    <RightSection>
      <EventList />
    </RightSection>
  </StyledDiv>
);

export default Dashboard;
