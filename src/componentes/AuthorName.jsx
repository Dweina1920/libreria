import { Link } from "react-router-dom";
import BookDetail from "./BookDetail";


function AuthorName(props){

   
    return(
        <div className="info-book">
            <p className="title-book" onClick={props.show}>{props.titulo}</p>
            <p  className="author-book" onClick={props.show}>{props.autor}</p>
           
        </div>
        )
    }
    
export default AuthorName;