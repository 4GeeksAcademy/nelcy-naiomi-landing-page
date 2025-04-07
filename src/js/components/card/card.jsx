
import React from 'react'



export const Card = ({ titulo, contenido, imagen, textButton }) => {

    return (
        <div className="card h-100">
            <img src={imagen} className="card-img-top img-fluid" style={{ height: '300px' }} />
            <div className="card-body text-center">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text" style={{ minHeight: '80px', height: '65px' }}>{contenido}</p>
                <a href="#" className="btn btn-primary w-100">{textButton}</a>
            </div>
        </div>
    )

}


