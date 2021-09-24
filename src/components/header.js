import React from 'react';
import '../styles/header.css';



const Header = () =>{


    function refreshPage() {
        window.location.reload(false);
      }

    return(
    <nav className="navbar">
            <div className="logoWrapper">
                <span className="stylish">LJUDIO</span>
                <span className="logo">APP</span>
            </div>
            <ul className="navigation">
                <li className="parent"  onClick={refreshPage}>Home</li>
            </ul>
    </nav>
    )
}

export default Header;