import React, { useState } from 'react';
import './style.css';

const App = () => {
  const [mostrarCatalogo, setMostrarCatalogo] = useState(true);
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [mostrarRegistro, setMostrarRegistro] = useState(false); // Mostrar el formulario de registro
  const [email, setEmail] = useState('');
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState(''); // Para la confirmación del password
  const [esRegistrado, setEsRegistrado] = useState(false); // Para saber si es registro o login

  const handleMostrarLogin = () => {
    setMostrarLogin(true);
    setEsRegistrado(true); // Mostrar el formulario de login por defecto
  };

  const handleCerrarLogin = () => {
    setMostrarLogin(false);
    setEsRegistrado(true);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const nombre = email.split('@')[0];
    setNombreUsuario(nombre);
    setMostrarLogin(false);
  };

  const handleRegistroSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes añadir validaciones más complejas
    const nombre = email.split('@')[0];
    setNombreUsuario(nombre);
    setMostrarLogin(false); // Cerrar el modal de login después del registro
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="navbar-izquierda">
          <img src="https://via.placeholder.com/40" alt="Logo Jordan" />
          <img src="https://via.placeholder.com/40" alt="Logo Nike" />
        </div>
        <div className="navbar-derecha">
          <a href="#">Buscar una tienda</a>
          <a href="#">Ayuda</a>
          <a href="#">Únete a nosotros</a>
          {nombreUsuario ? (
            <span className="usuario">{nombreUsuario}</span>
          ) : (
            <a href="#" onClick={handleMostrarLogin}>Iniciar sesión</a>
          )}
        </div>
      </header>

      <div className="bienvenida">
        <h1>Bienvenido a nuestra tienda</h1>
        <p>Compra los productos más exclusivos de Nike y Jordan.</p>
      </div>

      {/* Formulario de inicio de sesión */}
      {mostrarLogin && (
        <div className="login-overlay">
          <div className="login-modal">
            <h2>{esRegistrado ? 'Iniciar sesión' : 'Registrarse'}</h2>
            <form onSubmit={esRegistrado ? handleLoginSubmit : handleRegistroSubmit}>
              <div className="input-group">
                <label htmlFor="email">Correo electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Contraseña</label>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
              {!esRegistrado && (
                <div className="input-group">
                  <label htmlFor="passwordConfirm">Confirmar Contraseña</label>
                  <input 
                    type="password" 
                    id="passwordConfirm" 
                    name="passwordConfirm" 
                    required 
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)} 
                  />
                </div>
              )}
              <button type="submit" className="btn">{esRegistrado ? 'Iniciar sesión' : 'Registrarse'}</button>
              <button type="button" className="btn" onClick={handleCerrarLogin}>Cerrar</button>
            </form>
            <p>
              {esRegistrado ? '¿No tienes cuenta? ' : '¿Ya tienes cuenta? '}
              <span className="link" onClick={() => setEsRegistrado(!esRegistrado)}>
                {esRegistrado ? 'Regístrate' : 'Iniciar sesión'}
              </span>
            </p>
          </div>
        </div>
      )}

      {/* Catálogo de productos */}
      <div className="catalogo">
        <aside className="sidebar">
          <h2>Hombre - Ropa</h2>
          <ul>
            <li><a href="#">Parte superior</a></li>
            <li><a href="#">Sudaderas y chaquetas</a></li>
            <li><a href="#">Pantalones deportivos</a></li>
            <li><a href="#">Calzado deportivo</a></li>
            <li><a href="#">Accesorios</a></li>
          </ul>
        </aside>
        <div className="contenido-productos">
          <div className="opciones">
            <button className="btn-filtro">Ocultar filtros</button>
            <select className="select-ordenar">
              <option value="popularidad">Ordenar por popularidad</option>
              <option value="precio-bajo">Precio: de menor a mayor</option>
              <option value="precio-alto">Precio: de mayor a menor</option>
            </select>
          </div>
          <div className="productos">
            {/* Producto 1 */}
            <div className="producto">
              <img src="https://via.placeholder.com/250" alt="Producto 1" />
              <h2>Jordan Flight Fleece</h2>
              <p>Sudadera con capucha - Hombre</p>
              <p className="precio">€52.49 <span className="descuento">€74.99</span></p>
              <button className="btn">Añadir al carrito</button>
            </div>

            {/* Producto 2 */}
            <div className="producto">
              <img src="https://via.placeholder.com/250" alt="Producto 2" />
              <h2>Nike Air Max 90</h2>
              <p>Zapatillas deportivas - Hombre</p>
              <p className="precio">€99.99 <span className="descuento">€120.00</span></p>
              <button className="btn">Añadir al carrito</button>
            </div>

            {/* Producto 3 */}
            <div className="producto">
              <img src="https://via.placeholder.com/250" alt="Producto 3" />
              <h2>Nike Dri-FIT</h2>
              <p>Camiseta deportiva - Hombre</p>
              <p className="precio">€29.99 <span className="descuento">€39.99</span></p>
              <button className="btn">Añadir al carrito</button>
            </div>

            {/* Producto 4 */}
            <div className="producto">
              <img src="https://via.placeholder.com/250" alt="Producto 4" />
              <h2>Nike Flex Stride</h2>
              <p>Pantalón deportivo - Hombre</p>
              <p className="precio">€44.99 <span className="descuento">€59.99</span></p>
              <button className="btn">Añadir al carrito</button>
            </div>

            {/* Producto 5 */}
            <div className="producto">
              <img src="https://via.placeholder.com/250" alt="Producto 5" />
              <h2>Nike Pro Training</h2>
              <p>Pantalones cortos deportivos - Mujer</p>
              <p className="precio">€34.99 <span className="descuento">€49.99</span></p>
              <button className="btn">Añadir al carrito</button>
            </div>

            {/* Producto 6 */}
            <div className="producto">
              <img src="https://via.placeholder.com/250" alt="Producto 6" />
              <h2>Air Jordan 1</h2>
              <p>Zapatillas clásicas - Hombre</p>
              <p className="precio">€149.99 <span className="descuento">€179.99</span></p>
              <button className="btn">Añadir al carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
