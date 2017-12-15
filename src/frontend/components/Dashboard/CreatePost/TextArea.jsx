import React from 'react';
import { instanceOf } from 'prop-types';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import UserStore from '../../../stores/UserStore';

const TextContainer = styled.textarea`
  width: 100%;
  height: 50px;
  border: 1px solid lightgray;
  background: white;
  box-sizing: border-box;
  color: gray;
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
  }

  state = {
    text: '',
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  render() {
    const { userStore: { currentUser } } = this.props;

    return (
      <TextContainer
        placeholder={`What's on your mind, ${currentUser.fullName}?`}
        onChange={this.handleChange}
        value={this.state.text}
      />
    );
  }
}

export default inject('userStore')(observer(TextArea));
