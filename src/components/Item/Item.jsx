import React from 'react'
import { Button, Card } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import { Link } from 'react-router-dom'

import './Item.css'

// Render Data
export default function Item(props) {

  const priceFormat = new Intl.NumberFormat('es-ar', { style: 'currency', currency: 'ARS', minimumFractionDigits: 2 });

  return (

    <>
      {
        <Card id={props.id} className="cardsDisp" >
          <CardHeader className='headerMasc bg-dark'>
            <Card.Title style={{ textAlign: 'center', fontSize: 15 }}>
              {props.prod.name}
            </Card.Title>
          </CardHeader>
          <Card.Body className="cardEdit">

            <div className='imgList'>
              <Card.Img classname="imgList" src={props.prod.url} />
            </div>

            <Card.Text style={{ fontSize: 12, textAlign: 'center', textTransform: 'uppercase' }}>
              {props.prod.cat}
            </Card.Text>

            <Card.Text style={{ fontSize: 12, textAlign: 'center' }}>
              {props.prod.comp}
            </Card.Text>
            <Card.Title style={{ textAlign: 'center', marginTop: 5 }}> {priceFormat.format(props.prod.price)}</Card.Title>
          </Card.Body>

          <Link className='linkItem' to={`/item/${props.prod.id}`}><Button className='btn-dark' id={props.prod.id}>Más detalles</Button></Link>

        </Card>
      }
    </>

  )
}
