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
  margin: 10px auto;
`;

const SenderDetails = styled.div`
  display: flex;
  align-items: center;
`;

const Sender = styled.p`
  font-size: .95em;
  margin-left: 8px;
  font-family: ${props => props.theme.fontTwo};
`;

const ChatMessage = styled.div`
  margin-left: 10px;
  line-height: 22px;
  font-size: .90em;
  -webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`;

const Message = ({ message }) => (
  <ChatContainer>
    <SenderDetails>
      <ProfileImage width="40px" height="40px" imgUrl={message.user.imgUrl} />
      <Sender>{message.user.fullName}</Sender>
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
