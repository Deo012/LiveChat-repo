import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthPage from "./pages/AuthPage";
import ChatsPage from "./pages/ChatsPage";
import HomePage from "./pages/HomePage";


export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element = {<HomePage />}/>
        <Route path="/authPage" element = {<AuthPage />}/>
        <Route path="/chatsPage" element = {<ChatsPage />}/>
      </Routes>
    </BrowserRouter>
  );
}