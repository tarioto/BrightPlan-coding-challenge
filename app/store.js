// import { createStore, applyMiddleware, compose } from 'redux';
// import { fromJS } from 'immutable';
// import createSagaMiddleware from 'redux-saga';
// import createReducer from './reducers';
//
// const sagaMiddleware = createSagaMiddleware();
//
// export default function configureStore(initialState = {}) {
//   const middleware = [
//     sagaMiddleware,
//   ];
//
//   const enhancers = [
//     applyMiddleware(...middleware),
//   ];
//
//   // If Redux DevTools Extension is installed use it, otherwise use Redux compose
//   /* eslint-disable no-underscore-dangle */
//   const composeEnhancers =
//     process.env.NODE_ENV !== 'production' &&
//     typeof window === 'object' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//       window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
//   /* eslint-enable */
//
//   const store = createStore(
//     createReducer(),
//     fromJS(initialState),
//     composeEnhancers(...enhancers)
//   );
//
//   // Extensions
//   // store.runSaga = sagaMiddleware.run;
//   // store.asyncReducers = {}; // Async reducer registry
//
//   return store;
// }

import { createStore } from 'redux';
import rootReducer from './reducers';

export default function configureStore() {
  const store = createStore(rootReducer);
  return store;
}
