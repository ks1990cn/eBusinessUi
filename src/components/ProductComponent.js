// ProductComponent.js
import React from 'react';

const ProductComponent = ({ product, addToCart }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductComponent;
