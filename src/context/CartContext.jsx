// @ts-check
import React, { createContext, useState } from 'react'

import { useLocalStorage } from './useLocalStorage'

export const CartContext = createContext(undefined);


export default function CartProvider({ children }) {

    // const [itemsCart, setItemsCart] = useState([])

    const [itemsCart, setItemsCart] = useLocalStorage([])
    const [cartPrice, setCartPrice] = useState(0)

    const [buyer, setBuyer] = useState({})

    const addItem = (id, counter, price, url, nam) => {

        if (isInCart(id)) {
            console.log("Ops!: el produco ya fue agregado")
            console.log(itemsCart)
            return
        }

        const allItems = [...itemsCart, { id: id, quantity: counter, price: price, url: url, nam: nam }]
        // setItemsCart([...itemsCart, { id: id, quantity: counter, price: price, url: url, nam: nam }])
        setItemsCart(allItems)
        

        console.log(itemsCart)

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
    }

    return (
        <>
            <CartContext.Provider value={{
                itemsCart, cartPrice,
                addItem, removeItem, isInCart, clear,
                totalCountProduct, sumPriceTot,
                buyer, setBuyer
            }}>
                {children}
            </CartContext.Provider>
        </>
    )
}

