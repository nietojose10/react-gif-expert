import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
        getImages(category);
        
    },
        //Los corchetes vacios indican que solo se llamara la funcion que se coloque dentro del useEffect
        //La primera vez que se construya el componente.
        []
    )
  
    return {
        images,
        isLoading
    }

}
