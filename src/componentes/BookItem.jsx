import Emoticonos from "./Emoticonos";
import React from "react"
import AuthorName from "./AuthorName";
import ImageBook from "./ImageBook";

function BookItem(props){
    
    return(
        <div className="container-book">
            <div className="big-box">
              <ImageBook isbn={props.isbn}/>
            </div>

            <div className="small-box">
                <Emoticonos/>
                <AuthorName show={props.show} titulo={props.titulo} autor={props.autor}/>
            </div>
        </div>
    )
}
export default BookItem;