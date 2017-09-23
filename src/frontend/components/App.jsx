import React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import Header from './Header';
import SignupContainer from './SignupContainer';
import Footer from './Footer';
import HomePage from './HomePage';

const StyledApp = styled.div`
`;

@observer @inject('rootStore')
class App extends React.Component {
  render() {
    const { rootStore } = this.props;
    return (
      <StyledApp>
        <Header />
        <HomePage />
        <Footer />
        <SignupContainer />
      </StyledApp>
    );
  }
}

export default App;