import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {FaTrashAlt } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';

const CarCard = (props) => {
    const { descripcion, imagen, count, precio, alt } = props
  return (
    <Card className= "flex-row" style={{ maxWidth: "500px"}}>
      <Card.Img variant="top" src={imagen} alt ={alt} style={{ width: "7rem" }}/>
      <Card.Body className= "d-flex">
        <Card.Title>{descripcion}</Card.Title>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Cantidad {count}</ListGroup.Item>
        <ListGroup.Item>Precio: ${precio}</ListGroup.Item>
      </ListGroup>
        <Button variant="primary"><FaTrashAlt/> Eliminar</Button>
      </Card.Body>
    </Card>
  );
};

export default CarCard;
