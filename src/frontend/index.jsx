import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { Provider } from 'mobx-react';
import * as mobx from 'mobx';
import App from './components/App';
import RootStore from './stores/RootStore';

mobx.useStrict(true);

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto|Raleway|Playfair+Display');

  body {
    margin: 0px;
    padding: 0px;
    height: 100vh;
    width: 100vw;
    font-family: 'Roboto', 'sans-serif';
    color: #333;
    overflow-x: hidden;
  }
`

const rootStore = new RootStore();

ReactDOM.render(
  <Provider rootStore={rootStore}>
    <App />
  </Provider>,
  document.getElementById('mount-point')
);
