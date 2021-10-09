import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";


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
                <Router>
                <li className="parent" onClick={refreshPage}><Link to="/" className="routeHome">Home</Link></li>
                <Route exact path="/"/>
                </Router>
            </ul>
    </nav>
    )
}

export default Header;