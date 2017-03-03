// Needed for redux-saga es6 generator support
// import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import 'sanitize.css/sanitize.css';

import App from './containers/App';

import configureStore from './store';
const initialState = {};
const store = configureStore(initialState);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
};

// const render = () => {
//   ReactDOM.render(
//     <div >
//       <App />
//     </div>,
//     document.getElementById('app')
//   );
// };
