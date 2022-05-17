import React, { useState } from 'react'
import Item from '../Item/Item'
// import { Card } from 'react-bootstrap'

// Recibo las PROPS que definí en ItemListContainer y las manejo dentro de useEffect con un MAP.
export default function ItemList(props) {

  const [prod, setprod] = useState([])

  console.log('listaProductos', props.algo)

  // const listar = () => {
  //   const nl = props.algo.map(nuevaList => (setprod(nuevaList)))
  //   console.log('prod',prod)
  //   console.log('nl', nl)
  // }

  // useEffect(() => {
  //   listar()

  // }, [])

  // props.liProm.map(prodLi => (setprod(prodLi)))

  return (
    // <div className='containerCards'>
<>
      <Item prod={props.algo} />
    {/* </div> */}
</>
  )
}

