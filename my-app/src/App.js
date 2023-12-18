import logo from './logo.svg';
import './App.css';
import Home from './pages/home.js';
import Login from './pages/login.js';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainNavigation from './components/layout/MainNavigation.js';
import layout from './components/layout/layout.js';
function App() {
  return (
    <div>
      <layout>
  
      <Router>
    <Home/>
    <Routes>
      <Route path="/" exact component={Home}/>
      <Route path="/Login" exact component={Login}/>

    </Routes>
    <Login/>
    </Router>
    </layout>
    </div>
    
  );
}

export default App;
