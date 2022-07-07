import React from 'react'

function ImageBook({isbn}) {

    const getImage = ()=>{
        return false;
    }


        if(getImage()){
            return (
                <img width='100%' src="https://covers.openlibrary.org/b/id/10860835.jpg" alt={isbn}  />
            )
        }

        return (
            <img width='100%' src="https://www.gipuzkoa.eus/o/DGN-gipuzkoa2021-theme/images/izfe/img-not-found.png" alt={isbn}  />
        )
        }

export default ImageBook