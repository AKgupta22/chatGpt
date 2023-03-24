import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/assets/css/style.css'
import NavbarContextProvider from './context/NavbarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarContextProvider>
      <App />
    </NavbarContextProvider>
  </React.StrictMode>
);

