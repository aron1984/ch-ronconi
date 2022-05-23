import React, { useState } from 'react'
import { Container, Card, ListGroup, Button } from 'react-bootstrap'
import './ItemDetail.css';
import ItemCount from '..//ItemCount/ItemCount';
import { BsArrowReturnLeft, BsAward, BsCheck2Circle } from 'react-icons/bs';
import { BiCheckShield } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function ItemDetail({ item }) {

  // useState
  const [counterCart, setcounterCart] = useState(0);
  const [btnAdd, setbtnAdd] = useState(false);

  // console.log(item)

  const onAdd = (e) => {

    // Perfecto solo queda repasar el FLOW 
    // comporbamos que el el evevento + conunt no sean mayor que el stock.

    if (item.stock >= (e + counterCart)) {
      setbtnAdd(true)
    }

    if ((e + counterCart) <= item.stock && counterCart <= item.stock) {
      let xx = counterCart;
      setcounterCart(xx + e);
      console.log("Estoy obteniendo la cantidad de productos del boton ItemCount: ", e)
      console.log("Total acumulado al carrito: ", counterCart + e);

    } else {
      console.log('No hay suficiente stock')
      console.log('total carrito: ', counterCart)
    }

  }

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
                <ListGroup.Item>Precio: ${item.precio}</ListGroup.Item>
                <ListGroup.Item className='bg-primary'>Productos en el carrito: {counterCart}</ListGroup.Item>
              </ListGroup>

              {/* espacio para la botonera */}

              <ItemCount stock={item.stock} initial="1" product={item.name} onAdd={onAdd} btnHandle={btnAdd} cCart={counterCart} />

              
                <div className="d-grid gap-2 btnEnd">
                  <Link to={`/cart`} className="d-grid gap-2 btnEnd">

                    {/* Este botón aparece luego de agregar producto al carro */}
                    {
                      !btnAdd ? '' : <Button variant="dark" size="sm">Finalizar compra</Button>
                    }
                    
                  </Link>
                </div>
            

              <div className='detail'>
                <ListGroup>
                  <ListGroup.Item><p className='detail'><BsArrowReturnLeft /><span> Devolución gratis.</span> Tenés 30 días desde que lo recibís.</p></ListGroup.Item>
                  <ListGroup.Item><p className='detail'><BiCheckShield /><span> Compora protegida.</span> Recibí el producto que esperabas o te devolvemos tu dinero.</p></ListGroup.Item>
                  <ListGroup.Item><p className='detail'><BsAward /> 12 meses de garantía de fábrica. </p></ListGroup.Item>
                  <ListGroup.Item><p className='detail'><BsCheck2Circle /> Producto original. </p></ListGroup.Item>

                </ListGroup>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>


    </>
  )
}
