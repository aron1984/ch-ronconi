import { Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const CheckOutMessage = ({formSubmit, Id}) => {
    return (
        <>
            <section>
                <div className='msjChechOut'>

                    {formSubmit &&
                        <Alert variant='success'>
                            <h6>¡Gracias por tu compra!</h6>
                            <h6>¡Fue registrada con éxito!</h6>
                            <h6>Código de pedido: </h6>
                            <div className='msjCode'>
                                <h5>{Id}</h5>

                            </div>
                        </Alert>}

                    <div className="d-grid gap-2">
                        <p>Visita nuestro catálogo para seguir comprando</p>
                        <Link to={`/`}>
                            <Button className='btnSubmit'>VER CATÁLOGO</Button>
                        </Link>

                    </div>

                </div>
            </section>

        </>
    )
}
