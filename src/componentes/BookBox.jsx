import React from "react";
import books from "../assets/data/violetbooks.json";
import BookItem from "./BookItem";

function BookBox() {
    const listBook = books.violetBooks.map((book) => {
        return (<BookItem key={book.id} name={book.BookName} author={book.Author} image={book.Image} />)
    }
    )
    return (
        <div className="book-list">
            {listBook}
            
           
        </div>

    )
};





export default BookBox;