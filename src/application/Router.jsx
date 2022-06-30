
import '../index.css';

import Home from "../pages/Home";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Welcome from "../pages/Welcome";





export default function Router(){


return (
    <BrowserRouter>
        <Routes>
            <Route path='/Home' element ={<Home/>}/>
            <Route path="/" element={<Welcome />} />
            <Route path='/Welcome' element={<Welcome/>}/>
         
        </Routes>
    </BrowserRouter>
)
}