import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js'; // El componente principal de tu aplicación
import './index.css'; // Si tienes un archivo CSS, de lo contrario puedes eliminar esta línea

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
