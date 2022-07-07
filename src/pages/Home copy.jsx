import Header from "../Componentes/Header.jsx";
 
 import { useState, useEffect } from 'react';
 import axios from "axios";
 import BookItem from "../Componentes/BookItem.jsx";
import BookDetail from "../Componentes/BookDetail.jsx";


 
     function Home() {
      const [books, setBooks] = useState([])
      const [isShown, setIsShown] = useState(false);
      const [selectBook, setselectBook] = useState("")
      //const [image, setImage] = useState([])

   
 

      useEffect(() => {
          axios.get("https://sheetlabs.com/MELQ/catalog").then((res) => {
  
  
              setBooks(res.data)
              console.log(books)
  
          })
      }, 
      [])



      function getBookById(isbn) {
        axios({
          method:"get",
          url:`https://openlibrary.org/isbn/${isbn}.json`,
        }).then((res) => setselectBook(res.data));
      }

     {/* function getImageById() {
        let cover = selectBook.covers;
        axios({
          method:"get",
          url:`https://covers.openlibrary.org/b/id/${cove}.jpg`,
        }).then((res) => setImage(res.data));
        console.log(setImage)
      }*/}



      const handleClick = (id) => {
            setIsShown(true);
    
            console.log(id.target)

            if (id != null ) {
              getBookById(id);
              console.log (selectBook);
            }
            return id.isbn;
          
          };

         return (
            <div className="">
                 <Header/>
               {isShown && <BookDetail
                title={selectBook.title}
                author={selectBook.author}
                /> }
                {books.map((item)=>{
                     
                    return (
                      <div onClick={() => handleClick(item.isbn)}>
                    <BookItem 
                    key={item.isbn} 
                    titulo={item.titol} 
                    autor={item.autoria} 
                    descriptors={item.descriptors} 
                    imagen={item.cover}
                    />
                    </div>


                    )
                  }
                  )}
                  
                  </div>
                 
           
        
       
           
      
    )
 }
 
    export default Home;
