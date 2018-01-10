import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { instanceOf } from 'prop-types';
import SendIcon from '../Icons/SendIcon';
import ChatStore from '../../stores/ChatStore';

const ChatInputContainer = styled.div`
  grid-area: 'chatInput';
  display: flex;
  padding: 30px;
  border-top: 1px solid lightgray;
  align-items: center;
`;

const ChatInput = styled.input`
  width: 80%;
  height: 5px;
  border-radius: 2px;
  font-size: 1em;
  padding: 15px;
  border: none;
  border: 1px solid lightgray;
  color: #333;

  :focus {
    outline: 1px solid ${props => props.theme.tertiary};
  }
`;

const SendButton = styled.button`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: none;
  height: 35px;
  border: none;
  font-size: 1.1em;
  font-weight: normal;
  outline: none;
  cursor: pointer;
  color: ${props => props.theme.secondary};
  font-family: ${props => props.theme.fontTwo};

  :hover {
    border: 1px solid ${props => props.theme.secondary};
  }

  svg {
    width: 25px;
    height: auto;
  }
`;

const MessageInput = ({ chatStore: { handleMessageInputChange, messageInput, sendMessage } }) => (
  <ChatInputContainer>
    <ChatInput
      placeholder="Press &quot;Enter&quot; to send"
      onChange={e => handleMessageInputChange(e.target.value)}
      onKeyPress={e => e.key === 'Enter' && sendMessage()}
      value={messageInput}
    />
    <SendButton onClick={sendMessage}> Send <SendIcon /> </SendButton>
  </ChatInputContainer>
);

MessageInput.propTypes = {
  chatStore: instanceOf(ChatStore).isRequired,
};

export default inject('chatStore')(observer(MessageInput));
