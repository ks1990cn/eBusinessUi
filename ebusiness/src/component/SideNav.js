// SideNav.js

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../componentcss/SideNav.css'
function SideNav() {
  return (
    <div class="navbar transparent navbar-inverse navbar-fixed-top">
      <Navbar expand="lg" className="navbar-inner"> 
      <Container>
        <Navbar.Brand href="#home">E-Business</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#bucket">Bucket</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#reports">Reports</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
  );
}

export default SideNav;
