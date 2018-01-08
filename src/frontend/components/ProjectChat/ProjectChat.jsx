import React from 'react';
import styled from 'styled-components';
import ChatSidebar from './ChatSidebar';
import ChatMessages from './ChatMessages';
import MessageInput from './MessageInput';

const StyledDiv = styled.div`
  display: grid;
  height: 100%;

  @media screen and (max-width: 700px) {
    grid-template-areas: 'sidebar' 'mainContainer';
    grid-template-rows: 200px 1fr;
  }

  @media screen and (min-width: 700px) {
    grid-template-areas: 'sidebar mainContainer';
    grid-template-rows: 1fr;
    grid-template-columns: 250px 1fr;
  }
`;

const MainContainer = styled.div`
  grid-area: 'mainContainer';
  display: grid;
  grid-template-areas: 'chatArea' 'chatInput';
  grid-template-rows: calc(100vh - 180px) 90px;
  grid-template-columns: 1fr;
  background: white;
`;

const ProjectChat = () => (
  <StyledDiv>
    <ChatSidebar />
    <MainContainer>
      <ChatMessages />
      <MessageInput />
    </MainContainer>
  </StyledDiv>
);

export default ProjectChat;
