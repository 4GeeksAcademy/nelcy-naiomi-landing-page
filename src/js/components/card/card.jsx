
import React from 'react'



export const Card = ({ titulo, contenido, imagen, textButton }) => {



    return (

        <div className="card" style={{ width: '18rem' }}>
            <img src={imagen} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{contenido}</p>
                <a href="#" className="btn btn-primary">{textButton}</a>
            </div>
        </div>
    )

}


