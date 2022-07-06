import { Link } from "react-router-dom";
import Header from "../Componentes/Header";
import "../index.css";
import React from "react";


function Welcome(){
    return(
        <div className="welcome">
            <Header/>
            <div className="div-welcome">
                    <p className="title-welcome">Bienvenidos a Violet Library</p>
                    <Link className="button-welcome" to="/Home">➨ Adelante</Link>
            </div>
        </div>
    )

}

export default Welcome;
