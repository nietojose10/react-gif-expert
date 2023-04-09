import { useState } from 'react';

//setCategorias es una desestructuracion del objeto props.
//onNewCategory es una desestructuracion del objeto props.
export const AddCategory = ({onNewCategory}) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) =>{
        console.log(target.value);
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        
        if(inputValue.trim().length <= 1) return;

        //setCategories( categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input
            type="text"
            placeholder="Buscar un gifs"
            value={ inputValue }
            onChange={ (event) => onInputChange(event) }
            //Cuando el argumento se repite se puede obviar el argumento en 
            //Ambas partes y solo llamar a la funcion e.g. onInputChange 
            />
        </form>
        
    )
}
