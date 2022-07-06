import Emoticonos from "../Emoticonos";

import React from "react"
import AuthorName from "./AuthorName";



function BookItem(props){
    
    return(
        <div className="container-book">
            <div className="big-box">
               
            </div>

            <div className="small-box">
                <Emoticonos/>
               
                <AuthorName show={props.show} titulo={props.titulo} autor={props.autor}/>
            </div>
        </div>
    )
}
export default BookItem;