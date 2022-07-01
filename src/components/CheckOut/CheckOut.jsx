import { useFormik } from 'formik';
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';

import { CartContext } from '../../context/CartContext';
import { CheckOutResume } from './CheckOutResume';

import { CheckOutFactory } from './CheckOutFactory';
import { CheckOutMessage } from './CheckOutMessage';

import './CheckOut.css';

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
            <CheckOutResume accessContext={accessContext} priceFormat={priceFormat} checkDates={checkDates} />

            <CheckOutFactory formik={formik} handleOnChange={handleOnChange} />

          </>
        }

        {formSubmit &&

          // Checkout mensaje
          <>
            <CheckOutMessage formSubmit={formSubmit} Id={Id} />

          </>
        }

      </Container>

    </>
  );
};