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
        </section>
    );
}

export default Information;
