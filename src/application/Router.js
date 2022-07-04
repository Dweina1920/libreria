
import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from '../pages/Home'
import Welcome from '../pages/Welcome'
import App from '../App'
import Formulario from '../pages/Formulario'
import Ingresa from '../pages/Ingresa'
import Registrate from '../pages/Registrate'


function Router() {
    
    
    
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/Home' element ={<Home/>}/>
            <Route path='/' element={<App/>} />
            <Route path='/Welcome' element={<Welcome/>}/>
            <Route path='/Formulario' element={<Formulario/>}/>
            <Route path='/Ingresa' element={<Ingresa/>}/>
            <Route path='/Registrate' element={<Registrate/>}/>
        </Routes>
    </BrowserRouter>
)
}
export default Router