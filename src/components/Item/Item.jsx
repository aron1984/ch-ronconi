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
            <Card.Title style={{ textAlign: 'center', fontSize: 15, marginTop: 4, marginBottom: 4 }}>
              {props.prod.name}
            </Card.Title>
          </CardHeader>
          <Card.Body className="cardEdit">

            <div className='imgList'>
              <Card.Img className="imgList" src={props.prod.url} />
            </div>

            <Card.Text style={{ fontSize: 12, textAlign: 'center', textTransform: 'uppercase' }}>
              {props.prod.cat}
            </Card.Text>

            <Card.Text style={{ fontSize: 12, textAlign: 'center' }}>
              {props.prod.comp}
            </Card.Text>
            <Card.Title style={{ textAlign: 'center', marginTop: 5 }}> {priceFormat.format(props.prod.price)}</Card.Title>
          </Card.Body>

          <Link className='linkItem' to={`/item/${props.prod.id}`}><Button className='btn-dark btnEdit'  id={props.prod.id}><p style={{marginTop: 3, marginBottom: 3}}>Más detalles</p></Button></Link>

        </Card>
      }
    </>

  )
}
