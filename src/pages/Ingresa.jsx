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
            <div className="usuario-box"></div>
        </article>
        <article >
            <p className="text-image">Contraseña:</p>
            <div className="usuario-box2"></div>
        </article>

            <button className="btn-ing">entra</button>









</div>        
    )
}

export default Ingresa;