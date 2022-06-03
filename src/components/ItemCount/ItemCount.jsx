// @ts-check
import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';

import { CartContext } from '../../context/CartContext';

import './ItemCount.css';

export default function ItemCount({ id, stock, initial, cCart, price, url, name }) {

    const [counter, setCounter] = useState(parseInt(initial));

    let accessContext = useContext(CartContext);   //CHECK

    const decrease = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const increase = () => {
        if (counter < parseInt(stock)) {
            if (counter < parseInt(stock)) {
                setCounter(counter + 1);
            }
        }
    }

    const addToCart = () => {
        if (parseInt(stock) > 0) {
            accessContext.addItem(id, counter, price, url, name)
            console.log(counter)
            
        }
    }

    return (
        <div className='btnCount'>
            <div className='containerBtnCount'>
                <div>

                    <button className='btnHand' onClick={() => { decrease() }}>-</button>
                </div>
                <div className='count'>

                    {(stock !== 0) ? counter : "Sin Stock"}
                </div>
                <div>
                    <button className='btnHand' onClick={() => { increase() }}>+</button>
                </div>
            </div>
            <div className="d-grid gap-2 btnEnd">


                <Button variant="dark" size="sm" disabled={!accessContext.itemsCart.some((itemsCart) => itemsCart.id === id) ? false : true} onClick={addToCart}>Add to Cart</Button>

            </div>
        </div>
    )
}

