import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { cerrarSesion } from '../connection/autenticacionAcciones';

function Navegacion() {

  const conectado=useSelector(state=>state.auth.conectado);
  const usuario=useSelector(state=>state.auth.usuario);
  const dispatch= useDispatch();
  
    return (
     
            <Navbar bg="success" variant="dark" expand="lg">
              <Container>
                <Navbar.Brand as = {NavLink} to={'/'}>Colombia Rural</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">

                    <Nav.Link as={NavLink} to={'/'}>Inicio</Nav.Link>
                    <Nav.Link  as={NavLink} to={'/nosotros'}>Nosotros</Nav.Link>
                    <Nav.Link as={NavLink} to={'/consultar'}>Consultas</Nav.Link>
                    <Nav.Link as={NavLink} to={'/contacto'}>Contacto</Nav.Link>

                    {conectado &&
                    <NavDropdown title="Registro Formularios" id="basic-nav-dropdown">
                      <NavDropdown.Item  as={NavLink} to={'/datos'}>Datos Generales</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item  as={NavLink}  to={'/conectividad'}>Conectividad</NavDropdown.Item>
                    </NavDropdown>
                    }
                  </Nav>
                  <Nav >
                    {!conectado ?(
                    <NavDropdown title="Ingresar" id="basic-nav-dropdown">
                      <NavDropdown.Item  as={NavLink} to={'/registrarse'}>Nuevo Usuario</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item  as={NavLink}  to={'/login'}>Actualizar</NavDropdown.Item>
                    </NavDropdown>
                    ):(
                   
                    <NavDropdown title={usuario} id="basic-nav-dropdown">
                      <NavDropdown.Item onClick={() => dispatch(cerrarSesion())}>Cerrar Sesión</NavDropdown.Item>
                    </NavDropdown>
                    )}
                  
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
    );
  }
  
  //render(<NavDropdownExample />);

  export  {Navegacion}













