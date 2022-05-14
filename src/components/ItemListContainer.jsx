import React from 'react';
import {Card} from 'react-bootstrap';
import ItemCount from './ItemCount/ItemCount';
import './ItemListContainer.css';

export default function ItemListContainer() {
  // aca puede ir una logica de iteración

  let product = ['Zapatillas','Remeras','Conjunto','Medias'] ;
  
  // arrow function ???
  // no se si está bien el return, si lo saco no funciona
  const productList =  product.map((product) => {
    // En esta lína tengo dudas, pero es la forma que no me da error. ¿Está bien el 'retur'?
    return (  
      <Card className='mx-2'>
        <div className='cardImage'></div>
        <Card.Body className="cardEdit">

          {/*Step 8:  add name prodcut from params App.js  */}
          <Card.Title>{product}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>

        {/* After work with ItemCount.jsx, edit here:
            Step 1: Add ItemCount component container */}
        {/* Step 2: Add params 'product={product}' to show at console 'what product is adding' */}
        <ItemCount product={product} stock="5" initial="1" />
      </Card> 
     )
    }

 
  
)
 
  return (
    <div className='items'>

        {productList}
             
    </div>
  )
}

// {/* <Card style={{ width: '18rem' }} >
//                 {/* <Card.Img variant="top" src="holder.js/100px180" className='cardImage' /> */}
//                 <div className='cardImage'></div>
//                 <Card.Body className="cardEdit">
//                     <Card.Title></Card.Title>{/*Step 8:  add name prodcut from params App.js  */}
//                     <Card.Text>
//                         Some quick example text to build on the card title and make up the bulk of
//                         the card's content.
//                     </Card.Text>
//                 </Card.Body>

//                 <ItemCount product={productList} stock="5" initial="1"/>
                
//             </Card> */}