import { Link } from "react-router-dom"
import Header from "../componentes/Header"
import "../index.css"
import Router from "../application/Router"



function Welcome(){
    return(
        <div className="welcome">
            <Header/>
            <p className="title-welcome"> Bienvenidos a Violet Librery</p>
            <Link to="/Home">Vamos a Home</Link>
        </div>
    )

}

export default Welcome;