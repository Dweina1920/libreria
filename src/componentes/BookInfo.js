
function BookInfo(props){
    return(
        <div className="info-book">
            <button className="title-book">{props.name}</button>
            <p className="author-book">{props.author}</p>
        </div>
    )
}

export default BookInfo;