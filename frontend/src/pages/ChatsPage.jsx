import React from "react";
import NavBar from "../components/Navbar/NavbarElement";
import "./ChatsPageStyle.css";




const ChatsPage = () => {

    return (
        <div>
            <NavBar />
            <div className="chats-page">

                <div className="contacts-area">
                    <div className="friend-box">
                        <img className="friend-profil-image" src="https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_1280.png" alt="cat eyes"/>
                        <div className="friend-info">
                            <p className="friend-name">Test profil</p>
                            <p className="friend-last-comment">Last text...</p>
                        </div>
                        <p className="friend-last-comment-time">Now</p>
                    </div>
                </div>

                <div className="chat-area">
                    <div className="bubble-area">
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