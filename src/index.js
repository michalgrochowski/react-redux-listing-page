// Core dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxPromise from 'redux-promise';

// Reducers 
import reducers from "./reducers";

// Styles
import './styles/index.css';

// Components
import App from './containers/App.js';

// ServiceWorker
import registerServiceWorker from './registerServiceWorker';

// Create store
const store = createStore(
  combineReducers({
    ...reducers
  }), 
  applyMiddleware(ReduxPromise)
);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

registerServiceWorker();