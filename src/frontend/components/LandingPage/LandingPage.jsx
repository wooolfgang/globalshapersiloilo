import React from 'react';
import { observer, inject } from 'mobx-react';
import HeroContainer from './HeroContainer';
import Content from './Content';
import FindProjects from './FindProjects';
import Dashboard from '../Dashboard/Dashboard';

const LandingPage = ({ store: { userStore } }) => {
  if (userStore.isAuthenticating) {
    return null;
  }

  return (
    <div>
      {
        userStore.authenticated ?
          <Dashboard />
          :
          <div>
            <HeroContainer />
            <Content />
            <FindProjects />
          </div>
      }
    </div>
  );
};

export default inject('store')(observer(LandingPage));
