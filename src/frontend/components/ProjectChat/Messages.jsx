import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { instanceOf } from 'prop-types';
import Message from './Message';
import ChatStore from '../../stores/ChatStore';

const ChatArea = styled.div`
  grid-area: chatArea;
  overflow-y: scroll;
`;

const Messages = ({ chatStore: { messages } }) => (
  <ChatArea>
    {
      messages && messages.map(message => <Message key={message._id} message={message} />)
    }
  </ChatArea>
);

Messages.propTypes = {
  chatStore: instanceOf(ChatStore).isRequired,
};

export default inject('chatStore')(observer(Messages));
