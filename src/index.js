import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppProvider from './contexts/AppContext'; // ✅ import context provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider> {/* ✅ Wrap App with the context provider */}
      <App />
    </AppProvider>
  </React.StrictMode>
);

reportWebVitals();
