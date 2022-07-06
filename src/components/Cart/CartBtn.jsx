import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const CartBtn = ({handleCheckOut}) => {
    return (
        <div className='btnCheckOut d-grid gap-2 '>
            <Link to={'/checkout'} >
                <Button className='btnCH' variant='primary' size='lg' onClick={() => handleCheckOut()}>FINALIZAR COMPRA</Button>
            </Link>
        </div>
    )
}
