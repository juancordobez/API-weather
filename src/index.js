// Create-React-App
import React from 'react';
import ReactDOM from 'react-dom';

// React-route-dom
import { BrowserRouter } from 'react-router-dom'

// Styles
import App from './containers/App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
