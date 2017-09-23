import React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { Route } from 'react-router-dom';
import Header from './Header';
import SignupContainer from './SignupContainer';
import Footer from './Footer';
import HomePage from './HomePage';

@observer @inject('rootStore')
class App extends React.Component {
  render() {
    const { rootStore } = this.props;
    return (
      <div>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Footer />
        <SignupContainer />
      </div>
    );
  }
}

export default App;