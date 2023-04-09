import { useState, useEffect } from 'react';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';




//React cada vez que detecta un cambio en el componente lo vuelve renderizar/ejecutar
//Hay ciertas funciones que pueden mantener el estado de un componente para que
//no vuelva a ejecutar funciones que ya ejecuto.
export const GifGrid = ({ category }) => {
//Nunca colocar la ejecucion o el llamado de una funcion dentro de un funcional component
//porque cada vez que se renderice, se volvera a llamar la funcion

  //customHook
  const { images, isLoading } = useFetchGifs( category );

  console.log({isLoading });

  return ( 
    <>

      <h3>{ category }</h3>
      {
          //Condicional terneario corto
          isLoading && ( <h2>Cargando...</h2> )

      }

      <div className="card-grid">
          { 
          
            images.map(
              ( (image) => 
                (
                    <GifItem 
                    key={ image.id }
                    { ...image }
                    //Con el operador spread se esparsen todas las propiedades de la imagen.
                    //En este caso el elemento gifitem recibira cada una de las propiedades de la imagen 
                    />
                    
                    
                  )
                  
                )
            ) 
          
          }
      </div>


    </>
  )
}


