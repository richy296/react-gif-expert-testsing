import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifsExpertApp = () => {

    const [categories, setCategories] = useState(['Dbz']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories(cat => [newCategory, ...cat])
    }
 
    return (
        <>
            {/* Titulo */}
            <h1>GifsExpertApp</h1>

            {/* Input */}
            <AddCategory 
                onNewCategory = {(newCategory) => onAddCategory(newCategory)}
            />

            {/* Listado de Gif */}
            {/* <button onClick={onAddCategory}>Agregar</button> */}
            { 
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    )
}
