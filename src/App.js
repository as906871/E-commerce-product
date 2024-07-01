import { Route,BrowserRouter as  Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import ProductPage from './Page/ProductPage';
import Home from './Page/Home';
import CartPage from './Page/CartPage';
import useCart from './Common/useCart';
function App() {
  const { cartItems, addToCart, removeFromCart, updateQuantity } = useCart();

  return (
    <Router>
      <Header cartItemCount={cartItems.length}/>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductPage addToCart={addToCart} />} />
        <Route path="/cart" element={
          <CartPage 
            cartItems={cartItems} 
            removeFromCart={removeFromCart} 
            updateQuantity={updateQuantity} 
          />
        } />
      </Routes>
    </Router>
  );
}

export default App;