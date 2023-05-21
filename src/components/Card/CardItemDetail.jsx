import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Contador from "../Contador/Contador";

const CardItemDetail = (props) => {
  const { alt, marca, descripcion, imagen, precio, stock } = props;
  const navigate = useNavigate();

  return (
    
      <div className="containerCardItenDatil">
        <div className="row justify-content-center mt-4">
          <div className="divCardItenDatil col-md-6">
            <Card className="divCardItenDatil">
              <Card.Img variant="top-center" src={imagen} alt= {alt} className="card-image"/>
              <Card.Body>
                <Card.Title>{marca}</Card.Title>
                <Card.Text>{descripcion}</Card.Text>
                <Card.Text>Precio: ${precio} + IVA</Card.Text>
                <Card.Text>Cantidad disponible: {stock}</Card.Text>
                <div className="d-grid gap-2">
                  <Contador />
                  <Button variant="outline-success" size="sm">
                    Agregar al carrito
                  </Button>
                  <Button
                    variant="outline-success"
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
