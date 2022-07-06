import Header from "../componentes/Header.jsx";
 import BookBox from "../componentes/BookBox.jsx";
 import Router from "../application/Router.js";

 
     function Home() {
         return (
            <div className="container">
                 <Header/>
            <div>
                 <BookBox/>
           </div>
       
           
        </div>
    )
 }
 
    export default Home;
