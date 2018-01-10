import React from 'react';
import styled from 'styled-components';
import { shape, string } from 'prop-types';
import ProfileImage from '../ProfileImage';

const ChatContainer = styled.div`
  min-height: 50px;
  width: 95%;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  padding: 5px;
  margin: 3px auto;
`;

const SenderDetails = styled.div`
  display: flex;
  align-items: center;
`;

const Sender = styled.p`
  font-size: .80em;
  margin-left: 8px;
  font-family: ${props => props.theme.fontTwo};
`;

const ChatMessage = styled.div`
  margin-left: 10px;
  line-height: 22px;
  font-size: .95em;
  -webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
  background: #fafafa;
  padding: 3px;
  border-radius: 5px;
`;

const Message = ({ message }) => (
  <ChatContainer>
    <SenderDetails>
      <ProfileImage width="30px" height="30px" imgUrl={message.sentBy.imgUrl} />
      <Sender>{message.sentBy.fullName}</Sender>
    </SenderDetails>
    <ChatMessage>{message.value}</ChatMessage>
  </ChatContainer>
);

Message.propTypes = {
  message: shape({
    user: shape({
      imgUrl: string,
      fullName: string,
    }),
    value: string,
    createdAt: string,
  }).isRequired,
};

export default Message;
