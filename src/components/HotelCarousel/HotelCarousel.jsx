import { useState, useRef, useEffect } from 'react';
import './HotelCarousel.css';
import imagenHotel1 from '../../assets/apartamento-pobla-farnals-playa-precioso.jpg';
import imagenHotel2 from '../../assets/bancal-hotel-&-spa.jpg';
import imagenHotel3 from '../../assets/shambhala-fuerteventura.jpg';
import imagenHotel4 from '../../assets/hotel-cordial-marina-blanca.jpg';
import imagenHotel5 from '../../assets/hotel-el-tejar-&-spa.jpg';

const hotels = [
  { id: 1, img: imagenHotel1, title: "Apartamento Pobla Farnals Playa Precioso", stars: "⭐⭐⭐", description: "Apartamento pobla farnals playa precioso se encuentra en Las Canteras, a solo 9 min a pie de Platja de Rafalell, y ofrece alojamiento frente a la playa con piscina de temporada al aire libre, jardín, salón de uso común y wifi gratis.", price: "100€ / noche" },
  { id: 2, img: imagenHotel2, title: "Bancal Hotel & Spa", stars: "⭐⭐⭐⭐⭐", description: "Si decides alojarte en Bancal Hotel & Spa de San Sebastián de La Gomera, estarás a orillas del agua y a menos de diez minutos en coche de Puerto de San Sebastián de la Gomera y Playas de La Gomera. Además, este hotel spa se encuentra a 2,1 km de Playa Ávalo y a 3,7 km de Playa de Chigadá.", price: "200€ / noche" },
  { id: 3, img: imagenHotel3, title: "Shambhala Fuerteventura", stars: "⭐⭐⭐⭐", description: "Alojamiento Elegante: Shambhala Fuerteventura en Parque Holandés ofrece una piscina con vistas impresionantes, una terraza solárium y un jardín exuberante. Los huéspedes pueden relajarse junto a la piscina o disfrutar del sol en la terraza. La propiedad cuenta con un bar y WiFi gratis, asegurando una estancia cómoda y conectada.", price: "167,99€ / noche" },
  { id: 4, img: imagenHotel4, title: "Hotel Cordial Marina Blanca", stars: "⭐⭐⭐⭐", description: "Ofrece piscina al aire libre. El Hotel Cordial Marina Blanca ofrece alojamiento en Playa Blanca, a 16 km de Puerto del Carmen. Hay WiFi gratuita en todas las instalaciones.", price: "329,99€ / noche" },
  { id: 5, img: imagenHotel5, title: "Hotel El Tejar & Spa", stars: "⭐⭐⭐⭐", description: "Ubicación Privilegiada: Situado a 25 km del Aeropuerto de Tenerife Sur, el hotel está cerca de atracciones como Golf del Sur (21 km) y Siam Park (23 km). Los huéspedes pueden disfrutar de vistas al mar, al jardín o a la montaña desde sus habitaciones.", price: "115€ / noche" },
];

function HotelCarousel({ agregarAlCarrito }) {
  const carouselRef = useRef(null);
  const [puedeIzquierda, setPuedeIzquierda] = useState(false);
  const [puedeDerecha, setPuedeDerecha] = useState(true);

  const actualizarFlechas = () => {
  const carousel = carouselRef.current;
  if (!carousel) return;

  setPuedeIzquierda(carousel.scrollLeft > 0);
  setPuedeDerecha(
    carousel.scrollLeft + carousel.clientWidth < carousel.scrollWidth
    );
  };

  const scrollDerecha = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const scrollIzquierda = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    actualizarFlechas();
    carousel.addEventListener('scroll', actualizarFlechas);

    return () => carousel.removeEventListener('scroll', actualizarFlechas);
  }, []);


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
        <h2>Hoteles cerca de la playa</h2>
        <button className="view-all">Ver todos los hoteles</button>
      </div>

      <div className="carousel-container">
        {puedeIzquierda && (
          <button className="flecha izquierda" onClick={scrollIzquierda}>
            ‹
          </button>
        )}

        <div className="carousel" ref={carouselRef}>
          {hotels.map((hotel) => (
            <div className="carousel-card" key={hotel.id}>
              <img src={hotel.img} alt={hotel.title} />
              <h3>{hotel.title}</h3>

              <div className="hotelPrice">
                <span>{hotel.price}</span>

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
                        onChange={(e) => {
                          setFecha(e.target.value);
                          limpiarErrores();
                        }}
                      />

                      {!mensajeExito ? (
                        <button className='confirmar' onClick={() => confirmar(hotel)}>
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
        {puedeDerecha && (
          <button className="flecha derecha" onClick={scrollDerecha}>
            ›
          </button>
        )}
      </div>
    </section>
  );
}

export default HotelCarousel;
