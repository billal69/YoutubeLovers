import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/index.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers'
// dev tools
import { composeWithDevTools } from "redux-devtools-extension";
// import logger from 'redux-logger';
import { getUsers } from './actions/users.actions';

const root = ReactDOM.createRoot(document.getElementById('root'));


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  store.dispatch(getUsers())

root.render(
    <Provider store={store}>

    <App />
    </Provider>,
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
