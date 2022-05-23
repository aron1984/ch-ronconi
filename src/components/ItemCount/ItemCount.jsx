import React, { useState } from 'react';
import './ItemCount.css';
import { Button } from 'react-bootstrap';


// Step 4: add params to father ItemCount and will be avaiable for children functions IMPORTANT
export default function ItemCount(props) {

    // parseInt to props than come as a string
    const stock = parseInt(props.stock);
    const initial = parseInt(props.initial);

    // Step 1: add state 
    const [counter, setCounter] = useState(initial);

    const { onAdd } = props;
    const { cCart } = props;

    

    // Step 5: create functions + and -
    const decrease = () => {
        if (counter > 0) {
            setCounter(counter => counter - 1);
        }
    }

    const increase = () => {
        if ((counter + cCart) <= stock) {
            if (counter < stock) {
                setCounter(counter => counter + 1);
            }
        }   
    }

    return (
        <div className='btnCount'>
            <div className='containerBtnCount'>
                <div>
                    {/* Step 3: add onClick with corresponding function */}
                    <button variant="secondary" className='btnHand' onClick={() => { decrease() }}>-</button>
                </div>
                <div className='count'>
                    {/* Step 2: add counter with ternary operator {} */}
                    {(stock !== 0) ? counter : "Sin Stock"}
                </div>
                <div>
                    <button className='btnHand' onClick={() => { increase() }}>+</button>
                </div>
            </div>
            <div className="d-grid gap-2 btnEnd">

                {/* Step 6: add onClick function with add product to cart + 
                Este botón va estar disponible si la suma de el carrito + el estado local de counter es <= al stock.
                Me permite habilitar dinamicament el botón en caso de cumplir esta condición.
                */}
                <Button variant="dark" size="sm" disabled={(cCart + counter) <= stock ? false : true} onClick={() => { onAdd(counter) }}>Add to Cart</Button>

            </div>
        </div>
    )
}

