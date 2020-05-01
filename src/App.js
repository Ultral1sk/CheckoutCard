import React from 'react';
import CartContainer from './components/CartContainer';
import cartItems from "./cart-items";
import Navbar from './components/Navbar';
import './App.css';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <CartContainer  />

      
    </div>
  );
}

export default App;
