import React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import Signin from './Signin';
import Signup from './Signup';

const StyledDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Section = styled.div`
  flex: 1;
`

@inject('store') @observer
class App extends React.Component {
  render() {
    return (
      <StyledDiv>
        <Router>
          <div>
            <Header />
            <Section>
              <Route exact path="/" component={HomePage} />
              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
            </Section>
            <Footer />
          </div>
        </Router>
      </StyledDiv>
    );
  }
}

export default App;