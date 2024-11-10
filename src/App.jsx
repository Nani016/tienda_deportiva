import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './home';
import './style.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Home />} />

        {/* Aquí puedes añadir otras rutas, como una página de catálogo o de inicio de sesión */}
        {/* <Route path="/catalogo" element={<Catalogo />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
