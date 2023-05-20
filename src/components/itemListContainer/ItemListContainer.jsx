import React from "react";
import Item from "../Card/Item";
import data from "../../data.json";

const ItemListContainer = () => {
  const dataArray = Object.values(data);

  return (
    <div className="cardItem">
      {dataArray.map((item) => (
        <Item
          key={item.id} {...item}
         
        />
      ))}
    </div>
  );
};

export default ItemListContainer;
