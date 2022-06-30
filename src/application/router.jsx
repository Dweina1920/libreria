import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "../App";
import Login from "../componentes/auth/singup/Singup";
import Welcome from "../pages/Welcome";
import Dessert from "../pages/dessert/Dessert";

export default function Router(){
 

return (
    <BrowserRouter>
        <Routes>
            <Route path='/Home' element ={<Home/>}/>
            <Route path="/" element={<App />} />
            <Route path='/Welcome' element ={<Welcome/>}/>
            <Route path="/dessert/:index" element={<AuthRoute><login /></AuthRoute>}/>
            <Route path="/Login" element={<AuthRoute><Login /></AuthRoute>}/>
            <Route path="/Singup" element={<AuthRoute><Singup></Singup></AuthRoute>}/>
        </Routes>
    </BrowserRouter>
    )

}