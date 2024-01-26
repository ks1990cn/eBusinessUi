import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../componentsCSS/NavMenu.css';
import { Link } from 'react-router-dom';
import LogoImage from '../homelogo.png'; 

function SideNav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  useEffect(() => {
    // Check login status from localStorage
    const userIsLogged = (localStorage.getItem('isauthenticated') && localStorage.getItem('isauthenticated').toLowerCase()) === 'true';
    setIsLoggedIn(userIsLogged);
  }, []); // Run only once when the component mounts

  const handleLogout = () => {
    // Perform logout logic here
    localStorage.setItem('isauthenticated', 'false'); // Update localStorage
    setIsLoggedIn(false); // Update state
    // Redirect to login page or perform any other necessary actions
  };

  return (
    <div className="navbar transparent navbar-inverse navbar-fixed-top">
      <Navbar expand="lg" className="navbar-inner"> 
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img src={LogoImage} alt="E-Business" style={{height:'20px'}}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Render either Login or Logout link based on isLoggedIn state */}
              {isLoggedIn ? (
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              )}
              <Nav.Link as={Link} to="/bucket">Bucket</Nav.Link>
              <Nav.Link as={Link} to="/report">Reports</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default SideNav;
