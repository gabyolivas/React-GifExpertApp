import React, { useState } from 'react';
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['París','Buenos Aires','New York'];

    // Hook
    const [ categories, setCategories ] = useState(['París']);

    /*
    // Función Add   
    const handleAdd = () => {
        setCategories( (c) => [...categories, 'Londres']);  // Spread para arrays
    }
    */
    
    return (
        <>
            <h2>Buscando GIFs</h2>
            <AddCategory setCategories={ setCategories }/>
            
            <hr/>
            <ol>
                {
                    categories.map( category  => (
                        <GifGrid 
                          key = {category}  
                          category = {category}/>
                    ))
                }
            </ol>

        </>
    );
}

export default GifExpertApp;