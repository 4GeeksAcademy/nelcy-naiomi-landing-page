
import React from 'react'



export const Card = ({ titulo, contenido, imagen, textButton }) => {



    return (

        <div className="card" style={{ width: '18rem' }}>
            <img src={imagen} height={200} width={200} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text" style={{ minHeight: '80px', height: '65px' }}>{contenido}</p>
                <a href="#" className="btn btn-primary">{textButton}</a>
            </div>
        </div>
    )

}


