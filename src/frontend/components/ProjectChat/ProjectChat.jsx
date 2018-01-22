import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { instanceOf, string, shape } from 'prop-types';
import ChatSidebar from './ChatSidebar';
import Messages from './Messages';
import MessageInput from './MessageInput';
import ChatStore from '../../stores/ChatStore';
import UserStore from '../../stores/UserStore';

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

class ProjectChat extends React.Component {
  static propTypes = {
    chatStore: instanceOf(ChatStore).isRequired,
    match: shape({ params: shape({ id: string }) }).isRequired,
    userStore: instanceOf(UserStore).isRequired,
  }

  async componentDidMount() {
    const { match, chatStore } = this.props;
    const projectId = match.params.id;
    const messages = await chatStore.fetchMessages(projectId);
    chatStore.setMessages(messages);
    chatStore.setCurrentProjectId(match.params.id);
  }

  render() {
    const { match, userStore } = this.props;
    return (
      <StyledDiv>
        <ChatSidebar projectId={match.params.id} />
        {
          (userStore.currentUser && userStore.currentUser.projectIds.includes(match.params.id)) &&
          <MainContainer>
            <Messages />
            <MessageInput />
          </MainContainer>
        }
      </StyledDiv>
    );
  }
}

export default inject('chatStore', 'userStore')(observer(ProjectChat));
