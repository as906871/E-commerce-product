import { useEffect, useState } from 'react';

const useCart = () => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const exist = cartItems.find(item => item.id === product.id);
    if (exist) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  const updateQuantity = (product, quantity) => {
    setCartItems(cartItems.map(item =>
      item.id === product.id ? { ...item, quantity: Number(quantity) } : item
    ));
  };

  return { cartItems, addToCart, removeFromCart, updateQuantity };
};

export default useCart;
