import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FaCartPlus } from 'react-icons/fa';
import logo from '../img/logo.jpg';




const Navbar1 = () => {
  return (
    <div>
<Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img className='logo' src={logo} alt={logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Nosotros</Nav.Link>
            <Nav.Link href="#action2">Servicios</Nav.Link>
            <Nav.Link href="#action2">Servicios</Nav.Link>
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
          <Button variant="outline-success"><FaCartPlus/></Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbar1