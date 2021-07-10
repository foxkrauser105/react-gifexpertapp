import React /*, {useState, useEffect}*/ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {

    // Esta parte se va al hook useFetchGifs

    /*const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs({category}).then( setImages ); //con useEffect, solo mando ejecutar el codigo una vez al renderizar la pagina, esto por el segundo argumento
    }, [category]) //como no le mandamos una lista de dependencias, se ejecuta solo una vez
            //setImages no tiene argumento porque etsa implicitamente declarado, por eso ni la funcion de flecha se pone
            // Category se pone en la lista de dependencias, ya ue si cambia, el effect se ejecuta de nuevo*/

    //Cargo un hook, que tiene un setTimeOut, a los 3.5 segundos, resuelve un callback con una funcion de flecha, seteando el state de loading y la data

    //Asi sola, esta funcion se cargara de nuevo siempre
    //Se añadió useEffect en el hook, para solo renderizarse de nuevo al cambiar category
    const {data:images, loading} = useFetchGifs(category); //Con los dos puntos (data:images) renombro la constante

    //console.log(images);

    return (
        (<>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}

            <div className="card-grid">
                {
                    
                    images.map((image) => <GifGridItem key={image.id} {...image} />) /*Con map, recorro el objeto usando funcion de flecha, puedo desestructurar el argumento*/
                                                                                    //Puedo usar el operador spread sin indicar que esos son los elemetos del image, los heredara ya que se llaman igual las props a recibir
                }
                
            </div>
            
        </>)
    )
}
