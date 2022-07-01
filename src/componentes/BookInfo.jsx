
function BookInfo(props){
    return(
        <div className="info-book">
            <p className="title-book">{props.name}</p>
            <p className="author-book">{props.author}</p>
        </div>
    )
}

export default BookInfo;