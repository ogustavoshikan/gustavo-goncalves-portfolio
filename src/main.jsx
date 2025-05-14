import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Garante que está chamando nosso App.jsx
import './index.css'; // Nosso arquivo de estilos principal

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
