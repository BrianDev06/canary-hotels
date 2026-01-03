import './HotelCarousel.css';

const hotels = [
  {
    id: 1,
    country: 'USA',
    name: 'Courtyard by Marriott Petoskey',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945'
  },
  {
    id: 2,
    country: 'USA',
    name: 'Residence Inn Big Sky',
    image: 'https://images.unsplash.com/photo-1501117716987-c8e1ecb2106c'
  },
  {
    id: 3,
    country: 'USA',
    name: 'The St. Regis Aspen Resort',
    image: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9'
  },
  {
    id: 4,
    country: 'USA',
    name: 'The Wayback, Pigeon Forge',
    image: 'https://images.unsplash.com/photo-1551887373-6edba6f5a3c6'
  }
];

function HotelCarousel() {
  return (
    <section className="hotel-section">
      <div className="section-header">
        <h2>Ski Hotels in United States</h2>
        <button className="view-all">View All →</button>
      </div>

      <div className="carousel">
        {hotels.map((hotel) => (
          <div className="card" key={hotel.id}>
            <img src={hotel.image} alt={hotel.name} />

            <div className="overlay">
              <span className="country">{hotel.country}</span>
              <h3>{hotel.name}</h3>

              <span className="arrow">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HotelCarousel;
