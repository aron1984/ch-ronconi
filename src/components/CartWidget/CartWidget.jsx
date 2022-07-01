import React, { useContext } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';

import './CartWidget.css';

export default function CartWidget() {

    const accessContext = useContext(CartContext);

    const counterPrice = accessContext.sumPriceTot();

    const priceFormat = new Intl.NumberFormat('es-ar', { style: 'currency', currency: 'ARS', minimumFractionDigits: 2 });

    const counterProd = accessContext.totalCountProduct();

    return (
        <>
            <div className='cartContainer'>
                <div className='cartLeft'>
                    <Link className='a' to={`/cart`}>
                        <MdShoppingCart size={30} />
                    </Link>
                </div>
                <div className='cartCenter'>
                    {counterProd === 0 ? '' : counterProd}
                </div>
                <div className='cartRight'>
                    {counterPrice !== 0 && priceFormat.format(counterPrice)}
                </div>
            </div>
        </>
    )
}
