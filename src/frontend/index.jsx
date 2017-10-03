import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { HashRouter as Router } from 'react-router-dom';
import * as mobx from 'mobx';
import App from './components/App';
import RootStore from './stores/RootStore';
import globalStyle from './theme/global';
import client from './client';

mobx.useStrict(true);
const store = new RootStore(client);

globalStyle();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('mount-point'),
);

if (module.hot) {
  module.hot.accept();
}
