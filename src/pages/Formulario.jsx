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
                <p className="text">Titulo</p>
                <div className="search-bar-1"></div>
            </article>
            <article>
                <p className="text-img">Imagen URL</p>
                <div className="search-bar-2"></div>
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