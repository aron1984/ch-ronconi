import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import './CartWidget.css';

export default function CartWidget() {
    let count = 4;
    return (
        <div className='cartContainer'>
            <div><MdShoppingCart /></div>
            <div>{count}</div>
        </div>
    )
}
