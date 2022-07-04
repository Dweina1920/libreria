import { Link } from "react-router-dom";
import "../index";
import Formulario from "../pages/Formulario";
import Ingresa from "../pages/Ingresa";
import Registrate from "../pages/Registrate"

function Header() {
    return (
        <div className="header">
            <p className="header-logo">Violet Library</p>
            <div className="header-right">
                <Link to="/Ingresa" className="header-button" id="header-registration">INGRESA</Link>
                <Link to="/Formulario" className="header-button" id="header-create">CREATE</Link>
                <Link to="/Registrate" className="header-button" id="header-create">REGISTRATE</Link>
                <button className="header-button" id="header-home">HOME</button>
            </div>


        </div>
      
    );
  }
  
  export default Header;