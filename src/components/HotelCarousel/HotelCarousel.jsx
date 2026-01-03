import { useState } from 'react';
import './HotelCarousel.css';

const hotels = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    title: 'Courtyard by Marriott Petoskey',
    price: '180€ / noche'
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1501117716987-c8e1ecb2106c',
    title: 'Residence Inn Big Sky',
    price: '210€ / noche'
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9',
    title: 'The St. Regis Aspen Resort',
    price: '350€ / noche'
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1551887373-6edba6f5a3c6',
    title: 'The Wayback, Pigeon Forge',
    price: '140€ / noche'
  }
];

function HotelCarousel({ agregarAlCarrito }) {
  const [abiertoId, setAbiertoId] = useState(null);
  const [fecha, setFecha] = useState('');
  const [errorSinFecha, setErrorSinFecha] = useState(false);
  const [errorFechaPasada, setErrorFechaPasada] = useState(false);
  const [mensajeExito, setMensajeExito] = useState(false);

  const minDateTime = () => new Date().toISOString().slice(0, 16);

  const limpiarErrores = () => {
    setErrorSinFecha(false);
    setErrorFechaPasada(false);
    setMensajeExito(false);
  };

  const confirmar = (hotel) => {
    limpiarErrores();

    if (!fecha) {
      setErrorSinFecha(true);
      return;
    }

    if (new Date(fecha) < new Date()) {
      setErrorFechaPasada(true);
      return;
    }

    agregarAlCarrito({
      titulo: hotel.title,
      precio: hotel.price,
      fechaReserva: fecha
    });

    setMensajeExito(true);

    setTimeout(() => {
      setMensajeExito(false);
      setAbiertoId(null);
      setFecha('');
    }, 2000);
  };

  return (
    <section className="hotel-section content">
      <div className="section-header">
        <h2>Ski Hotels in United States</h2>
        <button className="view-all">View All →</button>
      </div>

      <div className="carousel">
        {hotels.map((hotel) => (
          <div className="carousel-card" key={hotel.id}>
            <img src={hotel.img} alt={hotel.title} />
            <h3>{hotel.title}</h3>

            <div className="price">
              <span>{hotel.price}</span>

              <div className="dropdown-wrapper">
                <button
                  className="comprar"
                  onClick={() => {
                    setAbiertoId(abiertoId === hotel.id ? null : hotel.id);
                    limpiarErrores();
                  }}
                >
                  Añadir al carrito
                </button>

                {abiertoId === hotel.id && (
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

                    {!mensajeExito ? (
                      <button onClick={() => confirmar(hotel)}>
                        Confirmar
                      </button>
                    ) : (
                      <p className="mensaje-exito">
                        ✅ La reserva se ha añadido con éxito
                      </p>
                    )}

                    {errorSinFecha && (
                      <p className="error-fecha">
                        No puedes reservar si no seleccionas una fecha
                      </p>
                    )}

                    {errorFechaPasada && (
                      <p className="error-fecha">
                        No puedes reservar en una fecha pasada
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default HotelCarousel;
