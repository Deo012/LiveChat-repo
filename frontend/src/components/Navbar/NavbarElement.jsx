import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className = "navbar">
            <nav className="navFirstPart">
                <ul>
                    <li><Link to= "/">Home</Link></li>
                    <li><Link to= "/chatsPage">Chat Page</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;