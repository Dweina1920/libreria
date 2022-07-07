

export default function BookDetail(props){

return(
    <div className="hi">
    <div className="img-detail">
    <p>imagen</p>
    </div>
    <div>
        <p className="autor-detail">{props.author}</p>
        <p className="titulo-detail">{props.title}</p>
        <p className="description-detail">f</p>

    </div>
</div>


)
}