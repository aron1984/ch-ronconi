import { useFormik } from 'formik';
import React, { useContext } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';
import { CheckOutResume } from './CheckOutResume';

import './CheckOut.css';
import { CheckOutFactory } from './CheckOutFactory';

export default function CheckOut({ checkDates, envio, handleOnChange, formSubmit, setFormSubmit, Id }) {
  const accessContext = useContext(CartContext);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  }

  const priceFormat = new Intl.NumberFormat('es-ar', { style: 'currency', currency: 'ARS', minimumFractionDigits: 2 });

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
      errors.firstName = 'El campo sólo acepta letras y espcios';
    } else if (values.firstName.length < 3) {
      errors.firstName = 'Nombre demasiado corto';
    } else if (values.firstName.length > 20) {
      errors.firstName = 'Debe tener 20 caracteres o menos';
    }

    // validate lastName
    if (!values.lastName) {
      errors.lastName = 'Campo requerido';
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.lastName)) {
      errors.lastName = 'El campo sólo acepta letras y espcios';
    } else if (values.lastName.length > 20) {
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
    } else if (!/^[0-9]+$/.test(values.phone)) {
      errors.phone = 'El teléfono debe sólo números';
    } else if (values.phone.length > 10) {
      errors.phone = 'El número de teléfono debe tener 10 caracteres';
    }
    return errors;
  }

  const onSubmit = (values, { resetForm }) => {
    resetForm()
    setFormSubmit(true)
    envio()
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (

    <>
      <Container style={{ marginBottom: 70, marginTop: 20 }} className="factoryContainer">

        {formSubmit ? <></> : checkDates.count === 0 ? <></> :

          // Checkout resume
          <>
            <CheckOutResume accessContext={accessContext} priceFormat={priceFormat} checkDates={checkDates}  />

            {/* Checkout factory */}

            <CheckOutFactory formik={formik} handleOnChange={handleOnChange}/>

            {/* <section className='factory'>
              <header className='tableHeader'>
                <h1>Datos de facturación</h1>
              </header>
              <Form className='formFact' onSubmit={formik.handleSubmit} onChange={handleOnChange}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" className="mb-4" >
                    <Form.Label htmlFor="firstName">Nombre</Form.Label>
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

                  <Form.Group as={Col} md="4" className="mb-4" >
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
                  <Form.Group as={Col} md="8" className='mb-8'>
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
                <Row className="mb-3 mt-4">
                  <Form.Group as={Col} md="8" className='mb-8' >
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
                <Row className="mb-3 mt-4">
                  <Form.Group as={Col} md="8" className='mb-8' >
                    <Form.Text>
                      <Button type="submit" className='btnSubmit' disabled={!formik.isValid}>CONFIRMAR COMPRA</Button>
                    </Form.Text>
                  </Form.Group>
                </Row>

              </Form>
            </section> */}
          </>
        }
        {formSubmit &&

          // Checkout mensaje
          <>
            <section>
              <div className='msjChechOut'>

                {formSubmit &&
                  <Alert variant='success'>
                    <h6>¡Gracias por tu compra!</h6>
                    <h6>¡Fue registrada con éxito!</h6>
                    <h6>Código de pedido: </h6>
                    <div className='msjCode'>
                      <h5>{Id}</h5>

                    </div>
                  </Alert>}

                <div className="d-grid gap-2">
                  <p>Visita nuestro catálogo para seguir comprando</p>
                  <Link to={`/`}>
                    <Button className='btnSubmit'>VER CATÁLOGO</Button>
                  </Link>

                </div>

              </div>
            </section>

          </>
        }

      </Container>

    </>
  );
};