// @ts-check
import React, { createContext, useState } from 'react'

export const CartContext = createContext(undefined);


// const dato1 = { nombre: 'Alejandro', edad: 38 };

// const algo = "555555"

export default function CartProvider({ children }) {

    const INITIAL_STATE = {id:0, quantity:0, price: 0};
    // states
    const [itemsCart, setitemsCart] = useState([INITIAL_STATE])
    const [cartPrice, setcartPrice] = useState(0)


    const addItem = (id, counter, price) => {

            // console.log(counter)
            // setitems([...items, {id: id, quantity:counter}])
            // console.log(items)

            if (isInCart(id)) {
              console.log("Ops!: el produco ya fue agregado")
              console.log(itemsCart)
              return
            }
            // setcart([itemId, quantity])
            setitemsCart([...itemsCart, {id: id, quantity:counter, price: price}])
            // setcart([items.length])
            console.log(itemsCart)
     
    }

    const removeItem = (idItem) => {

        setitemsCart(itemsCart.filter(item => item.id !== idItem))
        
       console.log('Este va remover')
        // remover un item del carro
    }

    const isInCart = (id) => itemsCart.filter(item => item.id === id).length === 1
    
    const totalCountProduct = () => {

        if(itemsCart.length === 0 ){
            return 0
        }

        if(itemsCart.length === 1){
            return itemsCart[0].quantity
        }else{

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
        setitemsCart([INITIAL_STATE])
    }

    const sumPriceTot = () => {
        
        let sumTot = itemsCart.map(i =>  i.price).reduce((prev, curr) => prev + curr, 0);
        setcartPrice(sumTot)
        console.log(sumTot);
    }
    // const provThings = {
    //     addItem,
    //     removeItem,
    //     isInCart
    // }

    return (

        <>
            
            {/* <CartContext.Provider value={{ removeItem, addItem }}> */}
            <CartContext.Provider value={{itemsCart, cartPrice, addItem, removeItem, isInCart, totalCountProduct, clear, sumPriceTot}}>

                {children}

            </CartContext.Provider>
            
        </>
    )
}

