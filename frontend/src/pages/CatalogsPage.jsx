import React, { useEffect, useState } from "react";
import NavBar from "../components/Navbar/NavbarElement";
import "../../reset.css";
import "./CatalogsPage.css";


const CatalogsPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:5000/catalog/users")
        .then((res) => {
            console.log(res);
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setUsers(data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);  // Handle fetch errors
        });
    }, []);
    return(
        <>
            <NavBar/>
            <div className="catalogs-page">
                <h1>Catalog page</h1>
                <div className="container-users">
                    <div className="user-box"> 
                        <div className="profil-image">
                            <img src="https://i.pinimg.com/736x/87/d0/98/87d098d886d3fab2af463c09b65d7b44.jpg" alt="image profil" />
                        </div>
                        <div className="infos">
                            <p>Nom: Test nom</p>
                            <p>Prenom: Test pronom</p>
                            <p>Mots de passe: test</p>
                        </div>
                        <div className="user-button">
                            <button type="button">...</button>
                        </div>
                    </div>
                </div>
                <div>
                    {users.map((user) => {
                        return(
                            <div className="container-users">
                                <div key={user._id} className="user-box"> 
                                    <div className="profil-image">
                                        <img src={user.profilImage} alt="image profil" />
                                    </div>
                                    <div className="infos">
                                        <p>Nom: {user.nom}</p>
                                        <p>Prenom: {user.prenom}</p>
                                        <p>Mots de passe: {user.motsDePasse}</p>
                                    </div>
                                    <div className="user-button">
                                        <button type="button">...</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default CatalogsPage;