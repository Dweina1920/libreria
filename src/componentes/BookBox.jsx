import books from "../assets/data/violetbooks.json";
import BookItem from "./BookItem";

function BookBox() {
    const listBooks = books.violetBooks.map((book) => {
        return (<BookItem key={book.id} name={book.BookName} author={book.Author} image={book.Image} />)
    }
    )
    return (
        <div className="book-list">
            {listBooks}
            
           
        </div>

    )
};





export default BookBox;