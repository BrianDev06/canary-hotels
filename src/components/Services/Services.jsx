import './Services.css';
import Card from '../Card/Card';
import imagenHotel1 from '../../assets/apartamento-pobla-farnals-playa-precioso.jpg';

const HOTELES = [
  { id: 1, img: imagenHotel1, title: "Hotel Playa", stars: "⭐⭐⭐⭐", description: "Frente al mar", price: "100€ / noche" },
  { id: 2, title: "Cabaña Montaña", description: "Aire puro", price: "$80" }
];

// 1. Recibimos agregarAlCarrito
function Services({ agregarAlCarrito }) {
    return (
        <section>
            <div className="seccionHoteles">
                <button className="indexHoteles">Ver todos los alojamientos</button>
                <div className='hoteles'>
                    {HOTELES.map(hotel => (
                        <Card 
                            key={hotel.id} 
                            {...hotel} 
                            // 2. Se la pasamos a cada Card
                            agregarAlCarrito={agregarAlCarrito} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;