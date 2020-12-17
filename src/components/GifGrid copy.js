import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifts } from '../helpers/getGifs';
import GiftGridItem from './GiftGridItem';

export const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs( category )

    console.log(loading);

    //esto se pasa a custom hook

    // const [images, setImages] = useState([]);

    // useEffect( () => {
    //     getGifts( category )
    //     .then( setImages )
    // }, [ category ])

    // esta funcion se pasa a helpers
    // const getGifts = async() =>{
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=3&api_key=9XdfacpJfFJFcMuXW7EkwEhydj1mX2VI`;
    //     const resp = await fetch( url );
    //     const {data} = await resp.json();

    //     const gifs =  data.map( img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url
    //         }
    //     })

    //     console.log( gifs );
    //     setImages(  gifs  )
    // }

    // // getGifts();

    return (
        <>
            <h3> { category } </h3>

            { loading && <p>loading</p> }
        <div className="card-grid">
            {/* <GiftGridItem  gif={ images }/> */}
            {/* <ol>
            {
                images.map( ({id, title}) => (
                    <li key={ id } > { title } </li> )
                    )
            }
            </ol> */}
            {
                data.map( img => (
                    <GiftGridItem 
                    key={ img.id } 
                    {...img} /> )
                    )
            }
        </div>
        </>
    )
}