import { useEffect, useState } from 'react'
import BookItem from './BookItem'
import axios from 'axios'


function ListOfBooks(){
    const [booksApi, setBooksApi] = useState([])

    useEffect(()=>{
     axios.get("https://sheetlabs.com/MELQ/catalog")
        .then((res) => {
            setBooksApi(res.data)
        }) 
    },[])

    return(
        <div className="book-list">
        { booksApi.map((item)=>{       
            return (
                <BookItem  
                key={item.id} 
                titulo={item.titol} 
                autor={item.autoria} 
                descriptors={item.descriptors} 
                isbn={item.isbn}
                />
            )
            }
        )} 
        </div>
    )
}

export default ListOfBooks
