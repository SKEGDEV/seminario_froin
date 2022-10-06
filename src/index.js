import React from 'react';
import ReactDOM from 'react-dom/client';
import Router_func from './routes/router.jsx'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router_func />
  </React.StrictMode>
);

reportWebVitals();
