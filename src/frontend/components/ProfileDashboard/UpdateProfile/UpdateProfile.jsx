import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { instanceOf } from 'prop-types';
import AccountInfo from './AccountInfo';
import PersonalInfo from './PersonalInfo';
import ButtonsContainer from './ButtonsContainer';
import UserStore from '../../../stores/UserStore';

const StyledDiv = styled.div`
  height: auto;
  display: grid;
  grid-template-areas: 
  '. container .'
  '. . .'
  ;
  grid-template-columns: 1fr 500px 1fr;
  grid-template-rows: 1fr 90px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr 300px 1fr;
  }
`;

const Container = styled.form`
  grid-area: container;
`;

const Line = styled.div`
  border-bottom: 1px solid lightgray;
  width: inherit;
`;

const Success = styled.p`
  text-align: center;
  font-size: 1.2em;
  margin: 0;
  margin-top: 10px;
  opacity: 0;
  transition: all 200ms;
  color: ${props => props.theme.accent};
  font-family: ${props => props.theme.fontTwo};
  opacity: ${props => props.show && 1};
`;

class UpdateProfile extends React.Component {
  static propTypes = {
    userStore: instanceOf(UserStore).isRequired,
  }

  state = {
    user: {
      email: this.props.userStore.currentUser.email,
      phoneNumber: this.props.userStore.currentUser.phoneNumber,
      imgUrl: this.props.userStore.currentUser.imgUrl,
      username: this.props.userStore.currentUser.username,
    },
    success: false,
  }

  onChange = (e) => {
    const user = { ...this.state.user, [e.target.id]: e.target.value };
    this.setState({ user });
  }

  updateProfile = async () => {
    const res = await this.props.userStore.patchUserData(this.state.user);
    this.setState({ success: true });
    this.props.userStore.patchCurrentUser(res);
  }

  render() {
    return (
      <StyledDiv>
        <Container>
          <PersonalInfo
            email={this.state.user.email}
            phoneNumber={this.state.user.phoneNumber}
            imgUrl={this.state.user.imgUrl}
            onChange={this.onChange}
          />
          <Line />
          <AccountInfo
            username={this.state.user.username}
            onChange={this.onChange}
          />
          <ButtonsContainer updateProfile={this.updateProfile} />
          <Success show={this.state.success}> Profile updated &#10003;</Success>
        </Container>
      </StyledDiv >
    );
  }
}

export default inject('userStore')(observer(UpdateProfile));
