import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext, useState } from 'react';

// import { CartContext } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import FormEdit from '../Form/FormEdit';

import './CartDetailCheckOut.css';

// Vamos a reorganizar esto...esto es el checkOutContainer 

export default function CartDetailCheckOut() {

    // { cart, 
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
        console.log(event)
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

        }, 3000)

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

    return (
        <>
            {accessContext.cartDetail &&
                <FormEdit
                    checkDates={checkDates}
                    envio={envio}
                    handleOnChange={handleOnChange}
                    formSubmit={formSubmit}
                    setFormSubmit={setFormSubmit}
                    Id={Id}
                />
            }
        </>


    )


}
