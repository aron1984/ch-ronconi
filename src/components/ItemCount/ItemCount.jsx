import React, { useState } from 'react';
import './ItemCount.css';
import { Card } from 'react-bootstrap';

// Step 4: add params to father ItemCount and will be avaiable for children functions IMPORTANT
export default function ItemCount(props) {

    // parseInt to props than come as a string
    const stock = parseInt(props.stock);
    const initial = parseInt(props.initial);

    // Step 1: add state 
    const [counter, setCounter] = useState(initial);



    // Step 5: create functions + and -
    const decrease = () => {
        if (counter > 0) {
            setCounter(counter => counter - 1);
        }
    }

    const increase = () => {
        
        if (counter < stock) {
            setCounter(counter => counter + 1);
        }
    }

    // Step 7: create function add to cart
    // I know that the component stateless will have a params called 'product'
    const onAdd = () => {
        if (stock !== 0){
            if (counter !== 0) {
                let x = counter;
                let productName = props.product;
                console.log('Se agregaron ', x, ' productos: ', productName)
            }           
        }else{
            console.log('No hay disponible');
        }
    }

    return (
        <div>
            <div style={{ width: '18rem' }} className='containerBtnCount'>
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
            <div>
                {/* Step 6: add onClick function with add product to cart */}
                <button className='btnAdd' onClick={() => { onAdd() }}>Add to Cart</button> 
            </div>
        </div>
    )
}

