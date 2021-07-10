import React from 'react'

export const GifGridItem = ( {id, title, url} ) => {

    //console.log({id, title, url});

    return (
        <div className="card animate__animated animate__fadeIn"> {/*No usar class nada mas, ya que si no , se referira a una clase de javascript, no una de css, usar className*/}
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
