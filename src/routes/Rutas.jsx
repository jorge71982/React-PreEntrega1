import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contacto from "../pages/Contacto";
import Nosotros from "../pages/Nosotros";
import Servicios from "../pages/Servicios";
import Navbar1 from "../components/Navbar/Navbar1";
import ItemDetail from "../pages/ItemDetail";
import ProductProvider from "../context/ProductProvider";
import CarProvider from "../context/CarProvider";
import Car from "../pages/Car";

const Rutas = () => {
  return (
    <ProductProvider>
      <CarProvider>
        <BrowserRouter>
          <Navbar1 />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/item/:id" element={<ItemDetail />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/Servicios" element={<Servicios />} />
            <Route path="/car" element={<Car />} />
          </Routes>
        </BrowserRouter>
      </CarProvider>
    </ProductProvider>
  );
};

export default Rutas;
