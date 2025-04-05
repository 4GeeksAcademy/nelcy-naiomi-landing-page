import React from 'react'
import { Card } from '../card/card'
import "./cards.style.css"

export const Cards = () => {

    return (
        <div className="card-group gap-3">
            <Card
                titulo="Titulo 1"
                contenido="Contenido 1"
                imagen="https://st2.depositphotos.com/4211709/7708/i/450/depositphotos_77085751-stock-photo-flower.jpg"
                textButton="btn 1"
            />

            <Card
                titulo="Titulo 1"
                contenido="Contenido 1"
                imagen="https://st2.depositphotos.com/4211709/7708/i/450/depositphotos_77085751-stock-photo-flower.jpg"
                textButton="btn 1"
            />


            <Card
                titulo="Titulo 1"
                contenido="Contenido 1"
                imagen="https://st2.depositphotos.com/4211709/7708/i/450/depositphotos_77085751-stock-photo-flower.jpg"
                textButton="btn 1"
            />

            <Card
                titulo="Titulo 1"
                contenido="Contenido 1"
                imagen="https://st2.depositphotos.com/4211709/7708/i/450/depositphotos_77085751-stock-photo-flower.jpg"
                textButton="btn 1"
            />

        </div>
    )
}
