import React from 'react';
import Cart from '../Components/Cart';

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  return (
    <div>
      <Cart 
        cartItems={cartItems} 
        removeFromCart={removeFromCart} 
        updateQuantity={updateQuantity} 
      />
    </div>
  );
};

export default CartPage;