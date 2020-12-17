import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GiftGridItem from './GiftGridItem';

export const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs( category )

    console.log(loading);

    return (
        <>
        <h3 className='animate__animated animate__fadeIn' > { category } </h3>

        { loading && <p className='animate__animated animate__flash'>loading</p> }

        <div className="card-grid">
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