import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ItemDetail from "../pages/ItemDetail";
import Contacto from '../pages/Contacto'
import Navbar1 from '../components/Navbar/Navbar1'

const Rutas = (props) => {
  return (
    <BrowserRouter>
        <Navbar1/>
        {props.children}
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/item/:id' element={<ItemDetail/>} />
        <Route path="/contacto" element={<Contacto/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
