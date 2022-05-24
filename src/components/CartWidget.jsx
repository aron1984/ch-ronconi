import React, { useContext } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import './CartWidget.css';

// import del contexto
import { CartContext } from '../context/CartContext';


export default function CartWidget() {

const accessContext = useContext(CartContext)

    // const {} = useContext()
    
    accessContext.sumPriceTot()

    const priceFormat = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'ARS'});

    const totalPrice = priceFormat.format(accessContext.cartPrice); 

    return (
        <>
        <div className='cartContainer'>
            <div><MdShoppingCart size={30} /></div>
            <div>{accessContext.totalCountProduct()}</div>
            <div>{accessContext.cartPrice !== 0 && totalPrice}</div>
            
        </div>
        </>
    )
}
