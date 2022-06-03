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

    const [buyer, setbuyer] = useState({})
    
    
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


    // submit order

    // const initialValues = {
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     phone: ''
    // }

    // const validate = values => {
    //     const errors = {};
    //     // validate firstName
    //     if (!values.firstName) {
    //         errors.firstName = 'Campo requerido';
    //     }
    //     /**
    //      * ^ indica que el patrón debe iniciar con los caracteres dentro de los corchetes
      
    //     * [A-Z] indica que los caracteres admitidos son letras del alfabeto
      
    //     * + indica que los caracteres dentro de los corchetes se pueden repetir
      
    //     * $ indica que el patrón finaliza con los caracteres que están dentro de los corchetes.
      
    //     * i indica que validaremos letras mayúsculas y minúsculas (case-insensitive)
    //      */
    //     else if (!/^[A-Z]+$/i.test(values.firstName)) {
    //         errors.firstName = 'El nombre no debe contener números y/o carácteres especiales'
    //     }
    //     else if (values.firstName.length < 3) {
    //         errors.firstName = 'Nombre demasiado corto'
    //     }

    //     else if (values.firstName.length > 15) {
    //         errors.firstName = 'Debe tener 15 caracteres o menos';
    //     }

    //     // validate lastName
    //     if (!values.lastName) {
    //         errors.lastName = 'Campo requerido';
    //     }
    //     else if (!/^[A-Z]+$/i.test(values.lastName)) {
    //         errors.lastName = 'El nombre no debe contener números y/o carácteres especiales'
    //     }
    //     else if (values.lastName.length > 20) {
    //         errors.lastName = 'Debe tener 15 caracteres o menos';
    //     }

    //     // validate email
    //     if (!values.email) {
    //         errors.email = 'Campo requerido';
    //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //         errors.email = 'Dirección de email inválida';
    //     }

    //     // validate phoneNumber
    //     if (!values.phone) {
    //         errors.phone = 'Campo requerido';
    //     }
    //     else if (!/^[0-9]+$/.test(values.phone)) {
    //         errors.phone = 'El teléfono debe sólo números'
    //     }
    //     else if (values.phone.length > 10) {
    //         errors.phone = 'El número de teléfono debe tener 10 caracteres';
    //     }

    //     return errors;
    // }

 


    return (

        <>

            <CartContext.Provider value={{ itemsCart, cartPrice, addItem, removeItem, isInCart, totalCountProduct, clear, sumPriceTot,
                //  initialValues, validate,
                   buyer, setbuyer }}>

                {children}

            </CartContext.Provider>

        </>
    )
}

