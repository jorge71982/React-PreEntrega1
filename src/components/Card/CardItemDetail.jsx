import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Contador from "../Contador/Contador";

const CardItemDetail = (props) => {
  const { marca, descripcion, imagen, precio, stock } = props;
  const navigate = useNavigate();

  return (
    
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <Card>
              <Card.Img variant="top-center" src={imagen} className="card-image"/>
              <Card.Body>
                <Card.Title>{marca}</Card.Title>
                <Card.Text>{descripcion}</Card.Text>
                <Card.Text>Precio: ${precio} + IVA</Card.Text>
                <Card.Text>Cantidad disponible: {stock}</Card.Text>
                <div className="d-grid gap-2">
                  <Contador />
                  <Button variant="info" size="sm">
                    Agregar al carrito
                  </Button>
                  <Button
                    variant="info"
                    size="sm"
                    onClick={() => navigate(`/`)}
                  >Volver</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    
  );
};

export default CardItemDetail;
