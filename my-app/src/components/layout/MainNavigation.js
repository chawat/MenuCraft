import { Link } from "react-router-dom";
import React, { Component } from 'react';


function MainNavigation(){
    
return(

<header >
    <div >React Meetups</div>
    <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/Login'>Login</Link>
            </li>
            
        </ul>
    </nav>
</header>

);

}

export default MainNavigation;