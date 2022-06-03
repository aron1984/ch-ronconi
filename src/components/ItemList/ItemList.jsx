import React from 'react'

import Item from '../Item/Item'

export default function ItemList(props) {
 
  const x = props.prod;

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

