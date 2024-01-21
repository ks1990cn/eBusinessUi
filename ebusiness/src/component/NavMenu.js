// SideNav.js

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../componentcss/NavMenu.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
function SideNav() {
  return (
    <div class="navbar transparent navbar-inverse navbar-fixed-top">
      <Navbar expand="lg" className="navbar-inner"> 
      <Container>
        <Navbar.Brand as={Link} to="/home">E-Business</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/bucket">Bucket</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/report">Reports</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
  );
}

export default SideNav;
