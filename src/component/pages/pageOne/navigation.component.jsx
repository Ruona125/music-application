import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import music from './images/music-note.svg'
import './styles/styles.component.css'

const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="TopNav" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={music}
            width="30"
            height="30"
            className="d-inline-block align-top"
            style={{paddingRight:"8px"}}
          />{" "}
          Emerald Music
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features" className="LinkText">Features</Nav.Link>
            <Nav.Link href="#pricing" className="LinkText">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className="LinkText">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="LinkText">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
