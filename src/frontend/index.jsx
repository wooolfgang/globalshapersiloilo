import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import * as mobx from 'mobx';
import App from './components/App';
import RootStore from './stores/RootStore';
import globalStyle from './theme/global.js';

mobx.useStrict(true);
const rootStore = new RootStore();

globalStyle();

ReactDOM.render(
  <Provider rootStore={rootStore}>
    <App />
  </Provider>,
  document.getElementById('mount-point'),
);

if (module.hot) {
  module.hot.accept();
}
