import React from 'react';
import '../styles/header.css'; 


const Header = () =>{
    return(
    <nav className="navbar">
            <div class="logoWrapper">
                <span class="stylish">LJUDIO</span>
                <span class="logo">Logo</span>
            </div>
            <ul class="navigation">
                <li class="parent">Home</li>
                <li class="parent">About</li>
            </ul>
    </nav>
    )
}

export default Header;