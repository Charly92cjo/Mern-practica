import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
      <Navbar.Brand  as={NavLink} to="/">
        <h2>Gestor de tareas</h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/projects">
            Proyectos
            {/* <NavLink to="/projects" >Proyectos</NavLink> */}{/*
            renderiza 2 tag a, con as(alias) renderizara como un componente 
             */}
          </Nav.Link>
          <NavDropdown title="Admin">
            <NavDropdown.Item  as={NavLink} to="/admin/users">Usuarios</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link as={NavLink} to="/login">Iniciar Sesión</Nav.Link>
          <Nav.Link as={NavLink} to="/register">Registrarse</Nav.Link>
          <Nav.Link as={NavLink} to="/account">Mi cuenta</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
