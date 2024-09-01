import React from "react";
import { Link, Outlet} from "react-router-dom";
import "../../../reset.css";
import "./NavbarElementStyle.css";


const NavBar = () => {
    return (
        <div className = "navbar-container">
            <nav className="navbar">
                <ul>
                    <li><Link to= "/">Home</Link></li>
                    <li><Link to= "/chatsPage">Chat Page</Link></li>
                    <li><Link to= "/authPage">Auth Page</Link></li>
                    <li><Link to= "/catalogsPage">Catalog</Link></li>
                </ul>
                <div>
                    <li> <Link to= "/connexionPage">Connexion</Link></li>
                </div>
            </nav>
            <Outlet/>
        </div>
    );
};

export default NavBar;