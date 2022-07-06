import { Link } from "react-router-dom";
import React from "react";


function BookInfo(props){
    return(
        <div className="info-book">
            <Link to={"/InfoLibro"} className="title-book">{props.name}</Link>
            <p className="author-book">{props.author}</p>
        </div>
    )
}

export default BookInfo;