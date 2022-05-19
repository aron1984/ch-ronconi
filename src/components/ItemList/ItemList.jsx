import React from 'react'
import Item from '../Item/Item'
// import { Card } from 'react-bootstrap'

// Recibo las PROPS que definí en ItemListContainer y las manejo dentro de useEffect con un MAP.
export default function ItemList(props) {

  const x = props.prod;

  // render
  return (

    <>
      {
        x.map((prod1) => {
          return (
            <Item key={prod1.id} id={prod1.id} prod={prod1} />
          )
        })
      }
    </>

  )
}

