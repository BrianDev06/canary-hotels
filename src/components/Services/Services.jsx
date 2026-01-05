import { useState } from 'react';
import './Services.css';
import Card from '../Card/Card';
import imagenHotel1 from '../../assets/apartamento-pobla-farnals-playa-precioso.jpg';
import imagenHotel2 from '../../assets/bancal-hotel-&-spa.jpg';
import imagenHotel3 from '../../assets/shambhala-fuerteventura.jpg';
import imagenHotel4 from '../../assets/hotel-cordial-marina-blanca.jpg';
import imagenHotel5 from '../../assets/hotel-el-tejar-&-spa.jpg';
import imagenHotel6 from '../../assets/geko-hotels.jpg';

import campo1 from '../../assets/finca-malvasia.webp';
import campo2 from '../../assets/bellamare.webp';
import campo3 from '../../assets/malpais-trece.webp';
import campo4 from '../../assets/villa-senorita.webp';
import campo5 from '../../assets/hacienda-camino-de-la-cruzada.webp';

// Hoteles iniciales
const HOTELES = [
  { id: 1, img: imagenHotel1, title: "Apartamento Pobla Farnals Playa Precioso", stars: "⭐⭐⭐", description: "Apartamento pobla farnals playa precioso se encuentra en Las Canteras, a solo 9 min a pie de Platja de Rafalell, y ofrece alojamiento frente a la playa con piscina de temporada al aire libre, jardín, salón de uso común y wifi gratis.", price: "100€ / noche" },
  { id: 2, img: imagenHotel2, title: "Bancal Hotel & Spa", stars: "⭐⭐⭐⭐⭐", description: "Si decides alojarte en Bancal Hotel & Spa de San Sebastián de La Gomera, estarás a orillas del agua y a menos de diez minutos en coche de Puerto de San Sebastián de la Gomera y Playas de La Gomera. Además, este hotel spa se encuentra a 2,1 km de Playa Ávalo y a 3,7 km de Playa de Chigadá.", price: "200€ / noche" },
  { id: 3, img: imagenHotel3, title: "Shambhala Fuerteventura", stars: "⭐⭐⭐⭐⭐", description: "Alojamiento Elegante: Shambhala Fuerteventura en Parque Holandés ofrece una piscina con vistas impresionantes, una terraza solárium y un jardín exuberante. Los huéspedes pueden relajarse junto a la piscina o disfrutar del sol en la terraza. La propiedad cuenta con un bar y WiFi gratis, asegurando una estancia cómoda y conectada.", price: "167,99€ / noche" },
  { id: 4, img: imagenHotel4, title: "Hotel Cordial Marina Blanca", stars: "⭐⭐⭐⭐", description: "Ofrece piscina al aire libre. El Hotel Cordial Marina Blanca ofrece alojamiento en Playa Blanca, a 16 km de Puerto del Carmen. Hay WiFi gratuita en todas las instalaciones.", price: "329,99€ / noche" },
  { id: 5, img: imagenHotel5, title: "Hotel El Tejar & Spa", stars: "⭐⭐⭐⭐", description: "Ubicación Privilegiada: Situado a 25 km del Aeropuerto de Tenerife Sur, el hotel está cerca de atracciones como Golf del Sur (21 km) y Siam Park (23 km). Los huéspedes pueden disfrutar de vistas al mar, al jardín o a la montaña desde sus habitaciones.", price: "115€ / noche" },
  { id: 6, img: imagenHotel6, title: "Geko Hotels", stars: "⭐⭐",  description: "Servicios Excepcionales: Los huéspedes pueden relajarse en la terraza solárium o disfrutar del área de descanso al aire libre. El hotel ofrece WiFi gratis, desayuno buffet y música en vivo. Otros equipamientos incluyen una zona de picnic, instalaciones para barbacoa y un mostrador de información turística.", price: "128,80€ / noche" }
];

// Hoteles extra a añadir
const hotelesCampo = [
  { id: 101, img: campo1, title: "Finca Malvasia", stars: "⭐⭐⭐⭐⭐", description: "Rodeada de volcanes y viñedos.", price: "150€ / noche" },
  { id: 102, img: campo2, title: "Bellamare", stars: "⭐⭐⭐⭐", description: "Casa rural luminosa en Tenerife.", price: "375€ / noche" },
  { id: 103, img: campo3, title: "Malpaís Trece", stars: "⭐⭐⭐", description: "Casa familiar con vistas al Atlántico.", price: "167,99€ / noche" },
  { id: 104, img: campo4, title: "Villa Señorita", stars: "⭐⭐⭐⭐", description: "Casa acogedora en Gran Canaria.", price: "229,99€ / noche" },
  { id: 105, img: campo5, title: "Hacienda Camino De La Cruzada", stars: "⭐⭐⭐⭐", description: "Refugio lujoso en Tenerife.", price: "175€ / noche" },
];

function Services({ agregarAlCarrito }) {
  // Estado para los hoteles que se muestran
  const [hotelesMostrar, setHotelesMostrar] = useState(HOTELES);
  const [mostrandoTodos, setMostrandoTodos] = useState(false);

  const mostrarTodos = () => {
    setHotelesMostrar([...HOTELES, ...hotelesCampo]);
    setMostrandoTodos(true);
  };

  const volver = () => {
    setHotelesMostrar(HOTELES);
    setMostrandoTodos(false);
  };

  return (
    <section id='reserve'>
      <div className="seccionHoteles content">
        {!mostrandoTodos ? (
          <button className="indexHoteles" onClick={mostrarTodos}>
            Ver todos los alojamientos
          </button>
        ) : (
          <button className="indexHoteles volver" onClick={volver}>
            Volver
          </button>
        )}

        <div className='hoteles'>
          {hotelesMostrar.map(hotel => (
            <Card
              key={hotel.id}
              {...hotel}
              agregarAlCarrito={agregarAlCarrito}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
