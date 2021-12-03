import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header'
import Main from './Main'
import './App.css'
import Footer from './Footer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <><Header/><Main/><Footer/></>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
