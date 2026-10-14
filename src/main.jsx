import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import GlobalStyles from './styles/GlobalStyles';
import { LanguageProvider } from './contexts/LanguageContext';
import './index.css'; // Import Tailwind

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <GlobalStyles />
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
