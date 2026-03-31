import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router } from 'react-router-dom';
import '@mantine/core/styles.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <App />
      </Router>
    </MantineProvider>
  </React.StrictMode>
);
