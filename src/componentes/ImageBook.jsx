import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ImageBook({isbn}) {

   
     const [image, setImage] = useState([])

     const GetCover = (item)=>{
        let cover= false
        if(item.covers){
            cover =  item.covers
        }
        return cover

    }
    
    let GetImage = ()=>{
     
     }
   


    useEffect(()=>{
     
       fetch(`https://openlibrary.org/isbn/${isbn}.json`).then(response => response.json())
      .then(data => setImage(data))
      
    },[])




   
  


        if(GetCover(image)){
            return (
                <img width='100%' src={`https://covers.openlibrary.org/b/id/${GetCover(image)}.jpg`} alt={isbn}  />
            )
        }

        return (
            <img width='100%' src="https://www.gipuzkoa.eus/o/DGN-gipuzkoa2021-theme/images/izfe/img-not-found.png" alt={isbn}  />
        )
        }

export default ImageBook