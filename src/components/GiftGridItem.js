import React from 'react'

const GiftGridItem = ({id, titulo, url}) => {

    // console.log(id,titulo,url);

    return (
        <div className="card animate__animated animate__lightSpeedInLeft">
            <img src={url} alt={titulo}/>
            <p> {titulo}</p>
        </div>
    )
}

export default GiftGridItem
