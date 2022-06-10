import React, { useContext, useEffect } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { CartContext } from '../../context/CartContext'
import NotProducts from '../messages/NotProducts/NotProducts'
import { RiDeleteBin5Line } from 'react-icons/ri';

import './Cart.css'

export default function Cart() {

  const accessContext = useContext(CartContext)

  useEffect(() => {
    if (accessContext.itemsCart.length === 0) {
      accessContext.setCartDetail([])
      return
    }

    let price = 0
    accessContext.setCartDetail(
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

  }, [])

  const sub = (idA) => {
    let prueba = accessContext.itemsCart.find((f) => f.id === idA);
    prueba.quantity = prueba.quantity - 1
    accessContext.setCartDetail([...accessContext.itemsCart])
    accessContext.setItemsCart([...accessContext.itemsCart])
    console.log(accessContext.cartDetail)
  }

  const add = (idA) => {
    let prueba = accessContext.itemsCart.find((f) => f.id === idA);
    prueba.quantity = prueba.quantity + 1
    accessContext.setCartDetail([...accessContext.itemsCart])
    accessContext.setItemsCart([...accessContext.itemsCart])
    console.log(accessContext.itemsCart)
  }

  const priceFormat = new Intl.NumberFormat('es-ar', { style: 'currency', currency: 'ARS', minimumFractionDigits: 2 });

  const handleCheckOut = () => {
    accessContext.setCheckOut(true)
  }

  const count = Object.keys(accessContext.itemsCart).length;

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

      <tr key={index} id={x.id} className='rowSpace'>
        <td className="text-center">{x.id}</td>
        <td className="text-center bg-light"><img className='imgCartShip' alt="" src={x.url} /></td>
        <td className="text-center">{x.nam}</td>
        <td className="text-center">
          <div className='handleQuanty'>
            <div className='btnHandelQuanty'>
              <Button variant='light' onClick={(e) => sub(x.id)}><strong>-</strong></Button>
            </div>
            <div className='quantyItem'>
              {x.quantity}
            </div>
            <div className='btnHandelQuanty'>
              <Button variant='light' onClick={() => add(x.id)}><strong>+</strong></Button>
            </div>
          </div>
        </td>
        <td className="text-center">{priceFormat.format(x.price)}</td>
        <td className="text-center">{priceFormat.format(x.price * x.quantity)}</td>
        <td className="text-center"><Button className='btnDelet' variant="danger" onClick={() => accessContext.removeItem(x.id)}><strong>X</strong></Button></td>
      </tr>

    )
  })

  return (

    <Container style={{ marginBottom: 70, marginTop: 20 }}>
      {/* {!accessContext.checkOut && */}

      <div className='ditailBuy'>

        <header className='tableHeader'>
          <h1>Tu carro de compras</h1>
        </header>

        <Table bordered hover size="sm" variant="dark" responsive>
          <thead>
            <tr className='rowSpace'>
              <th className="text-center">ID</th>
              <th className="text-center" colSpan={2}>Producto</th>
              <th className="text-center">Cantidad</th>
              <th className="text-center">$ Unitario</th>
              <th className="text-center">$ Total</th>
              <th className="text-center"><RiDeleteBin5Line size={30} /></th>
            </tr>
          </thead>
          <tbody>

            {cartRender}

          </tbody>

          <tfoot>
            <tr>
              <th colSpan={3}>SUBTOTAL</th>
              <th className="text-center">{accessContext.getQuantyCount()}</th>

              <th className="text-center">{count} {count === 0 ? "" : count > 1 ? "Productos" : "Poducto"}</th>
              <th className="text-center" colSpan={2}>{priceFormat.format(accessContext.cartPrice)}</th>
            </tr>

            <tr>

              <th colSpan={5}>ENVÍO {accessContext.shippingHandle === 0 ? <span className='free'>GRATIS</span> : ""}</th>
              <th className="text-center" colSpan={2} >{priceFormat.format(accessContext.shippingHandle)}</th>
            </tr>
          </tfoot>

        </Table>


        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th colSpan={4}>TOTAL A PAGAR</th>
              <th className="text-center" colSpan={2}>{priceFormat.format(accessContext.totalPay)}</th>
            </tr>

          </thead>
        </Table>

        <div className='btnCheckOut d-grid gap-2 '>
          <Link to={'/checkout'} >
            <Button className='btnCH' variant='primary' size='lg' onClick={() => handleCheckOut()}>FINALIZAR COMPRA</Button>
          </Link>
        </div>

      </div>
      {/* } */}
      {/* // checkOut && <CartDetailCheckOut cart={cartDetail} checkDates={checkDates} /> */}

    </Container>

  )
}
