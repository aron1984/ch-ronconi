import { Button, Col,  Form, Row } from 'react-bootstrap';

export const CheckOutFactory = ({formik, handleOnChange}) => {
    return (
        <>
            <section className='factory'>
              <header className='tableHeader'>
                <h1>Datos de facturación</h1>
              </header>

              {/* Vamos a revisar esto, no se por qué handleSubmit funciona y no lo tengo declarado */}
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
            </section>

        </>
    )
}
