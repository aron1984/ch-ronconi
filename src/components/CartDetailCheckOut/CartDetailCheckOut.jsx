import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext, useState } from 'react';

// import { CartContext } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import FormEdit from '../Form/FormEdit';

import './CartDetailCheckOut.css';

import { getDoc, doc } from 'firebase/firestore';

export default function CartDetailCheckOut({ cart, checkDates }) {
    const accessContext = useContext(CartContext)

    const buyer = accessContext.buyer

    const [validated, setValidated] = useState(false);
    const [Id, setId] = useState("");
    const [show, setShow] = useState(false);
    const [formSubmit, setformSubmit] = useState(false)

    const handleOnChange = (event) => {
        // console.log(event.target.name, " : ", event.target.value);
        accessContext.setbuyer({
            ...buyer,
            [event.target.name]: event.target.value
        })
        console.log(event)
    }

    const envio = (e) => {

        setValidated(false);

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
        console.log(Id)

        setTimeout(() => {

            checkDates.setcheckOut(false)
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
                setformSubmit={setformSubmit}
                Id={Id}
                
                

            />
        </>

        // <Container className='containerCheckOut' style={{ marginBottom: 75, marginTop: 75 }}>
        //     <div className='checkOut'>
        //         <section className='ditailBuy'>
        //             <h1>Detalles de tu pedido</h1>

        //             {/* Vista de checkout */}



        //             <Table striped bordered hover size="sm" className="bg-light border">
        //                 <thead>
        //                     <tr>
        //                         <th className="text-center" colSpan={3}>Producto</th>
        //                         <th className="text-center">Cantidad</th>
        //                         <th className="text-center">Precio Unitario</th>
        //                         <th className="text-center">Total</th>
        //                     </tr>
        //                 </thead>
        //                 <tbody>

        //                     {/* acá va ir un componente armado arriba */}
        //                     {/* <listCheck /> */}

        //                     {/* <tr> */}
        //                     {accessContext.itemsCart.map((i) => {
        //                         return (
        //                             <tr>
        //                                 <><td style={{ textAlign: "left" }} colSpan={3}>Camiseta {i.nam}</td>
        //                                     <td className="text-center">{i.quantity}</td>
        //                                     <td className="text-center">{checkDates.priceFormat.format(i.price)}</td>
        //                                     <td className="text-center">{checkDates.priceFormat.format(i.price * i.quantity)}</td></>
        //                             </tr>
        //                         )
        //                     })
        //                     }

        //                     <tr style={{ eigth: 20 }}>
        //                         <td colSpan={6}></td>

        //                     </tr>
        //                 </tbody>

        //                 <tfoot className='footSection'>
        //                     <tr >
        //                         <th colSpan={3}>SUBTOTAL</th>

        //                         <th className="text-center">{checkDates.quantyCount}</th>

        //                         <th className="text-center">{checkDates.count} {checkDates.count === 0 ? "" : checkDates.count > 1 ? " productos" : " poducto"}</th>
        //                         <th className="text-center" colSpan={2}>{checkDates.priceFormat.format(checkDates.quantyPrice)}</th>
        //                     </tr>

        //                     <tr >

        //                         <th colSpan={5}>ENVÍO {checkDates.count >= 4 ? <span className='free'>GRATIS</span> : ""}</th>
        //                         <th className="text-center" colSpan={2} >
        //                             {checkDates.priceFormat.format(checkDates.shippingHandle)}

        //                         </th>
        //                     </tr>
        //                     <tr className='totalRow'>
        //                         <th colSpan={5} >MONTO TOTAL</th>
        //                         <th className="text-center" colSpan={2} >{checkDates.priceFormat.format(checkDates.totalPay)}</th>
        //                     </tr>



        //                 </tfoot>
        //             </Table>

        //         </section>

        //         {/* Formulario con datos */}
        //         <section className='ditailBuy'>
        //             <h1>Datos de facturación</h1>
        //             <Form noValidate validated={validated} onSubmit={handleSubmit}>
        //                 <Row className="mb-3">
        //                     <Form.Group as={Col} md="6" controlId="formName">
        //                         <Form.Label>Nombre</Form.Label>
        //                         <Form.Control
        //                             name="nam"
        //                             required
        //                             type="text"
        //                             placeholder="Nombre"
        //                             // defaultValue="Mark"
        //                             onChange={handleChange}
        //                         // value={buyer.nam}
        //                         />
        //                         <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        //                     </Form.Group>
        //                     <Form.Group as={Col} md="6" controlId="formLastName">
        //                         <Form.Label>Apellido</Form.Label>
        //                         <Form.Control
        //                             name="lastname"
        //                             required
        //                             type="text"
        //                             placeholder="Last name"
        //                             // defaultValue="Otto"
        //                             onChange={handleChange}
        //                         // value={buyer.lastname}
        //                         />
        //                         <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        //                     </Form.Group>


        //                 </Row>
        //                 <Row className="mb-3">
        //                     <Form.Group as={Col} lg="6" controlId="formEmail">
        //                         <Form.Label>Email</Form.Label>
        //                         <Form.Control
        //                             name="email"
        //                             type="email"
        //                             placeholder="example@gmail.com"
        //                             onChange={handleChange}
        //                             value={buyer.email}
        //                             required
        //                         />
        //                         <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        //                     </Form.Group>
        //                     <Form.Group as={Col} lg="6" controlId="formPhone">
        //                         <Form.Label>Teléfono</Form.Label>
        //                         <Form.Control
        //                             name="phone"
        //                             type="number"
        //                             placeholder="(15)343152555"
        //                             required
        //                             onChange={handleChange}
        //                         // value={buyer.phone}
        //                         />
        //                         <Form.Control.Feedback type="invalid">
        //                             Please provide a valid phone number.
        //                         </Form.Control.Feedback>
        //                     </Form.Group>

        //                 </Row>

        //                 <Toast show={show}>

        //                     <Toast.Header>
        //                         <img
        //                             src="holder.js/20x20?text=%20"
        //                             className="rounded me-2"
        //                             alt=""
        //                         />
        //                         <strong className="me-auto">Felicidades! </strong>
        //                         <small>11 mins ago</small>
        //                     </Toast.Header>
        //                     <Toast.Body>Tu pedido ha sido generado correctamente!</Toast.Body>
        //                 </Toast>
        //                 <Form.Group className="mb-3">
        //                     <Form.Check
        //                         required
        //                         label="Agree to terms and conditions"
        //                         feedback="You must agree before submitting."
        //                         feedbackType="invalid"
        //                     />
        //                 </Form.Group>
        //                 <div className="d-grid gap-2">
        //                     <Button type="submit" variant='primary'>FINALIZAR COMPRA</Button>
        //                 </div>
        //             </Form>
        //         </section>


        //     </div>
        // </Container >


    )


}
