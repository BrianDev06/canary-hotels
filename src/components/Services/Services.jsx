import './Services.css';
import Card from '../Card/Card';
import imagenHotel1 from '../../assets/apartamento-pobla-farnals-playa-precioso.jpg';

const HOTELES = [
  { id: 1, img: imagenHotel1, title: "Hotel Playa", description: "Frente al mar", price: "$100" },
  { id: 2, title: "Cabaña Montaña", description: "Aire puro", price: "$80" }
];

function Services() {
    return (
        <section>
            <div className="seccionHoteles">
                <button className="indexHoteles">Ver todos los alojamientos</button>
                <div>
                    {HOTELES.map(hotel => (
                        <Card key={hotel.id} {...hotel} />
                    ))}

                </div>
            </div>
        </section>


    );
}


export default Services;