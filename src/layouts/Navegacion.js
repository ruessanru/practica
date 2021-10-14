import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Navegacion() {
    
  
    return (
     
            <Navbar bg="success" variant="dark" expand="lg">
              <Container>
                <Navbar.Brand as = {NavLink} to={'/'}>Colombia Rural</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link as={NavLink} to={'/'}>Inicio</Nav.Link>
                    <Nav.Link  as={NavLink} to={'/nosotros'}>Nosotros</Nav.Link>
                    <NavDropdown title="Ingresar" id="basic-nav-dropdown">
                      <NavDropdown.Item  as={NavLink} to={'/registrarse'}>Nuevo Usuario</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item  as={NavLink}  to={'/login'}>Actualizar</NavDropdown.Item>
                      
                    </NavDropdown>
                    <Nav.Link as={NavLink} to={'/consultar'}>Consultas</Nav.Link>
                    <Nav.Link as={NavLink} to={'/contacto'}>Contacto</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
    );
  }
  
  //render(<NavDropdownExample />);

  export  {Navegacion}













