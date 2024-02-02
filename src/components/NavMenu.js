import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../componentsCSS/NavMenu.css';
import { Link, useNavigate } from 'react-router-dom'; // Import useHistory
import LogoImage from '../homelogo.png';
import ShoppingCartLogo from './ShoppingCartLogo'; // Import the ShoppingCartLogo component

const SideNav = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [cartNumberOfItems, setCartNumberOfItems] = useState(props.cartItems.length); // State for cart items
  const navigate = useNavigate(); // Initialize useHistory hook

  useEffect(() => {
    setCartNumberOfItems(props.cartItems.length)
  },[props.cartItems]);
  useEffect(() => {
    // Check login status from localStorage
    const userIsLogged =
      localStorage.getItem('isauthenticated') &&
      localStorage.getItem('isauthenticated').toLowerCase() === 'true';
    setIsLoggedIn(userIsLogged);
  }, []); // Run only once when the component mounts

  const handleLogout = () => {
    // Perform logout logic here
    localStorage.setItem('isauthenticated', 'false'); // Update localStorage
    setIsLoggedIn(false); // Update state
    navigate('/login', { replace: true }); // Redirect to login page after logout
  };

  return (
    <div className="navbar transparent navbar-inverse navbar-fixed-top">
      <Navbar expand="lg" className="navbar-inner">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img src={LogoImage} alt="E-Business" style={{ height: '20px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Render either Login or Logout link based on isLoggedIn state */}
              {isLoggedIn ? (
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              ) : (
                <></>
              )}
              {/* Render Login link only if the user is not logged in */}
              {!isLoggedIn && (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
              {isLoggedIn && (   <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>)}
              {isLoggedIn && ( <Nav.Link as={Link} to="/report">
                Reports
              </Nav.Link>)}
              {/* Add ShoppingCartLogo with item count and link to the cart */}
              {isLoggedIn && (<ShoppingCartLogo itemCount={cartNumberOfItems} onClick={() => navigate('/shoppingcart')} />)}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default SideNav;
