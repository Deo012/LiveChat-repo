import React from "react";
import NavBar from "../components/Navbar/NavbarElement";
import { useEffect } from "react";
import "./ChatsPageStyle.css";
import { createElement } from "react";
import HomePage from "./HomePage";



const ChatsPage = () => {

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
                        <input type="text" className="comment-section" placeholder="Comment here..." onKeyDown={onEnterKeyDownHandler}/>
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
    makeDiv.style.maxWidth = "15rem";
    makeDiv.className = "speech";

    containerDiv.className = "container";
    containerDiv.style.display = "block";
    //containerDiv.style.backgroundColor = "red";
    
    if(text.includes("1")){
        makeDiv.style.marginLeft = "auto";
        makeDiv.className = "speech right";
    }
    else if(text.includes("2")){
        makeDiv.style.marginRight = "auto";
        makeDiv.className = "speech left";
    }
    containerDiv.appendChild(makeDiv);
    
    document.getElementsByClassName("bubble-area")[0].appendChild(containerDiv);
}

const onEnterKeyDownHandler = e => {
    if(e.keyCode == 13){
        getText(this);
    }
}

export default ChatsPage;