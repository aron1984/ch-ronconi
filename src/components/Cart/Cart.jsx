import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'

import { CartContext } from '../../context/CartContext'
import CartDetailCheckOut from '../CartDetailCheckOut/CartDetailCheckOut'
import NotProducts from '../messages/NotProducts/NotProducts'

import './Cart.css'

export default function Cart() {

  const accessContext = useContext(CartContext)
  const [cartDetail, setCartDetail] = useState()
  const [checkOut, setCheckOut] = useState(false)


  useEffect(() => {
    if (accessContext.itemsCart.length === 0) {
      setCartDetail([])
      return
    }

    let price = 0
    setCartDetail(
      accessContext.itemsCart.map(item => {
        price += item.price * item.quantity

        return {
          id: item.id,
          productName: item.nam,
          price: item.price,
          quantity: item.quantity,
          url: item.url,
        }
      })
    )

  }, [accessContext.itemsCart])

  const handleCheckOut = () => {
    setCheckOut(true)
  }

  let count = Object.keys(accessContext.itemsCart).length;
  let quantyPrice = accessContext.itemsCart.map((i) => i.price * i.quantity).reduce((prev, curr) => prev + curr, 0);

  let quantyCount = accessContext.itemsCart.map((i) => i.quantity).reduce((prev, curr) => prev + curr, 0);

  //AGREGANDO PRECIO DE ENVÍO, o ENVÍO GRATIS al comprar por más de $20.000
  let shippingHandle = quantyPrice > 20000 ? 0 : 1599;

  let totalPay = (shippingHandle + accessContext.cartPrice)

  const priceFormat = new Intl.NumberFormat('es-ar', { style: 'currency', currency: 'ARS', minimumFractionDigits: 2 });

  const checkDates = {
    setCartDetail: setCartDetail,

    totalPay: totalPay,
    shippingHandle: shippingHandle,
    quantyPrice: quantyPrice,
    count: count,
    quantyCount: quantyCount,
    priceFormat: priceFormat,
    setCheckOut: setCheckOut,
    clear: accessContext.clear,
  }

  // Implementa un RETURN RÁPIDO si no hay productos
  if (count === 0) {
    return (
      <NotProducts />
    )

  }

  const cartRender = accessContext.itemsCart.map((x, index) => {


    if (x.id === 0) {
      return <></>
    }

    return (

      <tr key={x.id} id={x.id}>
        <td className="text-center">{x.id}</td>
        <td className="text-center"><img className='imgCartShip' alt="" src={x.url} /></td>
        <td className="text-center">{x.nam}</td>
        <td className="text-center">{x.quantity}</td>
        <td className="text-center">{priceFormat.format(x.price)}</td>
        <td className="text-center">{priceFormat.format(x.price * x.quantity)}</td>
        <td className="text-center"><Button className='btnDelet' size="sm" variant="danger" onClick={() => accessContext.removeItem(x.id)}>Eliminar</Button></td>
      </tr>

    )
  })

  return (
 
      <Container className='containerCart'>
        {!checkOut &&
          <div >

            {/* Consulta: esta lógica debería ir en un componente aparte y recibir items.carts por props */}

            <header className='cartHeader'>
              <h1>Tu carro de compras</h1>
            </header>

            <Table striped bordered hover variant="dark" responsive>
              <thead>
                <tr>
                  <th className="text-center">ID</th>
                  <th className="text-center" colSpan={2}>Producto</th>
                  <th className="text-center">Cantidad</th>
                  <th className="text-center">$ Unitario</th>
                  <th className="text-center">$ Total</th>
                  <th className="text-center">Opciones</th>
                </tr>
              </thead>
              <tbody>
                {/* Esto va ser lo que vamos a iterar en lo que tengamos en el carro guardado */}

                {cartRender}

               

              </tbody>

              <tfoot>
                <tr>
                  <th colSpan={3}>SUBTOTAL</th>
                  <th className="text-center">{quantyCount}</th>

                  {/* Con este operador ternario, configuro en razón de cantidad de productos */}
                  <th className="text-center">{count} {count === 0 ? "" : count > 1 ? "Productos" : "Poducto"}</th>
                  <th className="text-center" colSpan={2}>{priceFormat.format(accessContext.cartPrice)}</th>
                </tr>

                <tr>

                  {/* Con este, configuro si está accediendo al ENVIO GRATIS cuando tiene 4 o más productos distintos */}
                  <th colSpan={5}>ENVÍO {shippingHandle === 0 ? <span className='free'>GRATIS</span> : ""}</th>
                 {/* <th colSpan={5}>ENVÍO {count >= 4 ? <span className='free'>GRATIS</span> : ""}</th> */}
                  <th className="text-center" colSpan={2} >{priceFormat.format(shippingHandle)}</th>
                </tr>
              </tfoot>

            </Table>

            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th colSpan={4}>TOTAL A PAGAR</th>
                  <th className="text-center" colSpan={2}>{priceFormat.format(totalPay)}</th>
                </tr>

              </thead>
            </Table>

            <div className='btnCheckOut d-grid gap-2 '>
              {/* <Link to={'/checkout'} > */}
              <Button className='btnCH' variant='primary' size='lg' onClick={() => handleCheckOut()}>FINALIZAR COMPRA</Button>
              {/* </Link> */}
            </div>




          </div>

        }
        {

          checkOut &&

          <CartDetailCheckOut
            cart={cartDetail}
            checkDates={checkDates}
          />

        }

      </Container>

  )
}
