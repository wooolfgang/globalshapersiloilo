import React from 'react';
import styled from 'styled-components';
import { instanceOf } from 'prop-types';
import { ProgressBar } from 'reprogressbars';
import { observer, inject } from 'mobx-react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import LandingPage from './LandingPage/LandingPage';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';
import ProjectFind from './ProjectFind/ProjectFind';
import ProjectOrganize from './ProjectOrganize/ProjectOrganize';
import Admin from './Admin/Admin';
import ViewStore from '../stores/ViewStore';

const Grid = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 
  "header header header"
  "section section section"
  "footer footer footer"    
`;

const Section = styled.div`
  grid-area: section;
`;

class App extends React.Component {
  static propTypes = {
    viewStore: instanceOf(ViewStore).isRequired,
  };

  componentDidMount() {
    const { userStore } = this.props;
    userStore.authenticate();
  }

  render() {
    const { viewStore } = this.props;
    return (
      <Router>
        <Grid>
          <ProgressBar isLoading={viewStore.isLoading} color={'#07d'} height="1.5px" />
          <Header />
          <Section>
            <Route exact path="/" component={LandingPage} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/find" component={ProjectFind} />
            <Route path="/organize" component={ProjectOrganize} />
            <Route path="/admin" component={Admin} />
          </Section>
          <Footer />
        </Grid>
      </Router>
    );
  }
}

export default inject('viewStore', 'userStore')(observer(App));
