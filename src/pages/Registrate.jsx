import Header from "../componentes/Header";

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
            <input className="name-box-"></input>
      </article>
      <article>
            <p className="text-email">Correo electronico / Numero telefónico:</p>
            <input className="email-box-"></input>
      </article>
      <article>
            <p className="text-pasword">Contraseña:</p>
            <input className="pasword-box-"></input>
      </article>
      <article>
            <p className="text-reafirm">Porfavor repita la Contraseña:</p>
            <input className="reafirm-box-"></input>
      </article>
    
        <div>
            <button className="btn-go">Registrate</button>
        </div>
    </div>
 )   
}
export default Registrate;