import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const CardItems = (props) => {
  const { titulo, descripcion, imagen, precio, stock } = props;

  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Precio ${precio}</ListGroup.Item>
        <ListGroup.Item>Cantidad disponible {stock}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Agregar al carrito</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CardItems;
