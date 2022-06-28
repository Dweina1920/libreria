import "../index";
function Header() {
    return (
        <div className="header">
            <p className="header-logo">Violet Library</p>
            <div className="header-right">
                <button className="header-button" id="header-registration">REGISTRATION</button>
                <button className="header-button" id="header-create">CREATE</button>
                <button className="header-button" id="header-home">HOME</button>
            </div>


        </div>
      
    );
  }
  
  export default Header;