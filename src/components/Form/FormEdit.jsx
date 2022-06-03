//@ts-check
import { useFormik } from 'formik';
import React, { useContext } from 'react';
import { Alert, Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import './FormEdit.css';




export default function FormEdit({ checkDates, cart, envio, handleOnChange, formSubmit, setformSubmit, Id }) {

  const accessContext = useContext(CartContext)
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const buyer = accessContext.buyer

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  }


  /**
    * ^ indica que el patrón debe iniciar con los caracteres dentro de los corchetes
 
   * [A-Z] indica que los caracteres admitidos son letras del alfabeto
 
   * + indica que los caracteres dentro de los corchetes se pueden repetir
 
   * $ indica que el patrón finaliza con los caracteres que están dentro de los corchetes.
 
   * i indica que validaremos letras mayúsculas y minúsculas (case-insensitive)
    */
  const validate = values => {
    let errors = {};
    // validate firstName
    if (!values.firstName) {
      errors.firstName = 'Campo requerido';
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.firstName)) {
      errors.firstName = 'El campo sólo acepta letras y espcios'
    } else if (values.firstName.length < 3) {
      errors.firstName = 'Nombre demasiado corto'
    } else if (values.firstName.length > 20) {
      errors.firstName = 'Debe tener 20 caracteres o menos';
    }

    // validate lastName
    if (!values.lastName) {
      errors.lastName = 'Campo requerido';
    }
    // else if (!/^[A-Z]+$/i.test(values.lastName)) {
    else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.lastName)) {
      errors.lastName = 'El campo sólo acepta letras y espcios'
    }
    else if (values.lastName.length > 20) {
      errors.lastName = 'Debe tener 15 caracteres o menos';
    }

    // validate email
    if (!values.email) {
      errors.email = 'Campo requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Dirección de email inválida';
    }

    // validate phoneNumber
    if (!values.phone) {
      errors.phone = 'Campo requerido';
    }
    else if (!/^[0-9]+$/.test(values.phone)) {
      errors.phone = 'El teléfono debe sólo números'
    }
    else if (values.phone.length > 10) {
      errors.phone = 'El número de teléfono debe tener 10 caracteres';
    }

    return errors;
  }

  const onSubmit = (values, { resetForm }) => {
    console.log('form data', values);
    resetForm();
    setformSubmit(true)
    envio()
    
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,


  });

  return (
    <Container style={{ marginBottom: 70 }}>

      <section className='ditailBuy'>
        <h1>Detalles de tu pedido</h1>

        {/* Vista de checkout */}

        <Table striped bordered hover size="sm" className="bg-light border" responsive>
          <thead>
            <tr className='rowSpace'>
              <th className="text-center" colSpan={3}>Producto</th>
              <th className="text-center">Cantidad</th>
              <th className="text-center">Precio Unitario</th>
              <th className="text-center">Total</th>
            </tr>
          </thead>
          <tbody>

            {/* acá va ir un componente armado arriba */}
            {/* <listCheck /> */}

            {/* <tr> */}
            {accessContext.itemsCart.map((i) => {
              return (
                <tr className='rowSpace'>
                  <><td style={{ textAlign: "left" }} colSpan={3}>Camiseta {i.nam}</td>
                    <td className="text-center">{i.quantity}</td>
                    <td className="text-center">{checkDates.priceFormat.format(i.price)}</td>
                    <td className="text-center">{checkDates.priceFormat.format(i.price * i.quantity)}</td></>
                </tr>
              )
            })
            }

            <tr className='space'>
              <td colSpan={6}></td>

            </tr>
          </tbody>

          <tfoot className='footSection'>
            <tr >
              <th colSpan={3}>SUBTOTAL</th>

              <th className="text-center">{checkDates.quantyCount}</th>

              <th className="text-center">{checkDates.count} {checkDates.count === 0 ? "" : checkDates.count > 1 ? " productos" : " poducto"}</th>
              <th className="text-center" colSpan={2}>{checkDates.priceFormat.format(checkDates.quantyPrice)}</th>
            </tr>

            <tr >

              <th colSpan={5}>ENVÍO {checkDates.count >= 4 ? <span className='free'>GRATIS</span> : ""}</th>
              <th className="text-center" colSpan={2} >
                {checkDates.priceFormat.format(checkDates.shippingHandle)}

              </th>
            </tr>
            <tr className='totalRow'>
              <th colSpan={5} >MONTO TOTAL</th>
              <th className="text-center" colSpan={2} >{checkDates.priceFormat.format(checkDates.totalPay)}</th>
            </tr>
          </tfoot>
        </Table>

      </section>

      <section>

        <Form onSubmit={formik.handleSubmit} onChange={handleOnChange}>
          <Row className="mb-3">
            <Form.Group as={Col} md="3" className="mb-3" >
              <Form.Label htmlFor="firstName">Nombre</Form.Label>
              {/* <label htmlFor="firstName">First Name</label> */}
              <Form.Control
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
              />
              {formik.touched.firstName && formik.errors.firstName ? <div style={{ color: 'red' }}>{formik.errors.firstName}</div> : null}
            </Form.Group>

            <Form.Group as={Col} md="3" className="mb-3" >
              <Form.Label htmlFor="lastName">Apellido</Form.Label>
              <Form.Control
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lastName && formik.errors.lastName ? <div style={{ color: 'red' }}>{formik.errors.lastName}</div> : null}
            </Form.Group>
          </Row >
          <Row>
            <Form.Group as={Col} md="6" className='mb-6'>
              <Form.Label htmlFor="phone">Número de teléfono</Form.Label>
              <Form.Control
                id="phone"
                name="phone"
                type="text"
                placeholder='Ej: 3434123456'
                onChange={formik.handleChange}
                value={formik.values.phone}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phone && formik.errors.phone ? <div style={{ color: 'red' }}>{formik.errors.phone}</div> : null}
            </Form.Group>

          </Row>
          <Row>
            <Form.Group as={Col} md="6" className='mb-6' >
              <Form.Label htmlFor="email">Email Address</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? <div style={{ color: 'red' }}>{formik.errors.email}</div> : null}
            </Form.Group>
          </Row>
          <Row className="mb-3 mt-3">
            <Form.Group as={Col} md="6" className='mb-6' >
              <Form.Text>
                <Button type="submit"  className='btnSubmit' disabled={!formik.isValid}>Confirmar compra</Button>
              </Form.Text>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md='6' className='mb-6'>
            {formSubmit && <Alert variant='success'><p>¡Tu compra fue registrada con éxito!</p><p>Código de pedido: {Id}</p></Alert>}
            
            </Form.Group>
          </Row>


         
        </Form>

      </section>
    </Container>
  );
};