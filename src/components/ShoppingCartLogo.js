// ShoppingCartLogo.js
import React from 'react';
import ShoppingCartImage from '../shopping-cart-outline-svgrepo-com.svg';
const ShoppingCartLogo = ({ itemCount, onClick }) => {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer' }}>
      <img src={ShoppingCartImage} alt="Shopping Cart" style={{height:'30px',marginLeft : '10px' }}/>
      <span>{itemCount}</span>
    </div>
  );
};

export default ShoppingCartLogo;
