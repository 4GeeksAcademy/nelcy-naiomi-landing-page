import React from 'react'
import { Card } from '../card/card'
import "./cards.style.css"

export const Cards = () => {

    return (
        <div className="container mt-4">
            <div className="row g-4">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <Card
                        titulo="Avatar 3"
                        contenido="Nuevos enemigos. La lucha por el equilibrio entre naturaleza y tecnología continúa."
                        imagen="https://i.pinimg.com/474x/54/b9/9b/54b99bc09d0fb09c26cdb729e4587594.jpg"
                        textButton="Fecha de Estreno"
                    />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <Card
                        titulo="Captain America"
                        contenido="Nuevas alianzas se forjan mientras el Capitán enfrenta desafíos."
                        imagen="https://i.pinimg.com/474x/b2/b6/fe/b2b6fe2533850b62fac524dfb393635b.jpg"
                        textButton="Fecha de Estreno"
                    />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <Card
                        titulo="Fast X"
                        contenido="La familia se reúne una vez más. Carreras, acción y adrenalina al límite en esta nueva entrega."
                        imagen="https://i.pinimg.com/236x/40/44/59/4044591e71306098950b4f7ea0450fec.jpg"
                        textButton="Fecha de Estreno"
                    />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <Card
                        titulo="Constantine 2"
                        contenido="Constantine regresa para enfrentar a las fuerzas oscuras del inframundo."
                        imagen="https://i.pinimg.com/236x/81/e3/fc/81e3fceed01d8e8a57f117e0d1ba265d.jpg"
                        textButton="Fecha de Estreno"
                    />
                </div>
            </div>
        </div>
    )
}
