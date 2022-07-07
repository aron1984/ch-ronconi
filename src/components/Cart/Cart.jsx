import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';

import { CartContext } from '../../context/CartContext';
import { NotProducts } from '../messages/NotProducts/NotProducts';
import { CartBtn, CartTable, CartTableItems } from './';


import './Cart.css';

export default function Cart() {

  const accessContext = useContext(CartContext)

  useEffect(() => {
    if (accessContext.itemsCart.length === 0) {
      accessContext.setCartDetail([]);
      return
    }

    // eslint-disable-next-line no-unused-vars
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
    prueba.quantity = prueba.quantity >= 1 ? prueba.quantity - 1 : 0;
    // console.log(prueba.quantity)
    accessContext.setCartDetail([...accessContext.itemsCart]);
    accessContext.setItemsCart([...accessContext.itemsCart]);
  }

  const add = (idA) => {
    let prueba = accessContext.itemsCart.find((f) => f.id === idA);
    prueba.quantity = prueba.quantity + 1;
    accessContext.setCartDetail([...accessContext.itemsCart]);
    accessContext.setItemsCart([...accessContext.itemsCart]);
  }


  const priceFormat = new Intl.NumberFormat('es-ar', { style: 'currency', currency: 'ARS', minimumFractionDigits: 2 });

  const recHandleItems = {
    add: add,
    sub: sub,
    priceFormat: priceFormat,
    removeItem: accessContext.removeItem
  }

  const handleCheckOut = () => {
    accessContext.setCheckOut(true);
  }

  const count = Object.keys(accessContext.itemsCart).length;

  // Implementa un RETURN RÁPIDO si no hay productos
  if (count === 0) {
    return <NotProducts />
  }

  const cartRender = accessContext.itemsCart.map((x, index) => {

    if (x.id === 0) {
      return <></>
    }

    return (

      <CartTableItems id={x.id} url={x.url} nam={x.nam} price={x.price} quantity={x.quantity} recHandleItems={recHandleItems} />

    )
  })

  /*********** OBJETO DE RECURSOS PARA CartTable ************/
  const recursosCart = {
    cartRender: cartRender,
    handleCheckOut: handleCheckOut,
    getQuantyCount: accessContext.getQuantyCount,
    getQuantyPrice: accessContext.getQuantyPrice,
    priceFormat: priceFormat,
    shippingHandle: accessContext.shippingHandle,
    count: count,
    totalPay: accessContext.totalPay
  }

  return (

    <Container style={{ marginBottom: 70, marginTop: 20 }}>

      <CartTable recursosCart={recursosCart} />

      {
        accessContext.getQuantyCount() >= 1 && <CartBtn handleCheckOut={handleCheckOut} />
      }

    </Container>

  )
}
