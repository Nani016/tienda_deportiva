import React, { useState } from 'react';
import './style.css';

function App() {
  const [showCatalog, setShowCatalog] = useState(false);

  const mostrarCatalogo = (event) => {
    event.preventDefault();
    setShowCatalog(true);
  };

  return (
    <div>
      {/* Barra de navegación superior */}
      <div className="navbar">
        <div className="navbar-izquierda">
          <img src="https://via.placeholder.com/20" alt="Logo Jordan" />
          <img src="https://via.placeholder.com/20" alt="Logo Nike" />
        </div>
        <div className="navbar-derecha">
          <a href="#">Buscar una tienda</a>
          <a href="#">Ayuda</a>
          <a href="#">Únete a nosotros</a>
          <a href="#">Iniciar sesión</a>
        </div>
      </div>

      {/* Formulario de inicio de sesión */}
      {!showCatalog && (
        <div className="container">
          <div className="formulario">
            <h1>Iniciar sesión</h1>
            <form onSubmit={mostrarCatalogo}>
              <div className="input-group">
                <input type="text" id="username" name="username" required />
                <label htmlFor="username">Nombre de usuario</label>
              </div>
              <div className="input-group">
                <input type="password" id="password" name="password" required />
                <label htmlFor="password">Contraseña</label>
              </div>
              <div className="recordar">
                <a href="#">¿Olvidaste tu contraseña?</a>
              </div>
              <input type="submit" value="Iniciar sesión" className="btn" />
              <div className="registrarse">
                <span>¿No tienes cuenta?</span> <a href="#">Regístrate aquí</a>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Catálogo de productos */}
      {showCatalog && (
        <div className="catalogo" id="catalogo">
          <div className="sidebar">
            <h2>Hombre - Ropa</h2>
            <ul>
              <li><a href="#">Partes De Arriba</a></li>
              <li><a href="#">Sudaderas Con Y Sin Capucha</a></li>
              <li><a href="#">Chaquetas Y Chalecos</a></li>
              <li><a href="#">Pantalones Y Mallas</a></li>
              <li><a href="#">Chándales</a></li>
              <li><a href="#">Pantalones cortos</a></li>
            </ul>

            {/* Menús desplegables */}
            <div className="filtros">
              {/* Aquí puedes agregar menús de filtro */}
            </div>
          </div>

          <div className="contenido-productos">
            {/* Aquí puedes agregar productos */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
