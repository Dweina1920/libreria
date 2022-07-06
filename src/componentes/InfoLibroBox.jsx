import React from "react";
import books from "../assets/data/violetbooks.json";
import InfoLibro from "../pages/InfoLibro";

function InfoLibroBox() {
    const listBook = books.violetBooks.map((book) => {
        return (<InfoLibro key={book.id} name={book.BookName} author={book.Author} image={book.Image} />)

    }
    )
    return (
        <div>
            {listBook}
            
           
        </div>

    )
};





export default InfoLibroBox;