import React, { useState } from 'react';
import './style.css';

const App = () => {
  const [mostrarCatalogo, setMostrarCatalogo] = useState(true);
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [nombreCompleto, setNombreCompleto] = useState(''); 
  const [telefono, setTelefono] = useState(''); 
  const [direccion, setDireccion] = useState(''); 
  const [esRegistrado, setEsRegistrado] = useState(false);

  const handleMostrarLogin = () => {
    setMostrarLogin(true);
    setEsRegistrado(true);
  };

  const handleCerrarLogin = () => {
    setMostrarLogin(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const nombre = email.split('@')[0];
    setNombreUsuario(nombre);
    setMostrarLogin(false);
  };

  const handleRegistroSubmit = (e) => {
    e.preventDefault();
    const nombre = email.split('@')[0];
    setNombreUsuario(nombre);
    setMostrarLogin(false);
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


      {/* Barra de Navegación Secundaria */}
      <nav className="navbar-secundaria">
      <div className="dropdown">
          <a href="#" className="dropdown-toggle">Novedades</a>
          <div className="dropdown-menu">
            <a href="#">Ropa Mujer</a>
            <a href="#">Calzado Mujer</a>
            <a href="#">Accesorios Mujer</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="#" className="dropdown-toggle">Hombre</a>
          <div className="dropdown-menu">
            <a href="#">Ropa Hombre</a>
            <a href="#">Calzado Hombre</a>
            <a href="#">Accesorios Hombre</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="#" className="dropdown-toggle">Mujer</a>
          <div className="dropdown-menu">
            <a href="#">Ropa Mujer</a>
            <a href="#">Calzado Mujer</a>
            <a href="#">Accesorios Mujer</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="#" className="dropdown-toggle">Niños</a>
          <div className="dropdown-menu">
            <a href="#">Ropa Mujer</a>
            <a href="#">Calzado Mujer</a>
            <a href="#">Accesorios Mujer</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="#" className="dropdown-toggle">Accesorios</a>
          <div className="dropdown-menu">
            <a href="#">Ropa Mujer</a>
            <a href="#">Calzado Mujer</a>
            <a href="#">Accesorios Mujer</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="#" className="dropdown-toggle">Descuentos</a>
          <div className="dropdown-menu">
            <a href="#">Ropa Mujer</a>
            <a href="#">Calzado Mujer</a>
            <a href="#">Accesorios Mujer</a>
          </div>
        </div>
        <button className="btn-buscar">🔍</button>
        <button className="btn-tienda">🛒</button>
      </nav>

      <div className="bienvenida">
        <h1>Bienvenido a nuestra tienda</h1>
        <p>Compra los productos más exclusivos de la ChaveStore</p>
      </div>

      <section className="banner">
        <h2>¡Nuevo! Descubre los productos más vendidos.</h2>
      </section>

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
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
              {!esRegistrado && (
                <>
                  <div className="input-group">
                    <label htmlFor="nombreCompleto">Nombre completo</label>
                    <input 
                      type="text" 
                      id="nombreCompleto" 
                      required 
                      value={nombreCompleto}
                      onChange={(e) => setNombreCompleto(e.target.value)} 
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="telefono">Teléfono</label>
                    <input 
                      type="tel" 
                      id="telefono" 
                      required 
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)} 
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="direccion">Dirección</label>
                    <input 
                      type="text" 
                      id="direccion" 
                      required 
                      value={direccion}
                      onChange={(e) => setDireccion(e.target.value)} 
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="passwordConfirm">Confirmar Contraseña</label>
                    <input 
                      type="password" 
                      id="passwordConfirm" 
                      required 
                      value={passwordConfirm}
                      onChange={(e) => setPasswordConfirm(e.target.value)} 
                    />
                  </div>
                </>
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

      <div className="catalogo">
        <aside className="sidebar">
          <h2>Categorias</h2>
          <ul>
            <li><a href="#">Ropa</a></li>
            <li><a href="#">Calzado</a></li>
            <li><a href="#">Accesorios</a></li>
            <li><a href="#">Novedades</a></li>
            <li><a href="#">Ofertas</a></li>
          </ul>
        </aside>
        <div className="contenido-productos">
          <div className="opciones">
            <button className="btn-filtro">Mostrar filtros</button>
            <select className="select-ordenar">
              <option value="popularidad">Ordenar por popularidad</option>
              <option value="precio-bajo">Precio: de menor a mayor</option>
              <option value="precio-alto">Precio: de mayor a menor</option>
            </select>
          </div>
          <div className="productos">
            {/** Productos */}
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div className="producto" key={index}>
                <img src={`https://via.placeholder.com/250`} alt={`Producto ${index}`} />
                <h2>{`Producto ${index}`}</h2>
                <p>{`Descripción del producto ${index}`}</p>
                <p className="precio">€49.99 <span className="descuento">€74.99</span></p>
                <button className="btn">Añadir al carrito</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
