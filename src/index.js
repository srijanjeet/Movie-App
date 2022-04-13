import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'normalize.css';
import reportWebVitals from './reportWebVitals';
import {GlobalStyles} from './globalstyle'

// import {firebase} from './lib/firebaseProduction'
import { firebase } from './lib/firebaseProduction'
import { FirebaseContext } from './context/firebaseContext';

ReactDOM.render(

  <React.StrictMode>
  <FirebaseContext.Provider value = {{firebase}}>
    <GlobalStyles/>
    <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
