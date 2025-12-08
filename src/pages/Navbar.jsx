import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

function NavBar({toggleTheme, darkMode}){
    return(
        <nav className="navbar">
            <div className=" navbar-content">
                <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
                    <h1>Where in the world?</h1>
                </Link>
            </div>
            
            <button className="theme-btn" onClick={toggleTheme}>
                <span>{darkMode ? "☀️": "🌙"}</span>
                {darkMode ? 'Light Mode': 'Dark Mode'}
                </button>
        </nav>
    )
}
export default NavBar;