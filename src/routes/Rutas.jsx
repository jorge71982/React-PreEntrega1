import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ItemDetail from "../pages/ItemDetail";
import Contacto from '../pages/Contacto'
import Nosotros from '../pages/Nosotros'
import Servicios from '../pages/Servicios'
import Navbar1 from '../components/Navbar/Navbar1'

const Rutas = () => {
  return (
    <BrowserRouter>
        <Navbar1/>        
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/item/:id' element={<ItemDetail/>} />
        <Route path="/Contacto" element={<Contacto/>} />
        <Route path="/Nosotros" element={<Nosotros/>} />
        <Route path="/Servicios" element={<Servicios/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
