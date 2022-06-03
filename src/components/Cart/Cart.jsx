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

  // Obtengo la cantidad de productos en el carro, pero como inicié con un objeto seteado en 0, le resto 1.
  let count = Object.keys(accessContext.itemsCart).length;
  let quantyPrice = accessContext.itemsCart.map((i) => i.price * i.quantity).reduce((prev, curr) => prev + curr, 0);

  let quantyCount = accessContext.itemsCart.map((i) => i.quantity).reduce((prev, curr) => prev + curr, 0);

  //AGREGANDO PRECIO DE ENVÍO, o ENVÍO GRATIS CON 4 O MÁS PRODUCTOS
  let shippingHandle = quantyPrice > 20000 ? 0 : 1599;

  let totalPay = (shippingHandle + accessContext.cartPrice)

  const priceFormat = new Intl.NumberFormat('es-ar', { style: 'currency', currency: 'ARS', minimumFractionDigits: 2 });

  const checkDates = {
    setCartDetail:setCartDetail,
    
    totalPay: totalPay,
    shippingHandle: shippingHandle,
    quantyPrice: quantyPrice,
    count: count,
    quantyCount: quantyCount,
    priceFormat: priceFormat,
    setCheckOut:setCheckOut,
    clear:accessContext.clear,
  }

  // Implementar un RETURN RÁPIDO si no hay productos

  if (count === 0) {

    // Consulta: este mensaje podría ser un COMPONENTE PURO, y así darle estilos.
    return (
      <NotProducts />
    )
    // <Container><h2>No hay productos en el carro</h2></Container>
  }


  

  return (

    <>
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

                {accessContext.itemsCart.map((x) => {

                  // para evitar que el producto vacío se renderice el producto vacío, prevenimos diciendo que
                  // si aparece un x.id (un producto con ese id, que así lo setié en el CartContext como INITIAL_STATE)
                  if (x.id === 0) {
                    return <></>
                  }

                  return (
                    <>
                      <tr>
                        <td className="text-center">{x.id}</td>
                        <td className="text-center"><img className='imgCartShip' alt="" src={x.url} /></td>
                        <td className="text-center">{x.nam}</td>
                        <td className="text-center">{x.quantity}</td>
                        <td className="text-center">{priceFormat.format(x.price)}</td>
                        <td className="text-center">{priceFormat.format(x.price * x.quantity)}</td>
                        <td className="text-center"><Button className='btnDelet' size="sm" variant="danger" onClick={() => accessContext.removeItem(x.id)}>Eliminar</Button></td>
                      </tr>
                    </>
                  )
                })
                }

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
                  <th colSpan={5}>ENVÍO {count >= 4 ? <span className='free'>GRATIS</span> : ""}</th>
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
    </>



  )
}
