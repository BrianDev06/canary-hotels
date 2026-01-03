import { useState } from 'react';
import './Information.css';

function Information() {
    const [islaActiva, setIslaActiva] = useState('Gran Canaria');

    const islas = [
        'Gran Canaria',
        'Fuerteventura',
        'Lanzarote',
        'El Hierro',
        'La Gomera',
        'Tenerife',
        'La Palma'
    ];

    const descripciones = {
        'Gran Canaria': 'Conocida como el "continente en miniatura", esta isla es perfecta si buscas diversidad de paisajes sin cambiar de hotel. La oferta de alojamiento es muy singular: puedes optar por hoteles urbanos y cosmopolitas en Las Palmas de Gran Canaria, con acceso a la icónica playa de Las Canteras y una vibrante vida cultural, o elegir los famosos resorts del sur junto a las Dunas de Maspalomas. Es la mejor elección si quieres combinar días de playa y piscina con escapadas a pueblos de montaña pintorescos y barrancos profundos, todo con una excelente conectividad.',
        'Fuerteventura': 'Es el destino definitivo para los amantes del mar turquesa y las playas infinitas. La gran ventaja de alojarse en Fuerteventura es la posibilidad de disfrutar de hoteles con acceso directo a kilómetros de arena blanca y aguas cristalinas, similares a las del Caribe. Es una isla perfecta para la desconexión total ("slow travel") y para los aficionados a los deportes de viento como el windsurf o kitesurf. La oferta hotelera es amplia y relajada, perfecta para familias y parejas que priorizan el sol y el baño por encima de la montaña o la vida urbana.',
        'Lanzarote': 'Si valoras la estética, el arte y la tranquilidad, esta es tu isla. Los hoteles en Lanzarote se caracterizan por una integración respetuosa con el paisaje volcánico, siguiendo el legado del artista César Manrique. Aquí no encontrarás grandes torres de cemento, sino complejos de baja altura, casitas blancas y arquitectura sostenible que contrastan con la tierra negra y roja. Alojarse aquí ofrece una experiencia visual única y sofisticada, ideal para parejas y viajeros que buscan paz, visitar centros de arte y cultura, y disfrutar de playas salvajes como Papagayo.',
        'El Hierro': 'La isla del "fin del mundo" es la opción para la desconexión absoluta y la sostenibilidad. Al ser la menos turística, alojarse aquí es una experiencia íntima; la oferta se basa en pequeños hoteles con encanto y casas bioclimáticas que respetan el medio ambiente. Es el paraíso de los buceadores gracias a sus fondos marinos en La Restinga, pero también de quienes buscan piscinas naturales volcánicas y cero aglomeraciones. Elegir El Hierro es elegir un retiro espiritual donde el lujo es el silencio, el viento y la naturaleza en estado puro.',
        'La Gomera': 'PEsta isla ofrece una experiencia mágica y casi mística, perfecta para quienes quieren perderse en el bosque. Alojarse en La Gomera suele implicar estar rodeado de valles abruptos y palmerales. Destaca por tener alojamientos singulares, como su famoso Parador con vistas al océano y al Teide (en la isla vecina), o pequeñas casas rurales cerca del Parque Nacional de Garajonay. Es el destino para ti si tu prioridad es el senderismo de nivel, la autenticidad cultural (como el Silbo Gomero) y un ritmo de vida pausado y rural.',
        'Tenerife': 'Es la opción más completa y versátil, ideal si es tu primera vez en Canarias o buscas una mezcla de todo. Alojarse aquí significa tener acceso a la mayor variedad de opciones: desde grandes resorts de lujo y todo incluido en la zona sur (Costa Adeje, Playa de las Américas) que garantizan sol y playa todo el año, hasta hoteles boutique con encanto colonial en el norte (Puerto de la Cruz, La Orotava). Su principal ventaja es que puedes despertar en un hotel costero y estar a menos de una hora visitando el Parque Nacional del Teide, combinando ocio nocturno, compras y naturaleza volcánica en un mismo viaje.',
        'La Palma': 'Conocida como la "Isla Bonita", es el refugio ideal para los amantes de la naturaleza exuberante y el senderismo. El alojamiento aquí huye del turismo de masas; predominan las casas rurales tradicionales, los hoteles pequeños con encanto y apartamentos integrados en entornos verdes. Su beneficio único es el cielo: muchos alojamientos están preparados para el astroturismo, permitiéndote observar las estrellas con una claridad impresionante desde la propia terraza de tu habitación. Es la elección correcta si buscas silencio, bosques de laurisilva y rutas a pie entre volcanes.'
    };

    return (
        <section className='informacionCanarias'>
            <div className="explora">
                <h2>Explora las Islas Canarias</h2>
                <p>Dale una mirada a nuestros consejos de viaje de las diferentes islas antes de reservar tu hotel.</p>
            </div>

            <ul className='islas'>
                {islas.map((isla) => (
                    <li key={isla}>
                        <button
                            className={islaActiva === isla ? 'activo' : ''}
                            onClick={() => setIslaActiva(isla)}
                        >
                            {isla}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="descripcionIsla">
                <h3>{islaActiva}</h3>
                <p>{descripciones[islaActiva]}</p>
            </div>
        </section>
    );
}

export default Information;
