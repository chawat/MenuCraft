
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home.js';
import Login from './pages/login.js';
import Menu from './pages/menu.js';
import ContactUs from './pages/contactus.js';
import Addtomenu from './pages/addtomenu.js';
import Ingredients from './pages/ingredients/ingredients.js';
import Shop from './pages/ingredients/Shop.js';

function App() {
  
  return (
    <div>
    <Router>
      {/* <Layout> */}
        {/* MainNavigation component can be placed here if it's intended to be present on all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/ingredients" element={<Ingredients/>} />
          <Route path="/addtomenu" element={<Addtomenu/>} />
          <Route path="/Shop" element={<Shop/>}/> 
        </Routes>
      {/* </Layout> */}
    </Router>
    </div>
  );
}

export default App;

