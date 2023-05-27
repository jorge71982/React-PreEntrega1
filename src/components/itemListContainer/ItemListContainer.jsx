import React, { useState, useEffect } from "react";
import Item from "../Card/Item";




const ItemListContainer = () => {
  
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  return (
    <div className="cardItem">
      
        {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
      

    </div>
  );
};

export default ItemListContainer;
