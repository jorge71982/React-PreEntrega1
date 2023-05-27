import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import {useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Item = (props) => {
const { id, marca, descripcion, imagen, precio, stock , alt} = props;

  const navigate = useNavigate()
  

  return (
    <Card className="CardItem" style={{ width: "15rem" }}>
      <Card.Img variant="top" src={imagen} alt= {alt}/>
      <Card.Body>
        <Card.Title>{marca}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Precio ${precio} + IVA</ListGroup.Item>
        <ListGroup.Item>Cantidad disponible {stock}</ListGroup.Item>
      </ListGroup>
      <div className="d-grid gap-2">
      <Button className="fw-bold" variant="outline-success" size="sm" onClick= {() => navigate(`/item/${id}`)}>
      Ver mas
      </Button>
    </div>
    </Card>
  );
};

export default Item;
