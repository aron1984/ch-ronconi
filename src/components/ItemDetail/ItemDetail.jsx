import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';

import ItemCount from '..//ItemCount/ItemCount';
import './ItemDetail.css';
import { BsArrowReturnLeft, BsAward, BsCheck2Circle } from 'react-icons/bs';
import { BiCheckShield } from 'react-icons/bi';
import { Container, Card, ListGroup, Button } from 'react-bootstrap'
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay, FaCcAmazonPay } from 'react-icons/fa';
import { BsFillCreditCard2FrontFill } from 'react-icons/bs';


import { CartContext } from '../../context/CartContext';


export default function ItemDetail({ item }) {

  const accessContext = useContext(CartContext)

  // console.log(item)

  // const {data, algo} = useContext(CartContext);

  // useState
  const [counterCart, setcounterCart] = useState(0);




  // ItemCount
  const ItemCountComp = (
    <>
      <ItemCount
        id={item.id}
        price={item.precio}
        stock={item.stock}
        initial={item.stock > 0 ? 1 : 0}
        url={item.url}
        name={item.name}
        cCart={counterCart} />
    </>
  )
  //CHECK

  const checkout = (
    <>
      {/* Agregar un botón de remove */}
      <div className="d-grid gap-2 btnEnd">
        <Button variant="dark" size="sm" onClick={() => accessContext.removeItem(item.id)}>Eliminar producto</Button>
      </div>
      <div className="d-grid gap-2 btnEnd">
        <Button variant="danger" size="sm" onClick={() => accessContext.clear()}>Vaciar carrito</Button>
      </div>
      <div className="d-grid gap-2 btnEnd">
        <Link to={`/cart`} className="d-grid gap-2 btnEnd">
          <Button variant="dark" size="sm">Finalizar compra</Button>
        </Link>
      </div>
    </>
  )

  const priceFormat = new Intl.NumberFormat('es-ar', { style: 'currency', currency: 'ARS', minimumFractionDigits: 2 });

  return (
    <>
      <Container className='detailContainer'>
        <div className='mainImage'>
          <img className='imgM' alt="" src={item.url} />
        </div>
        <div style={{ width: '30%' }}>

          <Card className='sidebarRight' >
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{item.categroy}</Card.Subtitle>

              <ListGroup>
                <ListGroup.Item>{item.des}</ListGroup.Item>
                <ListGroup.Item>Temporada: {item.year}</ListGroup.Item>
                <ListGroup.Item>Stock: {item.stock}</ListGroup.Item>
                <ListGroup.Item>Precio: {priceFormat.format(item.precio)}</ListGroup.Item>
                {/* <ListGroup.Item className='bg-primary'>Productos en el carrito: {counterCart}</ListGroup.Item> */}
              </ListGroup>

              {/* espacio para la botonera */}

              {
                !accessContext.isInCart(item.id) && ItemCountComp
              }

              {/* Este botón aparece luego de agregar producto al carro */}
              {
                accessContext.isInCart(item.id) > 0 && checkout
              }


              <div className='detail'>
                <ListGroup>
                  <ListGroup.Item >
                    <div className='creditCards'>
                      <FaCcVisa className='ccard' size={30} />{' '}
                      <FaCcMastercard className='ccard' size={30} />{' '}
                      <FaCcPaypal className='ccard' size={30} />{' '}
                      <FaCcAmazonPay className='ccard' size={30} />{' '}
                      <FaCcApplePay className='ccard' size={30} />{' '}
                      <BsFillCreditCard2FrontFill className='ccard' size={30} />
                    </div>

                  </ListGroup.Item>
                  <ListGroup.Item><p className='detail'><BsArrowReturnLeft /><span> Devolución gratis.</span> Tenés 30 días desde que lo recibís.</p></ListGroup.Item>
                  <ListGroup.Item><p className='detail'><BiCheckShield /><span> Compora protegida.</span> Recibí el producto que esperabas o te devolvemos tu dinero.</p></ListGroup.Item>
                  <ListGroup.Item><p className='detail'><BsAward /> 12 meses de garantía de fábrica. </p></ListGroup.Item>
                  <ListGroup.Item><p className='detail'><BsCheck2Circle /><span> Producto original.</span> </p></ListGroup.Item>

                  {/*  pueba context borrar */}



                </ListGroup>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>


    </>
  )
}
