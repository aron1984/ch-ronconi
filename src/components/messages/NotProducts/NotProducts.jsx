import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './NotProducts.css'

export default function NotProducts() {
    return (
        <Container>
            <section className='xv'>
            <div>
                <h2>No hay productos en el carro</h2>
            </div>
            <div>
                <Link to={`/`}>
                    <Button> VOLVER AL CATÁLOGO</Button>
                </Link>
            </div>
            </section>

        </Container>
    )
}
