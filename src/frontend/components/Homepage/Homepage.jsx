import React from 'react';
import { observer, inject } from 'mobx-react';
import HeroContainer from './HeroContainer';
import Content from './Content';
import FindProjects from './FindProjects';
import Dashboard from '../Dashboard/Dashboard';

const HomePage = ({ store: { userStore } }) => (
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

export default inject('store')(observer(HomePage));
