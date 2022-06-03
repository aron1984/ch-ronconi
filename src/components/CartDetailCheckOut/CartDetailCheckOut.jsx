import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext, useState } from 'react';

// import { CartContext } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import FormEdit from '../Form/FormEdit';

import './CartDetailCheckOut.css';

export default function CartDetailCheckOut({ cart, checkDates }) {
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
            cart,
            totalItems: cart.map((item) => item.price * item.quantity).reduce((prev, curr) => prev + curr, 0),
            shippingOrder: cart.map((item) => item.price * item.quantity).reduce((prev, curr) => prev + curr) > 20000 ? 0 : 1599,
        }

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");

        addDoc(ordersCollection, newOrder).then(({ id }) => setId((id)));

        setShow(!show)
        
        setTimeout(() => {
            setShow(show)

        }, 3000)

        setTimeout(() => {

            checkDates.setCheckOut(false)
            checkDates.clear()  

        }, 10000)
        
    }

    return (
        <>
            <FormEdit
                checkDates={checkDates}
                cart={cart}
                envio={envio}
                handleOnChange={handleOnChange}
                formSubmit={formSubmit}
                setFormSubmit={setFormSubmit}
                Id={Id}
            />
        </>


    )


}
