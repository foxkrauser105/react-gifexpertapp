import {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //Los custom hooks funcionan como si fueran functional components, pueden tener efectos, pueden usar reducers, contextos, etc
    //Es la "clase" con la carga pesada, y el inicio es el que queda mas limpio

    useEffect(() => {

        getGifs(category)
          .then( (imgs) => {
       
            setState({
                data: imgs,
                loading: false
            })

          } );

    }, [category])

    return state;
}