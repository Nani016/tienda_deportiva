import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.js'; // Asegúrate de que el nombre del archivo sea correcto
import './index.css'; // Mantén esto si tienes un archivo de estilo global

// Selecciona el contenedor de montaje por su ID
const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("No se encontró el contenedor de 'root' en el HTML.");
}

