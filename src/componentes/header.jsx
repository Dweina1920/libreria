import { Link } from "react-router-dom";
import "../index";
import Formulario from "../pages/Formulario";

function Header() {
    return (
        <div className="header">
            <p className="header-logo">Violet Library</p>
            <div className="header-right">
                <button className="header-button" id="header-registration">REGISTRATION</button>
                <Link to="/Formulario" className="header-button" id="header-create">CREATE</Link>
                <button className="header-button" id="header-home">HOME</button>
            </div>


        </div>
      
    );
  }
  
  export default Header;