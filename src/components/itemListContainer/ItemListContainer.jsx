import React from "react";
import Card from "../Card/CardItems";
import data from "../../data.json";

const ItemListContainer = () => {
  const dataArray = Object.values(data);

  return (
    <div className="cardItem">
      {dataArray.map((articulo, index) => (
        <Card
          key={index}
          titulo={articulo.marca}
          precio={articulo.precio}
          descripcion={articulo.descripcion}
          stock={articulo.stock}
          imagen={articulo.img}          
        />
      ))}
    </div>
  );
};

export default ItemListContainer;
