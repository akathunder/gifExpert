import React from 'react'

const GiftGridItem = ( props ) => {
    console.log(props);
    return (
        <div className="card animate__animated animate__fadeIn">
            {/* {props.title} */}
            <img src={ props.url } alt={ props.title }/>
            <p> { props.title } </p>
        </div>
    )
}

export default GiftGridItem
