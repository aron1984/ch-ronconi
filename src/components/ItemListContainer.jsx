import React from 'react'


export default function ItemListContainer() {
  // aca puede ir una logica de iteración

  let product = ['Zapatillas','Remeras','Conjunto'] ;
  const productList =  product.map(product => <li>{product}</li>)
 
  return (
    <div>
      <ul>
        {productList}
      </ul>        
    </div>
  )
}
