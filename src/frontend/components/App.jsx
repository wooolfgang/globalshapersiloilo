import React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import HomePage from './HomePage/Homepage';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';
import ProjectFind from './ProjectFind/ProjectFind';
import ProjectOrganize from './ProjectOrganize/ProjectOrganize';
import Admin from './Admin';

const StyledDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  flex: 1;
`;

class App extends React.Component {
  componentDidMount() {
    const { store: { userStore } } = this.props;
    userStore.authenticate();
  }

  render() {
    return (
      <Router>
        <StyledDiv>
          <Header />
          <Section>
            <Route exact path="/" component={HomePage} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/find" component={ProjectFind} />
            <Route path="/organize" component={ProjectOrganize} />
            <Route path="/admin" component={Admin} />
          </Section>
          <Footer />
        </StyledDiv>
      </Router>
    );
  }
}

export default inject('store')(observer(App));
