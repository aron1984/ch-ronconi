import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import '././services/promesa'
import ItemList from './ItemList/ItemList';
import { Spinner } from 'react-bootstrap';

//Import productos
import {product} from './services/productos';


export default function ItemListContainer() {

  
  //useStates (puede haber varios)

  const [producto, setproducto] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  //useEffect

  useEffect(() => {

    setloading(true);

    const traerListaItem = new Promise((res, rej) => {
      setTimeout(() => {
        res(product)
        // console.log('promsea + producto: ', product)
      }, 3000);
    })
    console.log(traerListaItem)
    traerListaItem
      .then((result) => {
        setproducto(result)
        setloading(false)
        console.log(product)
      })
      .catch((err) => {
        console.log(err)
        seterror(false)
      })

  }, [])


  //manejo de error temprano
  if (error) {
    return <>NO SE PUEDEN CARGAR LOS PRODUCTOS</>
  }

  //Render
  return (
    <>

      {loading && <div className='spinner'><Spinner animation="border" size="lg" className='loading' /></div>}


      <div className='container items'>
        <section>
          <div className='items'>
            <ItemList prod={producto} />
          </div>
        </section>
      </div>
    </>
  )
}
