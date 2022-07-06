
import '../index.css';
import React from 'react';

import Home from "../pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Welcome from "../pages/Welcome";
import InfoLibro from '../pages/InfoLibro';





export default function Router(){


return (
    <BrowserRouter>
        <Routes>
            <Route path='/Home' element ={<Home/>}/>
            <Route path="/" element={<Welcome />} />
            <Route path='/Welcome' element={<Welcome/>}/>
            <Route path='/InfoLibro' element={<InfoLibro/>}/>
         
        </Routes>
    </BrowserRouter>
)
}