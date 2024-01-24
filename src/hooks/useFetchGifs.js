import { useEffect } from "react";
import { useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    /* useEffect(() => {
        getGifs(category).then((images) => {
            setImages(images)
        });
    }, [category]); */

    const getImages = async(category) => {
        const newImages = await getGifs(category);
        setImages(newImages)
        setIsLoading(false);
    }

    useEffect(() => {
        getImages(category)
    }, [category]);

  return {
    images,
    isLoading
  }
}
