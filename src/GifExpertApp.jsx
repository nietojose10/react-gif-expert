
import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

//rafc
export const GifExpertApp = () => {
    
    //Por regla general no se puede poner un hook dentro de ninguna sentencia condicional.
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (onNewCategory) => {

        if (categories.includes(onNewCategory)) return;

        setCategories([...categories, onNewCategory])
        //... es llamado operador spread y lo que hace es traer el resto de las categorias al momento de mostrarlas.
    }

  return (
    <>
        {/* Titulo */}
        <h1>GiftExpertAPP </h1>

        {/* Input */}
        <AddCategory 
        
        //setCategories={setCategories}
        onNewCategory={(event) => onAddCategory(event)} 
        />
        {/* Listado de Gif */}
        
        {/* <button onClick={onAddCategory}>Agregar</button> */}

            {
            //React Recomienda no usar el index como key porque react utiliza el valor de 
            //la key para saber que elemento se elimino
              categories.map(
                  category => 
                      //return <li key={ category }> { category } </li>
                    (
                      // <div key={ category }>

                      //     <h3>{ category }</h3>
                      //     <li>{ category }</li>
                      // </div>
                      
                      <GifGrid 
                      key={ category } 
                      category={ category }>

                      </GifGrid>
                      
                    )
                  
              ) 
            }
            {/* <li>ABC</li> */}
            

            {/* Gif Item */}

    </>
  )
}
