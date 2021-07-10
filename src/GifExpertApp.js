import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    
    //const [categories, setCategories] = useState(['One Punch Man', 'One Piece', 'Boruto']);
    const [categories, setCategories] = useState(['One Punch Man']);

    //Si no uso estados, lo manejo directo del item
    /*const handleAdd = () => { 

        if(document.getElementById('t1').value.trim().length == 0) {
            alert('Debe agregar una categoria');
        } else if(categories.find((category) => category === document.getElementById('t1').value.trim())){
            alert('La categoria ya existe');
        }else{
            setCategories([...categories, document.getElementById('t1').value.trim()])
        }
    };*/

    return (<>
              <h2>GifExpertApp</h2>
              <AddCategory categories={categories} setCategories={setCategories}/>
              <hr></hr>
              
              {/*<input id='t1' type='text'></input>
              <button onClick={handleAdd}>Agregar</button>*/}

              {/*<ol> Asi estaba para poner las categorias en */}
                  {  //Para descomponer la lista y mostrar cada elemento
                     categories.map((category) =>  <GifGrid 
                                                        key={category}
                                                        category={category}/>)
                  }
              {/*</ol>*/}

            </>);
}

export default GifExpertApp;