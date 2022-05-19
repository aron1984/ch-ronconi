import React from 'react'
// import ItemCount from '../ItemCount/ItemCount'
import { Card, Button } from 'react-bootstrap';
import './Item.css';


// Render Data
export default function Item(props) {

  const more = (event) => {

    const x = event.target.id;

    // Con esto le asigno un nombre al objeto que me trae {props.prod} para poder acceder a las propiedades y emitir el mensaje
    const listProdOb = props.prod;
    console.log('Con esta acción iremos al detalle de ', listProdOb.name, ' id: ', x)

  }

  //Esto investigué para poder renderizar imagenes
  const cargarImagen = require.context("../../assets/img/", true);

  return (

    <>
      {
        <Card id={props.id} className="cardsDisp">

          <Card.Body className="cardEdit">
            {/* Step 8:  add name prodcut from params App.js  */}
            <Card.Title>{props.prod.name}</Card.Title>
            <Card.Img src={cargarImagen(`./${props.prod.code}.png`)} />
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Card.Footer>Stock disponible: {props.prod.stock}</Card.Footer>
          </Card.Body>
          <Button className='btn-dark' id={props.id} onClick={(event) => more(event)}>Más detalles</Button>
          {/* <Button className='btn-dark' key={ite.key} onClick={more}>Más detalles</Button> */}
        </Card>
      }
    </>

  )
}
