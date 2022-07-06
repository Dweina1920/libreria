import { Link } from "react-router-dom";
import "../index";


function Header() {
    return (
        <div className="header">
            <p className="header-logo">Violet Library</p>
            <div className="header-right">
            
             <Link to="/Home" className="header-button2" id="header-create">HOME</Link>
             <Link to="/Formulario" className="header-button3" id="header-create">CREATE</Link>
            <Link to="/Ingresa" className="header-button4" id="header-registration">INGRESA</Link>
            <Link to="/Registrate" className="header-button5" id="header-create">REGISTRATE</Link>
               
                
            </div>


        </div>
      
    );
  }
  
  export default Header;