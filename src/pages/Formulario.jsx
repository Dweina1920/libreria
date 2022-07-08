import Header from "../componentes/Header";


function Formulario() {
    return (
        <div>
        <Header/>
        
        <div className="principal-box">
            
             <div className="little-box">
                <p className="text-little">Porfavor complete el formulario para crear una targeta</p>
             </div>


            <article className="form-box-1">
                <p className="text">Titulo:</p>
                <input className="search-bar-1"></input>
            </article>
            <article>
                <p className="text-imgn">Imagen URL:</p>
                <input className="search-bar-2"></input>
            </article>
            <article>
                <p className="text-imgn">Autor:</p>
                <input className="search-bar-3"></input>
            </article>
            <article>
                <p className="text-gener">Genero:</p>
                <input className="search-bar-4"></input>
            </article>


            </div> 


            <div>
                
            <button className="buttons-purple">Crear</button>
            <button className="buttons-purple-2">Cancelar</button>
    
            </div>

        
            </div>
           
            )
}

export default Formulario;