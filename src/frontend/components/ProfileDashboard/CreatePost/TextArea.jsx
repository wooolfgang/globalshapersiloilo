import React from 'react';
import { instanceOf } from 'prop-types';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import UserStore from '../../../stores/UserStore';
import PostsStore from '../../../stores/PostsStore';

const TextContainer = styled.textarea`
  width: 100%;
  height: 50px;
  border: 1px solid lightgray;
  background: white;
  box-sizing: border-box;
  color: #333;
  padding: 8px;
  overflow: auto;
  font-size: 1em;
  resize: none;
  font-family: ${props => props.theme.fontTwo};

  :focus {
    outline: 1px solid ${props => props.theme.tertiary};
  }
`;

class TextArea extends React.Component {
  static propTypes = {
    userStore: instanceOf(UserStore).isRequired,
    postsStore: instanceOf(PostsStore).isRequired,
  }

  handleChange = (e) => {
    this.props.postsStore.handlePostInput(e.target.value);
  }

  render() {
    const { userStore: { currentUser }, postsStore: { postInputMessage } } = this.props;
    return (
      <TextContainer
        placeholder={`Share your thoughts, ${currentUser.fullName}!`}
        onChange={this.handleChange}
        value={postInputMessage}
      />
    );
  }
}

export default inject('userStore', 'postsStore')(observer(TextArea));
