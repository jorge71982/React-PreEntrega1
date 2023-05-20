import React, { Fragment, useEffect, useState } from "react";
import CardItemDetail from "../components/Card/CardItemDetail";
import data from "../data.json";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null); 
  const [loading, setLoading] = useState(true);
  const items = data;

  useEffect(() => {
    setTimeout(() => {
      const selectedItem = items.find((itemData) => itemData.id === id);
      setItem(selectedItem);
      setLoading(false);
    }, 1000);
  }, [id, items]); 

  return (
    <Fragment>
      {loading && <h1>Cargando..</h1>}
      {!loading && item && (
        <div>
          <CardItemDetail items={item} id = {id} />
        </div>
      )}
    </Fragment>
  );
};

export default ItemDetail;
