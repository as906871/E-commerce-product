import React from 'react';
import ProductDetails from '../Components/ProductDetails';

const ProductPage = ({ addToCart }) => {
  return (
    <div>
      <ProductDetails addToCart={addToCart} />
    </div>
  );
};

export default ProductPage;