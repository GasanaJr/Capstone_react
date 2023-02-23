import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
// import Promo from './components/Promo';
// import Nav from './components/Nav';
// import Intro1 from './components/Intor1';
// import Intro2 from './components/Intro2';
// import Intro3 from './components/Intro3';
// import Footer from './components/Footer';
// import Heading from './components/Heading';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
