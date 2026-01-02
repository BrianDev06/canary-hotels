import { useState } from 'react';
import './Card.css';

function Card({ img, title, stars, description, price, agregarAlCarrito }) {
  const [abierto, setAbierto] = useState(false);
  const [fecha, setFecha] = useState('');
  
  // Estados de validación
  const [errorSinFecha, setErrorSinFecha] = useState(false);
  const [errorFechaPasada, setErrorFechaPasada] = useState(false);
  
  // NUEVO ESTADO: Para el mensaje de éxito
  const [mensajeExito, setMensajeExito] = useState(false);

  const minDateTime = () => new Date().toISOString().slice(0, 16);

  const limpiarErrores = () => {
    setErrorSinFecha(false);
    setErrorFechaPasada(false);
    setMensajeExito(false); // Limpiamos el éxito si el usuario toca algo
  };

  const confirmar = () => {
    limpiarErrores();

    if (!fecha) {
      setErrorSinFecha(true);
      return;
    }

    if (new Date(fecha) < new Date()) {
      setErrorFechaPasada(true);
      return;
    }

    // 1. Añadimos al carrito
    const nuevaReserva = {
        titulo: title,
        precio: price,
        fechaReserva: fecha
    };
    agregarAlCarrito(nuevaReserva);

    // 2. CAMBIO PRINCIPAL: En vez de alert, activamos el mensaje
    setMensajeExito(true);

    // 3. Esperamos 2 segundos para cerrar el menú automáticamente
    setTimeout(() => {
        setMensajeExito(false);
        setAbierto(false);
        setFecha('');
    }, 2000);
  };

  return (
    <div className="card-container">
      <img src={img} alt={title} className="card-image" />

      <div className="informacionCard">
        <h3>{title}</h3>
        <h4>{stars}</h4>
        <p>{description}</p>

        <div className="price">
          <span>{price}</span>

          <div className="dropdown-wrapper">
            <button
              className="comprar"
              onClick={() => {
                setAbierto(!abierto);
                limpiarErrores();
              }}
            >
              Añadir al carrito
            </button>

            {abierto && (
              <div className="dropdown-fechas">
                <input
                  type="datetime-local"
                  min={minDateTime()}
                  value={fecha}
                  onChange={(e) => {
                    setFecha(e.target.value);
                    limpiarErrores();
                  }}
                />

                {/* Si hay éxito, ocultamos el botón para que solo se vea el mensaje */}
                {!mensajeExito ? (
                    <button onClick={confirmar}>
                        Confirmar
                    </button>
                ) : (
                    // AQUÍ ESTÁ TU NUEVA ETIQUETA P
                    <p className="mensaje-exito">
                        ✅ La reserva se ha añadido con éxito
                    </p>
                )}

                {errorSinFecha && (
                  <p className="error-fecha">No puedes reservar si no seleccionas una fecha</p>
                )}

                {errorFechaPasada && (
                  <p className="error-fecha">No puedes reservar en una fecha pasada</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;