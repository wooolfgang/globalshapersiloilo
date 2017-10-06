import React from 'react';
import { observer, inject } from 'mobx-react';
import HeroContainer from './HeroContainer';
import Content from './Content';
import SubContainer from './SubContainer';
import Dashboard from '../Dashboard';

const HomePage = ({ store: { userStore } }) => (
  <div>
    {
      userStore.authenticated ?
        <Dashboard />
        :
        <div>
          <HeroContainer />
          <Content />
          <SubContainer />
        </div>
    }
  </div>
);

export default inject('store')(observer(HomePage));
