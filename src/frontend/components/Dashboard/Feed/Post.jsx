import React from 'react';
import styled from 'styled-components';
import { string, shape } from 'prop-types';
import SeeMoreIcon from './SeeMoreIcon';

const StyledDiv = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  box-sizing: border-box;
  font-size: .9em;
  background: white;  
  font-family: ${props => props.theme.fontTwo};
  box-shadow: ${props => props.theme.cardOne};
`;

const User = styled.div`  
  border-bottom: 1px solid lightgray;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 10px;
  position: relative;
`;

const UserImage = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  border: 1px solid lightgray;
  border-radius: 50%;
  margin-right: 10px;
  background: url(${props => props.imgUrl && props.imgUrl});
  background-size: cover;
`;

const SeeMoreContainer = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
`;

const Text = styled.div`
  padding: 15px 15px; 
  line-height: 1.75;
`;

const Post = ({ post, user }) => (
  <StyledDiv>
    <User>
      <UserImage imgUrl={user.imgUrl} />
      {user.fullName}
      <SeeMoreContainer>  <SeeMoreIcon /> </SeeMoreContainer>
    </User>
    <Text>
      {post}
    </Text>
  </StyledDiv>
);

Post.propTypes = {
  post: string.isRequired,
  user: shape({
    imgUrl: string,
    fullName: string,
  }).isRequired,
};

export default Post;
