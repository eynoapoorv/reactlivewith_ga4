import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import ReactGA from "react-ga4";

ReactGA.initialize("G-52KSN4RQ4Y");

// Send pageview with a custom path
ReactGA.send({
  hitType: "pageview",
  
  page: window.location.pathname,
  title: "Custom Title"
});
const result = ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
  title: "Custom Title"
});
console.log("page", result)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
