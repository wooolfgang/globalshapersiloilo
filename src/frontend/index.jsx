import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import * as mobx from 'mobx';
import App from './components/App';
import RootStore from './stores/RootStore';
import globalStyle from './assets/theme/global';
import styles from './assets/theme';
import client from './client';

mobx.useStrict(true);
const store = new RootStore(client);

globalStyle();

ReactDOM.render(
  <Provider {...store}>
    <ThemeProvider theme={styles}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('mount-point'),
);

if (module.hot) {
  module.hot.accept();
}
