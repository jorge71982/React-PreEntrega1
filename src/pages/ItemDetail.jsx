import React, { Fragment, useEffect, useState, useContext  } from "react";
import CardItemDetail from "../components/Card/CardItemDetail";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { CarContext } from "../context/CarProvider";




const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const items = products;
  const {addCar} = useContext(CarContext)



  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json()) 
      .then((res) => setProducts(res));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const selectedItem = items.find((itemData) => itemData.id === id);
      setItem(selectedItem);
      setLoading(false);
    }, 1000);
  }, [id, items]); 

  return (
    <Fragment>
      {loading && <h1 className="text-center"><Spinner animation="grow" /></h1>}
      {!loading && item && (
        <div>
          <CardItemDetail addCar={addCar} key={item.id} {...item} />
        </div>
      )}
    </Fragment>
  );
};

export default ItemDetail;
