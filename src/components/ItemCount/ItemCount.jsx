import React, { useState } from 'react';
import './ItemCount.css';
import { Card } from 'react-bootstrap';

// Step 4: add params to father ItemCount and will be avaiable for children functions
export default function ItemCount(params) {

    // Step 1: add state
    const [counter, setCounter] = useState(0);

    // Step 5: create functions decrease and increase
    const decrease = () => {
        if (counter > 0) {
            setCounter(counter => counter - 1);
        }
    }

    const increase = () => {
        const limit = params.stock;
        if (counter < limit) {
            setCounter(counter => counter + 1);
        }
    }

    // Step 7: create function add to cart
    const onAdd = () => {

        if (counter !== 0) {
            let x = counter;
            let productName = params.product;
            console.log('Se agregaron: ', x, ' ', productName)
        }
    }

    return (
        <div>
            <Card style={{ width: '18rem' }} >
                {/* <Card.Img variant="top" src="holder.js/100px180" className='cardImage' /> */}
                <div className='cardImage'></div>
                <Card.Body className="cardEdit">
                    <Card.Title>{params.product}</Card.Title>{/*Step 8:  add name prodcut from params App.js  */}
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>

                <div style={{ width: '18rem' }} className='containerBtnCount'>
                    <div>
                        <button variant="secondary" className='btnHand' onClick={() => { decrease() }}>-</button>{/* Step 3: add onClick with corresponding function */}
                    </div>
                    <div className='count'>
                        {counter} {/* Step 2: add counter with {} */}
                    </div>
                    <div>
                        <button className='btnHand' onClick={() => { increase() }}>+</button>
                    </div>
                </div>
                <div>
                    <button className='btnAdd' onClick={() => { onAdd() }}>Add to Cart</button> {/* Step 6: add onClick function with add product to cart */}
                </div>
            </Card>
        </div>
    )
}
