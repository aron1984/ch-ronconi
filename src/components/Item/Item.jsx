import React from 'react'
// import ItemCount from '../ItemCount/ItemCount'
import { Button, Card } from 'react-bootstrap';
import './Item.css';


// Render Data
export default function Item(props) {

  // console.log(props.prod)

  const more = (event, key) => {
    // console.log(ite.key)
    const x = key.toString();
   
    console.log('Con esta acción iremos al detalle de ', props.prod[x].name)
    
  }

  const cargarImagen = require.context("../../assets/img/", true);

  return (

    <>
      {
        props.prod.map((ite, key) => {
          return (
            <Card key={ite.id.toString()} className="cardsDisp">

              <Card.Body className="cardEdit">
                {/* Step 8:  add name prodcut from params App.js  */}
                <Card.Title>{ite.name}</Card.Title>
                <img src={cargarImagen(`./${ite.code}.png`)} />
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Card.Footer>Stock disponible: {ite.stock}</Card.Footer>
              </Card.Body>
              <Button className='btn-dark' key={ite.key} onClick={event => more(event, key)}>Más detalles</Button>
              {/* <Button className='btn-dark' key={ite.key} onClick={more}>Más detalles</Button> */}
            </Card>
          )
        })
      }

    </>

  )
}
