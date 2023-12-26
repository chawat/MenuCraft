import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home.js';
import Login from './pages/login.js';
import Menu from './pages/menu/menu.js';
import ContactUs from './pages/contactus.js';
import Addtomenu from './pages/addtomenu.js';
import Ingredients from './pages/ingredients/ingredients.js';
import Shop from './pages/ingredients/Shop.js';
import Navbar from './pages/navbar/navbar.js';
import backgroundImage from "./images/background.png"

function App() {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: 'wrap content', 
    
  };
  return (
    <Router>
    <div style={containerStyle}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/addtomenu" element={<Addtomenu />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;

