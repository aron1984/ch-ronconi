import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'

// import { CartContext } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import CheckOut from '../CheckOut/CheckOut';

import './CheckOutContainer.css';

// Vamos a reorganizar esto...esto es el checkOutContainer 

export default function CheckOutContainer() {

    const accessContext = useContext(CartContext)

    const buyer = accessContext.buyer

    const [Id, setId] = useState("");
    const [show, setShow] = useState(false);
    const [formSubmit, setFormSubmit] = useState(false)

    const handleOnChange = (event) => {
        accessContext.setBuyer({
            ...buyer,
            [event.target.name]: event.target.value
        })

    }

    const envio = (e) => {

        const newOrder = {
            buyer: accessContext.buyer,
            cart: accessContext.cartDetail,
            totalItems: accessContext.cartDetail.map((item) => item.price * item.quantity).reduce((prev, curr) => prev + curr, 0),
            shippingOrder: accessContext.cartDetail.map((item) => item.price * item.quantity).reduce((prev, curr) => prev + curr) > 20000 ? 0 : 1599,
        }

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");

        addDoc(ordersCollection, newOrder).then(({ id }) => setId((id)));

        setShow(!show)

        setTimeout(() => {
            setShow(show)

        }, 1000)

        setTimeout(() => {

            accessContext.setCheckOut(false)
            accessContext.clear()
            setFormSubmit(true)


        }, 10000)

    }

    const count = Object.keys(accessContext.itemsCart).length;

    const checkDates = {
        setCartDetail: accessContext.setCartDetail,
        totalPay: accessContext.totalPay,
        shippingHandle: accessContext.shippingHandle,
        getQuantyPrice: accessContext.getQuantyPrice,
        getQuantyCount: accessContext.getQuantyCount,
        count: count,
        clear: accessContext.clear,
    }

    // Para acceder a esta ruta, hay que pasar por el carrito de compras, de lo contrario no se muestra

    if (accessContext.cartDetail) {
        return (
            <CheckOut
                checkDates={checkDates}
                envio={envio}
                handleOnChange={handleOnChange}
                formSubmit={formSubmit}
                setFormSubmit={setFormSubmit}
                Id={Id}
            />
        )
    }

    return (
        <div>
            <p>¡Para acceder a esta sección debes pasar por carrito de compras, y confirmar los productos!</p>
            <Link to={'/'}>
                <p>Volver al inicio</p>
            </Link>
        </div>

    )



}
