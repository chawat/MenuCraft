// import logo from './logo.svg';
// import './App.css';
// import Home from './pages/home.js';
// import Login from './pages/login.js';
// import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import MainNavigation from './components/layout/MainNavigation.js';
// import layout from './components/layout/layout.js';
// function App() {
//   return (
//     <div>
//       <layout>
  
//       <Router>
//     <Home/>
//     <Routes>
//       <Route path="/" exact component={Home}/>
//       <Route path="/Login" exact component={Login}/>

//     </Routes>
//     <Login/>
//     </Router>
//     </layout>
//     </div>
    
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home.js';
import Login from './pages/login.js';
import Menu from './pages/menu.js';
import ContactUs from './pages/contactus.js';
import MainNavigation from './components/layout/MainNavigation.js';
import Layout from './components/layout/layout.js'; // Ensure proper import

function App() {
  return (
    <Router>
      {/* <Layout> */}
        {/* MainNavigation component can be placed here if it's intended to be present on all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contactus" element={<ContactUs/>} />
        </Routes>
      {/* </Layout> */}
    </Router>
  );
}

export default App;

