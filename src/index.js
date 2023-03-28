import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
// import drawReducer from './reducers/drawReducer'
// import cardReducer from './reducers/cardReducer'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/styles.css';


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const combinedReducer = combineReducers(
//   {draws: drawReducer, cards: cardReducer}
// )

// let store = createStore(combinedReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <Router basename={process.env.PUBLIC_URL}>
        <App />
      </Router>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
