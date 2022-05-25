import React from 'react'
// import ItemCount from '../ItemCount/ItemCount'
import { Card, Button } from 'react-bootstrap';
import './Item.css';
import { Link } from 'react-router-dom';


// Render Data
export default function Item(props) {
 
   return (

    <>
      {
        <Card id={props.id} className="cardsDisp">

          <Card.Body className="cardEdit">
            {/* Step 8:  add name prodcut from params App.js  */}
            <Card.Title>{props.prod.name}</Card.Title>
            <Card.Img src={props.prod.url} />
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Card.Footer>Stock disponible: {props.prod.stock}</Card.Footer>
          </Card.Body>

          <Link className='linkItem' to={`/item/${props.prod.id}`}><Button className='btn-dark' id={props.prod.id}>Más detalles</Button></Link>
          
        </Card>
      }
    </>

  )
}
