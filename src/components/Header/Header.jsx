import React, { useState } from 'react'; // Importar useState
import './Header.css';
import logo from "../../assets/canary-hotels-logo-sin-fondo.png";

// Recibimos carrito y la función de eliminar
function Header({ carrito, eliminarDelCarrito }) {
    const [mostrarCarrito, setMostrarCarrito] = useState(false);

    // Calcular el total de elementos
    const cantidad = carrito.length;

    return (
        <header className='encabezado'>
            <nav>
                <div className='logo-completo'>
                    <img src={logo} alt="Canary Hotels logo" />
                    <h1>Canary Island</h1>
                </div>
                <ul className='secciones'>
                    <li><a href="#">Reserve</a></li>
                    <li><a href="#">Explore</a></li>
                    
                    {/* Contenedor relativo para posicionar el dropdown */}
                    <li className="carrito-container"> 
                        <div 
                            className="icono-wrapper" 
                            onClick={() => setMostrarCarrito(!mostrarCarrito)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={1.5}
                                className="size-6 carrito"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                />
                            </svg>
                            {cantidad > 0 && <span className="carrito-badge">{cantidad}</span>}
                        </div>

                        {/* --- LÓGICA DEL DROPDOWN --- */}
                        {mostrarCarrito && (
                            <div className="carrito-dropdown">
                                <h3>Tu Reserva</h3>
                                
                                {carrito.length === 0 ? (
                                    <p className="carrito-vacio">El carrito está vacío</p>
                                ) : (
                                    <div className="lista-items">
                                        {carrito.map((item, index) => (
                                            <div key={index} className="item-carrito">
                                                <div className="item-info">
                                                    <p className="item-titulo">{item.titulo}</p>
                                                    <p className="item-fecha">📅 {item.fechaReserva.replace('T', ' ')}</p>
                                                    <p className="item-precio">{item.precio}</p>
                                                </div>
                                                <button 
                                                    className="btn-eliminar"
                                                    onClick={() => eliminarDelCarrito(index)}
                                                >
                                                    🗑️
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                
                                {carrito.length > 0 && (
                                    <button className="btn-pagar">Ir a pagar</button>
                                )}
                            </div>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;