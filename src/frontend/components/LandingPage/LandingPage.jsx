import React from 'react';
import { observer, inject } from 'mobx-react';
import { instanceOf } from 'prop-types';
import HeroContainer from './HeroContainer';
import Content from './Content';
import FindProjects from './FindProjects';
import UserStore from '../../stores/UserStore';

const LandingPage = ({ userStore }) => {
  if (userStore.isAuthenticating) {
    return null;
  }

  return (
    <div>
      <HeroContainer />
      <Content />
      <FindProjects />
    </div>
  );
};

LandingPage.propTypes = {
  userStore: instanceOf(UserStore).isRequired,
};

export default inject('userStore')(observer(LandingPage));
