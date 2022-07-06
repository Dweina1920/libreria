import Header from "../componentes/Header";


function Ingresa(){
    return(
        <div>
            <Header/>
        
        <div className="principal-circle">
            <div className="second-box">
                <p className="log">Ingresa tu Usuario</p>
                </div>
        </div>


        <article className="us-box">
            <p className="text-usuario">Usuario:</p>
            <input className="usuario-box"></input>
        </article>
        <article >
            <p className="text-contraseña">Contraseña:</p>
            <input className="usuario-box2"></input>
        </article>

            <button className="btn-ing">entra</button>

  


            
</div>        
    )
}

export default Ingresa;