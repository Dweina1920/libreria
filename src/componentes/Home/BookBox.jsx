import books from "../../assets/data/violetbooks.json";
import BookItem from "./BookItem";
import React, { useEffect, useState } from "react"
import axios from "axios";


function BookBox() {

 



   books.violetBooks.map((book) => {
        return (<BookItem key={book.id} name={book.BookName} author={book.Author} image={book.Image} />)
    }
)
    return (
        <div className="book-list">
            <p >hi</p>


        </div>

    )
};





export default BookBox;