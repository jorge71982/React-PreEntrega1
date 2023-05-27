import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import ItemCount from "../Contador/ItemCount";
import { CarContext } from "../../context/CarProvider";

const CardItemDetail = (props) => {
  const { alt, marca, descripcion, imagen, precio, stock, count: count } =
    props;

  const {addCar} = useContext(CarContext)

  const navigate = useNavigate();

  return (
    <div className="containerCardItenDatil">
      <div className="row justify-content-center mt-4">
        <div className="divCardItenDatil col-md-6">
          <Card className="divCardItenDatil">
            <Card.Img
              variant="top-center"
              src={imagen}
              alt={alt}
              className="card-image"
            />
            <Card.Body>
              <Card.Title>{marca}</Card.Title>
              <Card.Text>{descripcion}</Card.Text>
              <Card.Text>Precio: ${precio} + IVA</Card.Text>
              <Card.Text>Cantidad disponible: {stock}</Card.Text>
              <div className="d-grid gap-2">
                <ItemCount/>
                <Button
                  variant="outline-success"
                  size="sm"
                  onClick={() =>
                    addCar({
                      alt,
                      marca,
                      descripcion,
                      imagen,
                      precio,
                      stock,
                      count,
                    })
                  }
                >
                  Agregar al carrito
                </Button>
                <Button
                  variant="outline-success"
                  size="sm"
                  onClick={() => navigate(`/`)}
                >
                  Volver
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CardItemDetail;
