import React, { useContext } from 'react'
import { Button, Card, Container, ListGroup } from 'react-bootstrap'
import { BiCheckShield } from 'react-icons/bi'
import { BsArrowReturnLeft, BsAward, BsCheck2Circle, BsFillCreditCard2FrontFill } from 'react-icons/bs'
import { FaCcAmazonPay, FaCcApplePay, FaCcMastercard, FaCcPaypal, FaCcVisa } from 'react-icons/fa'
import { MdOutlineLocalShipping } from 'react-icons/md'
import { Link } from 'react-router-dom'

import { CartContext } from '../../context/CartContext'
import ItemCount from '..//ItemCount/ItemCount'

import './ItemDetail.css'

export default function ItemDetail({ id, item }) {

  const accessContext = useContext(CartContext)
  
  const ItemCountComp = (
    <>
      <ItemCount
        id={id}
        price={item.price}
        stock={item.stock}
        initial={item.stock > 0 ? 1 : 0}
        url={item.url}
        name={item.name}
        />
    </>
  )
  
  const priceFormat = new Intl.NumberFormat('es-ar', { style: 'currency', currency: 'ARS', minimumFractionDigits: 2 });
  
  const checkout = (
    <>
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


  const quote = (priceFormat.format(item.price / 3));

  return (
    <>
      <Container className='detailContainer'>
        <div className='mainImage'>
          <img className='imgM' alt="" src={item.url} />
        </div>
        <div className='containerSidebar'>

          <Card className='sidebarRight' >
            <Card.Body>
              <Card.Title style={{ textAlign: 'center' }}><h5>{item.name}</h5></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{item.categroy}</Card.Subtitle>

              <ListGroup>
                <ListGroup.Item><p>{item.des}</p></ListGroup.Item>
                <ListGroup.Item><p>Competencia: {item.comp}</p></ListGroup.Item>
                <ListGroup.Item><p>Temporada: {item.year}</p></ListGroup.Item>
                <ListGroup.Item><p>Stock: {item.stock}</p></ListGroup.Item>
                <ListGroup.Item><p>Precio: {priceFormat.format(item.price)}</p></ListGroup.Item>
                <ListGroup.Item style={{ fontSize: 11, color: 'red' }}><p>O en hasta 3 cuotas sin interés de {quote}</p></ListGroup.Item>
              </ListGroup>

              {!accessContext.isInCart(item.id) && ItemCountComp}

              {accessContext.isInCart(item.id) > 0 && checkout}

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
                  <ListGroup.Item><p className='detail'><MdOutlineLocalShipping size={30} /><span> Envío gratis.</span> Desde $20.000</p></ListGroup.Item>
                  <ListGroup.Item><p className='detail'><BsArrowReturnLeft size={30} /><span> Devolución gratis.</span> Tenés 30 días desde que lo recibís.</p></ListGroup.Item>
                  <ListGroup.Item><p className='detail'><BiCheckShield size={30} /><span> Compora protegida.</span> Recibí el producto que esperabas o te devolvemos tu dinero.</p></ListGroup.Item>
                  <ListGroup.Item><p className='detail'><BsAward size={30} /> 12 meses de garantía de fábrica. </p></ListGroup.Item>
                  <ListGroup.Item><p className='detail'><BsCheck2Circle size={30} /><span> Producto original.</span> </p></ListGroup.Item>

                </ListGroup>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>


    </>
  )
}
