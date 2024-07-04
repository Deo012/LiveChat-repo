function getText(page){
    console.log("getText is called");
    commentSection = document.getElementsByClassName("comment-section")[0];
    console.log(commentSection.value);
    createBuble(commentSection.value);
}

function createBuble(text){
    var makeDiv = document.createElement("div");
    var bubbleArea = document.getElementsByClassName("bubble-area");
    makeDiv.innerHTML = text;
    makeDiv.style.backgroundColor = "blue";
    bubbleArea.appendChild(makeDiv);
}