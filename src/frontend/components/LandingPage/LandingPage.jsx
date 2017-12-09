import React from 'react';
import { observer, inject } from 'mobx-react';
import HeroContainer from './HeroContainer';
import Content from './Content';
import FindProjects from './FindProjects';

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

export default inject('userStore')(observer(LandingPage));
