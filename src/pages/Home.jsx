import Header from "../Componentes/Header.jsx";
 import BookBox from "../Componentes/Home/BookBox.jsx";
 import { useState, useEffect } from 'react';
 import axios from "axios";
 import BookItem from "../Componentes/Home/BookItem.jsx";
import BookDetail from "../Componentes/BookDetail.jsx";


 
     function Home() {
      const [books, setBooks] = useState([])
      const [isShown, setIsShown] = useState(false);
      const [image, setImage] = useState([])

 

      useEffect(() => {
          axios.get("https://sheetlabs.com/MELQ/catalog").then((res) => {
  
  
              setBooks(res.data)
              console.log(books)
  
          })
      }, 
      [])

      useEffect(() => {
        axios.get("").then((res) => {
          
        })

      })
         

      const handleClick = (id) => {
            setIsShown(true);
       

            //titulo
            console.log(id.target)
          
          };



      



         return (
            <div className="container">
                 <Header/>
               {isShown && <BookDetail/> }
                 <div>
                
                  {books.map((item)=>{
                     
                    return <BookItem show={handleClick} key={item.isbn} titulo={item.titol} autor={item.autoria} descriptors={item.descriptors} />
                  }
                  )}
                  </div>
           
           </div>
       
           
      
    )
 }
 
    export default Home;
