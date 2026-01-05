import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Information from "./components/Information/Information";
import HotelCarousel from "./components/HotelCarousel/HotelCarousel";
import Footer from "./components/Footer/Footer";

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (reserva) => {
    setCarrito((prev) => [...prev, reserva]);
  };

  const eliminarDelCarrito = (index) => {
    setCarrito((prev) => prev.filter((_, i) => i !== index));
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
      <HotelCarousel agregarAlCarrito={agregarAlCarrito} /> 
      <Footer />
    </div>
  );
}

export default App;