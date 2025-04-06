import React from 'react'

export const Nav = () => {
    return (

        <div className="container ">
            <nav className="navbar navbar-expand-lg navbar-dark  bg-dark w-100">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="#">El Rincón del Cine</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Próximos Estrenos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Críticas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
