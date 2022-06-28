import Emoticonos from "../componentes/Emoticonos";
import BookInfo from "../componentes/BookInfo";


function BookItem(props){
    
    return(
       
        <div className="container-book">
            <div className="big-box">
                <img className="imagen-box" src={props.image} alt="imagen libro"></img>
            </div>

            <div className="small-box">
                <Emoticonos/>
                <BookInfo name={props.name} author={props.author}/>
            </div>
        </div>
    )
}
export default BookItem;