import React, { useEffect } from "react";
import NavBar from "../components/Navbar/NavbarElement";
import "./ConnexionPageStyle.css";

const ConnexionPage = () => {
    //script doit etre cree de cette facon a cause de la capacité de react à update les components 
    //de cette manière, on controle quand il est ajouter et enlever du DOM
    useEffect(() => {
        const script = document.createElement("script");

        script.src = "https://kit.fontawesome.com/f2385fabca.js";
        script.async = true;
        script.crossOrigin = "anonymous";

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    },[]);
    return (
        <>
        <div className="connexion-page-main">
            <NavBar/>

            <div className="outer-area">

                <div className="image-pattern-outer-absolute">
                    <img className= "image-pattern-outer" src="https://i.pinimg.com/564x/c6/68/70/c66870b5d9fcf834e256c73b6fd031cb.jpg" alt="image-pattern" />
                </div>

                <div className="inner-area">

                    <div className="inner-area-left">
                        <div className="image-pattern-inner-absolute">
                            <img className="image-pattern-inner" src="https://i.pinimg.com/564x/c6/68/70/c66870b5d9fcf834e256c73b6fd031cb.jpg" alt="Designed by Starline / Freepik" />   
                        </div>
                        <input type="button" className="inner-area-left-button"/>
                        <input type="button" className="inner-area-left-button"/>
                    </div>

                    <div className="inner-area-right">

                        <div className="container-inputs">
                            <img src="https://img.freepik.com/premium-vector/one-line-drawing-minimalist-flower-illustration-line-art-style_717710-207.jpg?w=150" alt="logo" />
                            <div className="username-div">
                                <i className="fa-solid fa-user"></i>
                                <input type="text" name="" className="username-input" placeholder="Username"/>
                            </div>
                            <div className="mdp-div">
                                <i className="fa-solid fa-lock"></i>
                                <input type="text" name="" className="mdp-input" placeholder="Password"/>
                            </div>
                            <input type="button" value="Get Started" className="get-started"/>
                        </div>

                    </div>  

                </div>

            </div>
            
        </div>
        </>
    );
};

export default ConnexionPage;