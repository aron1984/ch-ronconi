import React from 'react'
// import ItemCount from '../ItemCount/ItemCount'
import { Button, Card } from 'react-bootstrap'
import './Item.css'

// Render Data
export default function Item(props) {

  console.log(props.prod)
  const limap = props.prod.map((ite) =>

    <Card key={ite.id.toString()} className="cardsDisp">
      <Card.Body className="cardEdit">
        {/* Step 8:  add name prodcut from params App.js  */}
        <Card.Title>{ite.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
      <Button className='btn-dark'>Más detalles</Button>
    </Card>

  )

  console.log(limap)
  // console.log("item", productos)
  // const listProd = props.productos.map(pro => (<li>{pro.name}</li>))

  return (

    <>
        {limap}
    </>

  )
}
