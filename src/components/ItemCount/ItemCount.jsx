import React, { useState } from 'react';
import './ItemCount.css';
// import {  } from 'react-bootstrap';

// Step 4: add params to father ItemCount and will be avaiable for children functions
export default function ItemCount(params) {

    // Step 1: add state
    const [counter, setCounter] = useState(0);

    // Step 5: create functions decrease and increase
    const decrease = () => {
        if (counter > 0) {
            setCounter(counter => counter - 1)
        }
    }

    const increase = () => {
        const limit = params.stock;
        if (counter < limit) {
            setCounter(counter => counter + 1)
        }
    }



    return (
        <div>
            <div className='containerBtnCount'>
                <div>
                    {/* Step 3: add onClick with corresponding function */}
                    <button variant="secondary" className='btnLeft' onClick={() => { decrease() }}>-</button>
                </div>
                <div className='count'>
                    {/* Step 2: add counter with {} */}
                    {counter}
                </div>
                <div>
                    <button variant="secondary" className='btnRight' onClick={() => { increase() }}>+</button>
                </div>
                


            </div>

        </div>
    )
}
