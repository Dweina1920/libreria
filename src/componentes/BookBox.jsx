import books from "../data/violetbooks.json";
import BookItem from "./BookItem";

function BookBox() {
    const listBooks = books.violetBooks.map((book) => {
        return (<BookItem key={book.id} name={book.bookname} author={book.author} image={book.image} />)
    }
    )
    return (
        <div className="book-list">
            {listBooks}
            
           
        </div>

    )
};





export default BookBox;