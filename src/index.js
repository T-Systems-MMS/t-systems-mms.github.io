import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// added Telekom Scale
import { defineCustomElements } from '@telekom/scale-components/loader';
import '@telekom/scale-components/dist/scale-components/scale-components.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

defineCustomElements();
