import React from 'react';
import { instanceOf } from 'prop-types';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import PostsStore from '../../../stores/PostsStore';

const Button = styled.button`
  border: none;
  color: white;
  width: 70px;
  height: 28px;
  font-size: .80em;
  cursor: pointer;
  transition-duration: .2s;
  border-radius: 2px;
  outline: none;
  margin: 2px;
  position: absolute;
  right: 10px;
  bottom: 10px;
  background: ${props => props.theme.buttonPrimary};

  :hover {
    background: ${props => props.theme.buttonPrimaryDarker};
  }
`;
const PostButton = ({ postsStore: { createPost, isPosting } }) => (
  <Button onClick={createPost} >
    {isPosting ? 'Posting...' : 'Post'}
  </Button>
);

PostButton.propTypes = {
  postsStore: instanceOf(PostsStore).isRequired,
};

export default inject('postsStore')(observer(PostButton));
