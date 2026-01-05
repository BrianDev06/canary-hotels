import { useState, useRef, useEffect } from 'react';
import './HotelCarousel.css';

import playa1 from '../../assets/apartamento-pobla-farnals-playa-precioso.jpg';
import playa2 from '../../assets/bancal-hotel-&-spa.jpg';
import playa3 from '../../assets/shambhala-fuerteventura.jpg';
import playa4 from '../../assets/hotel-cordial-marina-blanca.jpg';
import playa5 from '../../assets/hotel-el-tejar-&-spa.jpg';

import campo1 from '../../assets/finca-malvasia.webp';
import campo2 from '../../assets/bellamare.webp';
import campo3 from '../../assets/malpais-trece.webp';
import campo4 from '../../assets/villa-senorita.webp';
import campo5 from '../../assets/hacienda-camino-de-la-cruzada.webp';

function HotelSections({ agregarAlCarrito }) {
  // ================= DATOS =================
  const hotelesPlaya = [
    { id: 1, img: playa1, title: "Apartamento Pobla Farnals Playa Precioso", description: "Apartamento pobla farnals playa precioso se encuentra en Las Canteras, a solo 9 min a pie de Platja de Rafalell, y ofrece alojamiento frente a la playa con piscina de temporada al aire libre, jardín, salón de uso común y wifi gratis.", price: "100€ / noche" },
    { id: 2, img: playa2, title: "Bancal Hotel & Spa", description: "Si decides alojarte en Bancal Hotel & Spa de San Sebastián de La Gomera, estarás a orillas del agua y a menos de diez minutos en coche de Puerto de San Sebastián de la Gomera y Playas de La Gomera.", price: "200€ / noche" },
    { id: 3, img: playa3, title: "Shambhala Fuerteventura", description: "Alojamiento elegante con piscina y terraza.", price: "167,99€ / noche" },
    { id: 4, img: playa4, title: "Hotel Cordial Marina Blanca", description: "Piscina al aire libre y WiFi gratuita.", price: "329,99€ / noche" },
    { id: 5, img: playa5, title: "Hotel El Tejar & Spa", description: "Vistas al mar y cerca de atracciones.", price: "115€ / noche" },
  ];

  const hotelesCampo = [
    { id: 101, img: campo1, title: "Finca Malvasia", description: "Rodeada de volcanes y viñedos.", price: "150€ / noche" },
    { id: 102, img: campo2, title: "Bellamare", description: "Casa rural luminosa en Tenerife.", price: "375€ / noche" },
    { id: 103, img: campo3, title: "Malpaís Trece", description: "Casa familiar con vistas al Atlántico.", price: "167,99€ / noche" },
    { id: 104, img: campo4, title: "Villa Señorita", description: "Casa acogedora en Gran Canaria.", price: "229,99€ / noche" },
    { id: 105, img: campo5, title: "Hacienda Camino De La Cruzada", description: "Refugio lujoso en Tenerife.", price: "175€ / noche" },
  ];

  // ================= ESTADOS =================
  const [verTodosPlaya, setVerTodosPlaya] = useState(false);
  const [verTodosCampo, setVerTodosCampo] = useState(false);

  const [abiertoId, setAbiertoId] = useState(null);
  const [fecha, setFecha] = useState('');
  const [errorSinFecha, setErrorSinFecha] = useState(false);
  const [errorFechaPasada, setErrorFechaPasada] = useState(false);
  const [mensajeExito, setMensajeExito] = useState(false);

  // ================= HELPERS =================
  const minDateTime = () => new Date().toISOString().slice(0, 16);
  const limpiarErrores = () => {
    setErrorSinFecha(false);
    setErrorFechaPasada(false);
    setMensajeExito(false);
  };

  const confirmar = (hotel) => {
    limpiarErrores();

    if (!fecha) return setErrorSinFecha(true);
    if (new Date(fecha) < new Date()) return setErrorFechaPasada(true);

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

  // ================= CARRUSEL REFS =================
  const playaRef = useRef(null);
  const campoRef = useRef(null);
  const scroll = (ref, cantidad) => ref.current.scrollBy({ left: cantidad, behavior: 'smooth' });

  // ================= RENDER LISTA =================
  const renderLista = (hoteles, volver) => (
    <>
      <button className="view-all" onClick={volver}>
        ← Volver atrás
      </button>

      <div className="hotel-list">
        {hoteles.map((hotel) => (
          <div className="hotel-row" key={hotel.id}>
            <img src={hotel.img} alt={hotel.title} />
            <div className="hotel-info">
              <h3>{hotel.title}</h3>
              <p>{hotel.description}</p>
              <span className="price">{hotel.price}</span>

              <div className="dropdown-wrapper">
                <button
                  className="comprarCarousel"
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
                      onChange={(e) => setFecha(e.target.value)}
                    />
                    {!mensajeExito ? (
                      <button className="confirmar" onClick={() => confirmar(hotel)}>
                        Confirmar
                      </button>
                    ) : (
                      <p className="mensaje-exito">✅ La reserva se ha añadido con éxito</p>
                    )}
                    {errorSinFecha && <p className="error-fecha">Selecciona una fecha</p>}
                    {errorFechaPasada && <p className="error-fecha">Fecha incorrecta</p>}
                  </div>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>
    </>
  );

  // ================= RENDER CARRUSEL =================
  const renderCarrusel = (titulo, hoteles, ref, verTodos) => (
    <>
      <div className="section-header" id='explore'>
        <h2>{titulo}</h2>
        <button className="view-all" onClick={verTodos}>Ver todos los hoteles</button>
      </div>

      <div className="carousel-container">
        <button className="flecha izquierda" onClick={() => scroll(ref, -300)}>‹</button>
        <div className="carousel" ref={ref}>
          {hoteles.map((hotel) => (
            <div className="carousel-card" key={hotel.id}>
              <img src={hotel.img} alt={hotel.title} />
              <h3>{hotel.title}</h3>
              <span className="price">{hotel.price}</span>

              <div className="dropdown-wrapper">
                <button
                  className="comprarCarousel"
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
                      onChange={(e) => setFecha(e.target.value)}
                    />
                    {!mensajeExito ? (
                      <button className="confirmar" onClick={() => confirmar(hotel)}>
                        Confirmar
                      </button>
                    ) : (
                      <p className="mensaje-exito">✅ La reserva se ha añadido con éxito</p>
                    )}
                    {errorSinFecha && <p className="error-fecha">Selecciona una fecha</p>}
                    {errorFechaPasada && <p className="error-fecha">Fecha incorrecta</p>}
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
        <button className="flecha derecha" onClick={() => scroll(ref, 300)}>›</button>
      </div>
    </>
  );

  // ================= JSX FINAL =================
  return (
    <section className="hotel-section content">
      {!verTodosPlaya
        ? renderCarrusel("Hoteles cerca de la playa", hotelesPlaya, playaRef, () => setVerTodosPlaya(true))
        : renderLista(hotelesPlaya, () => setVerTodosPlaya(false))
      }

      {!verTodosCampo
        ? renderCarrusel("Hoteles cerca del campo", hotelesCampo, campoRef, () => setVerTodosCampo(true))
        : renderLista(hotelesCampo, () => setVerTodosCampo(false))
      }
    </section>
  );
}

export default HotelSections;
