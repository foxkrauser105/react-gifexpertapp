import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({categories, setCategories}) => {
    
    const [inputValue, setInputValue] = useState(''); //Si dejamos el State sin valor, es undefined, y aunque no truena, se ve el error al cambiar el estado
                                                      //Dejarlo asi no es cambio para el usuario y el estado es definido
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length === 0) {
            alert('Debe agregar una categoria');
        } else if(categories.find((category) => category === inputValue.trim())){
            alert('La categoria ya existe');
        }else{
            //podemos solo traer en la props al setCategories, y agregar la categoria solo haciendo referencia con
            // una funcion
            //Pero como hago validacion de que ya exista, por eso lo mando traer
            //setCategories((categories) => [...categories, inputValue.trim()])
            setCategories([inputValue.trim(), ...categories])
            setInputValue('');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmmit}>
                <input 
                    id='t1' 
                    type='text'
                    value={inputValue}
                    onChange={ handleInputChange }
                />
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
