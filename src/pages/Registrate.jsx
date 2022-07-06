import Header from "../componentes/Header";
import React from "react"
function Registrate(){
 return(
    <div>
        <Header/>
    <div className="circle-big">
        <div className="title-regis">
            <p className="parrafo">Rellene los siguientes campos para Registrate</p>
        </div>
    </div>


    
    
        <article>
            <p className="text-name">Nombre Usuario:</p>
            <div className="name-box-"></div>
      </article>
      <article>
            <p className="text-email">Correo electronico / Numero telefónico:</p>
            <div className="email-box-"></div>
      </article>
      <article>
            <p className="text-pasword">Contraseña:</p>
            <div className="pasword-box-"></div>
      </article>
      <article>
            <p className="text-reafirm">Porfavor repita la Contraseña:</p>
            <div className="reafirm-box-"></div>
      </article>
    
        <div>
            <button className="btn-go">Registrate</button>
        </div>
    </div>
 )   
}
export default Registrate;