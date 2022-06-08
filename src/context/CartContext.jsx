// @ts-check
import React, { createContext, useState } from 'react'

import { useLocalStorage } from './useLocalStorage'

export const CartContext = createContext(undefined);


export default function CartProvider({ children }) {

    const [itemsCart, setItemsCart] = useLocalStorage([])
    const [cartPrice, setCartPrice] = useState(0)
    const [buyer, setBuyer] = useState({})
    
    const [cartDetail, setCartDetail] = useState()
    const [checkOut, setCheckOut] = useState(false)

    const addItem = (id, counter, price, url, nam) => {

        if (isInCart(id)) {
            // console.log("Ops!: el produco ya fue agregado")
            return
        }

        const allItems = [...itemsCart, { id: id, quantity: counter, price: price, url: url, nam: nam }]
        setItemsCart(allItems)

    }

    const removeItem = (idItem) => {

        setItemsCart(itemsCart.filter(item => item.id !== idItem));

    }

    const isInCart = (id) => itemsCart.filter(item => item.id === id).length === 1;

    const totalCountProduct = () => {

        if (itemsCart.length === 0) {
            return 0
        }

        if (itemsCart.length === 1) {
            return itemsCart[0].quantity
        } else {

            return itemsCart.reduce((x, item) => {
                if (typeof x === 'object') {
                    x = x.quantity
                }
                return x + item.quantity
            })
        }

    }
    const clear = () => {
        setItemsCart([]);
    }

    const sumPriceTot = () => {

        let sumTot = itemsCart.map((i) => i.price * i.quantity).reduce((prev, curr) => prev + curr, 0);

        setCartPrice(sumTot)
        console.log(cartPrice)
    }


    const getQuantyPrice = () => {

        let quantity = itemsCart.map((i) => i.price * i.quantity).reduce((prev, curr) => prev + curr, 0);

        return quantity

    }

    const getQuantyCount = () => {

        const quantyCount = itemsCart.map((i) => i.quantity).reduce((prev, curr) => prev + curr, 0);

        return quantyCount

    }

    const shippingHandle = getQuantyPrice() > 20000 ? 0 : 1599;
    const totalPay = (shippingHandle + cartPrice)

    return (
        <>
            <CartContext.Provider value={{
                itemsCart, cartPrice,
                buyer, setBuyer,
                checkOut, setCheckOut,
                cartDetail, setCartDetail,
                shippingHandle, totalPay,
                addItem, removeItem, isInCart, clear,
                totalCountProduct, sumPriceTot, getQuantyPrice, getQuantyCount
            }}>
                {children}
            </CartContext.Provider>
        </>
    )
}

