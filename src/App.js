import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import LogInForm from './components/LogIn';
import SignupForm from './components/SignUp';
import Cart from './components/Cart';
import Shipping from './components/Shipping';
import ThankYou from './components/Thankyou';
import { addToCart } from './components/Actions';
import "bootstrap/dist/css/bootstrap.min.css";  

function App() {
  const cartItems = useSelector((state) => state.cartItems || []); 
  const dispatch = useDispatch(); // get dispatch function

  // Add product to the cart
  const handleBuy = (product) => {
    dispatch(addToCart(product)); // dispatch the addToCrt action
  };

  // Calculate the total price
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.amount, 0);
  };

  return (
    <div className="App">
      <Navbar cartItemCount={cartItems.length} />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products onBuy={handleBuy} />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LogInForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} totalPrice={calculateTotalPrice()} />}
        />
      </Routes>
    </div>
  );
}

export default App;
