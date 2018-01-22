import React from 'react';
import styled from 'styled-components';
import { inject } from 'mobx-react';
import Projects from './Projects';
import ProfileImage from './ProfileImage';
import Info from './Info';

const MainContainer = styled.div`
  height: 320px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Cover = styled.div`
  flex: 2;
  background-size: cover;
  background: #3a7bd5; 
  background: -webkit-linear-gradient(to right, #3a6073, #3a7bd5);
  background: linear-gradient(to right, #3a6073, #3a7bd5);
`;

const SecondaryContainer = styled.div`
  max-width: 520px;
  min-width: 320px;
  margin: auto;
`;

class ProfileView extends React.Component {
  state = {
    user: undefined,
  };

  async componentDidMount() {
    const { userStore, match } = this.props;
    const user = await userStore.fetchUser(match.params.id);
    (() => this.setState({ user }))();
  }

  render() {
    if (!this.state.user) return null;
    const { user } = this.state;
    return (
      <div>
        <MainContainer>
          <Cover />
          <ProfileImage imgUrl={user.imgUrl} />
          <Info user={user} />
        </MainContainer>
        <SecondaryContainer>
          <Projects projects={user.projects} />
        </SecondaryContainer>
      </div>
    );
  }
}

export default inject('userStore')(ProfileView);
