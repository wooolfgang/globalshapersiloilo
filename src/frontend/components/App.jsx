import React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import Header from './Header';
import HeroContainer from './HeroContainer';
import MainContainer from './MainContainer';
import SubContainer from './SubContainer';
import Footer from './Footer';

const StyledApp = styled.div`
`;

@observer @inject('rootStore')
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { rootStore } = this.props;
    return (
      <StyledApp>
        <Header />
        <HeroContainer />
        <MainContainer />
        <SubContainer />
        <Footer />
        {
          rootStore.uiStore.signupModalViewed ? 
          <SignupContainer /> : undefined
        }
      </StyledApp>
    );
  }
}

export default App;