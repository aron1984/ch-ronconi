// @ts-check
import React, { createContext, useState } from 'react'

export const CartContext = createContext(undefined);


// const dato1 = { nombre: 'Alejandro', edad: 38 };

// const algo = "555555"

export default function CartProvider({ children }) {

    // const INITIAL_STATE = { id: 0, quantity: 0, price: 0, url: '', nam: '' };
    // states
    const [itemsCart, setitemsCart] = useState([])
    const [cartPrice, setcartPrice] = useState(0)

    // const addItem = (id, counter, price) => {
    // Agregué más parámetros para obtener la imagen y descripcion.
    // CONSULTA: debería crear pasar un objeto con esas características?
    const addItem = (id, counter, price, url, nam) => {

        if (isInCart(id)) {
            console.log("Ops!: el produco ya fue agregado")
            console.log(itemsCart)
            return
        }
        // setcart([itemId, quantity])
        // ESTO LO DEBERÍA OPTIMIZAR CON SINTAXIS SUGAR así:
        // setitemsCart([...itemsCart, { id, quantity: counter, price, url, nam }])
        setitemsCart([...itemsCart, { id: id, quantity: counter, price: price, url: url, nam: nam }])

        // setcart([items.length])
        console.log(itemsCart)

    }

    const removeItem = (idItem) => {

        setitemsCart(itemsCart.filter(item => item.id !== idItem));
        // console.log('Este va remover')

    }
    // para saber si el producto está en el carro
    const isInCart = (id) => itemsCart.filter(item => item.id === id).length === 1;

    const totalCountProduct = () => {

        if (itemsCart.length === 0) {
            return 0
        }

        if (itemsCart.length === 1) {
            return itemsCart[0].quantity
        } else {

            // sumo los quantity con reduce
            return itemsCart.reduce((x, item) => {
                if (typeof x === 'object') {
                    x = x.quantity
                }
                return x + item.quantity
            })
        }


    }
    const clear = () => {
        setitemsCart([]);
    }

    const sumPriceTot = () => {

        // let sumTot = itemsCart.map(i =>  i.price).reduce((prev, curr) => prev + curr, 0);

        // OPTIMICÉ esta función PARA que sume EL MONTO de productos en relación a la cantidad.
        let sumTot = itemsCart.map((i) => i.price * i.quantity).reduce((prev, curr) => prev + curr, 0);

        setcartPrice(sumTot)
        // console.log(sumTot);
    }

    // CONSULTA: debería tener un objeto de parametros
    // const provThings = {
    //     addItem: addItem,
    //     removeItem: removeItem,
    //     isInCart: isInCart,
    //     itemsCart: itemsCart,
    //     cartPrice: cartPrice,
    //     totalCountProduct: totalCountProduct,
    //     clear:clear,
    //     sumPriceTot: sumPriceTot
    // }

    return (

        <>

            <CartContext.Provider value={{ itemsCart, cartPrice, addItem, removeItem, isInCart, totalCountProduct, clear, sumPriceTot }}>

                {children}

            </CartContext.Provider>

        </>
    )
}

