import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { Provider } from 'mobx-react';
import * as mobx from 'mobx';
import App from './components/App';

mobx.useStrict(true);

ReactDOM.render(<App />, document.getElementById('mount-point'));
