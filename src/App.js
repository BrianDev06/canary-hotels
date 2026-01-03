import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Information from "./components/Information/Information";
import HotelCarousel from "./components/HotelCarousel/HotelCarousel";

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (reserva) => {
    setCarrito([...carrito, reserva]);
  };

  // NUEVO: Función para borrar un elemento específico por su índice
  const eliminarDelCarrito = (indiceAEliminar) => {
    const nuevoCarrito = carrito.filter((_, index) => index !== indiceAEliminar);
    setCarrito(nuevoCarrito);
  };

  return (
    <div>
      {/* CAMBIO: Pasamos el carrito entero y la función de borrar */}
      <Header 
        carrito={carrito} 
        eliminarDelCarrito={eliminarDelCarrito} 
      />
      
      <Hero />
      <About />
      <Services agregarAlCarrito={agregarAlCarrito} />
      <Information />
      <HotelCarousel />
    </div>
  );
}

export default App;