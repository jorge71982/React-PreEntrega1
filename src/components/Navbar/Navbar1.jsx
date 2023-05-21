import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../img/logo.jpg";
import { CardWidget } from "../CardWidget/CardWidget";
import { NavLink } from "react-router-dom";


const Navbar1 = () => {
  const [stateCar, setStateCar] = useState(false);

  const mostrarCarrito = () => {
    setStateCar(!stateCar);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <NavLink to="/">
              <img className="logo" src={logo} alt={logo} />
            </NavLink>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
              <NavLink className="itemNavbar" to= '/Nosotros'>Nosotros</NavLink>
              </Nav.Link>
              <Nav.Link>
              <NavLink className="itemNavbar" to= '/Servicios'>Servicios</NavLink>
              </Nav.Link>
              <Nav.Link>
              <NavLink className="itemNavbar" to= '/Contacto'>Contacto</NavLink>
              </Nav.Link>
            </Nav>
            <Form className="d-flex position-absolute start-50">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 w-100"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Button variant="outline-success" onClick={mostrarCarrito}>
              <CardWidget />
            </Button>
            <h1>{stateCar ? "1" : ""}</h1>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;
