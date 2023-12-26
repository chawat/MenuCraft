import React from 'react';
import Formadd from './formadd';
import '../styles/addyouritem.css';
import Navbar from "./navbar/navbar";

function Addtomenu() {
  return (
    <div>

    <Navbar/>
    <div>
      <header>
        <h1>ADD YOUR ITEM TO MENU</h1>
      </header>

      <Formadd />

      <footer></footer>
    </div>
    </div>
  );
}

export default Addtomenu;
