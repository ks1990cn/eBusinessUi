// ShoppingCartLogo.js
import React from 'react';
import ShoppingCartImage from '../shopping-cart-outline-svgrepo-com.svg';
import '../componentsCSS/ShoppingCartLogo.css'
const ShoppingCartLogo = ({ itemCount, onClick }) => {
  return (
    <div onClick={onClick} className="shopping-cart-container" style={{ cursor: 'pointer' }}>
      <img src={ShoppingCartImage} alt="Shopping Cart" className="shopping-cart-img" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default ShoppingCartLogo;
