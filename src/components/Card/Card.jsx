import './Card.css';

function Card({ img, title, description, price }) {
  return (
    <div className="card-container">
      {img && <img src={img} alt={title} style={{ width: '100%' }} />}
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{price}</span>
      <button>Ver más</button>
    </div>
  );
}

export default Card;
