import React from 'react';
import {Card} from 'react-bootstrap';
import ItemCount from './ItemCount/ItemCount';
import './ItemListContainer.css';

export default function ItemListContainer() {
  
  // let product = ['Zapatillas','Remeras','Conjunto','Medias'] ;
  let product = [{id:1, name:'Zapatillas', stock: 10},{id:2, name:'Remeras', stock: 5},{id:3, name:'Conjunto', stock:7},{id:4, name:'Medias', stock:0}] ;
  
  // arrow function ???
  // no se si está bien el return, si lo saco no funciona
  const productList =  product.map((product) => {


    // En esta lína tengo dudas: es la forma que no me da error.
    return (  
      <Card className='mx-2' key={product.id.toString()}>
        <div className='cardImage'></div>
        <Card.Body className="cardEdit">

          {/*Step 8:  add name prodcut from params App.js  */}
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>

        {/* After work with ItemCount.jsx, edit here:
            Step 1: Add ItemCount component container */}
        {/* Step 2: Add props 'product={product}' to show at console 'what product is adding' */}
        <ItemCount product={product.name} stock={product.stock} initial="1" />
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