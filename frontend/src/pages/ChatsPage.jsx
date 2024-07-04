import React from "react";
import NavBar from "../components/Navbar/NavbarElement";
import { useEffect } from "react";
import "./ChatsPageStyle.css";
import { createElement } from "react";
import HomePage from "./HomePage";



const ChatsPage = () => {
    /*
    useEffect(() =>{
        const script = document.createElement("script");
        script.src = HomePage;
        script.async = true;
        var bubbleArea = document.getElementsByClassName("bubble-area")[0];
        
        document.body.appendChild(script);
    }, []);
    */

    return (
        <div>
            <NavBar />
            <h1>Chat Page</h1>
            <div className="main">

                <div className="contacts-area">
                    <h1>Contacts</h1>
                </div>

                <div className="chat-area">
                    <div className="bubble-area">
                        <h1>Bubbles</h1>
                    </div>
                    <div className="commenting-area">
                        <input type="text" className="comment-section" placeholder="Comment here..."/>
                        <button className="sending-button" onClick={()=>getText(this)}>Send</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

function getText(page){
    console.log("getText is called");
    var commentSection = document.getElementsByClassName("comment-section")[0];
    console.log(commentSection.value);
    createBuble(commentSection.value);
    commentSection.value = "";
}

function createBuble(text){
    var makeDiv = document.createElement("div");
    var containerDiv = document.createElement("div");
    var bubbleArea = document.getElementsByClassName("bubble-area");

    makeDiv.innerHTML = text;
    makeDiv.style.backgroundColor = "blue";
    makeDiv.style.maxWidth = "15rem";

    containerDiv.className = "container";
    containerDiv.style.display = "block";
    containerDiv.style.backgroundColor = "red";
    
    if(text.includes("1")){
        makeDiv.style.marginLeft = "auto";
    }
    else if(text.includes("2")){
        makeDiv.style.marginRight = "auto";
    }
    containerDiv.appendChild(makeDiv);
    
    document.getElementsByClassName("bubble-area")[0].appendChild(containerDiv);
}

export default ChatsPage;