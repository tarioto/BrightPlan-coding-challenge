import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import 'sanitize.css/sanitize.css';
import App from './containers/App/index';

import configureStore from './store';
const store = configureStore();


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
);
