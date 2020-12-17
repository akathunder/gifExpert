import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

    // const categories = [ 'One Punch', 'Samurai X', 'Dragon Ball' ];
    // const [categories, setCategories] = useState([ 'One Punch', 'Samurai X', 'Dragon Ball' ]);
    const [categories, setCategories] = useState([ '']);

    /* const handleAdd = () => {
        setCategories( [...categories, 'Hunter'])
    }
 */

    return (
        <>
            <h2>GifExpertApp</h2>
            {/* <AddCategory setCategories={ setCategories } /> */}
            <AddCategory setCategories={ setCategories } />
            <hr />
            {/* <button onClick={ handleAdd } >Agregar</button> */}
            <ol>
                {/* {
                    categories.map( category =>{
                        return <li key={ category } > { category } </li>
                    } )
                }
            <ol> */}
                {/* {
                    categories.map( category => 
                        <li key={ category } > { category } </li> 
                        )
                    } */}
                {
                    categories.map( category => (<GifGrid 
                        key= { category }
                        category = { category } />) )
                }
            </ol>
        </>
    )
}

export default GifExpertApp
