import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import ItemList from '../ItemList/ItemList'

import './ItemListContainer.css'

export default function ItemListContainer() {

  const { id } = useParams()

  const [producto, setproducto] = useState([])
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState("")

  //useEffect

  useEffect(() => {

    setloading(true);

    const db = getFirestore();

    if (id === undefined) {

      const myproducts = collection(db, 'items'); //referencia al documento
      getDocs(myproducts).then(({ docs }) => {
        setproducto(docs.map(items => ({ id: items.id, ...items.data() })));

        setloading(false)

      });

    } else {

      const queryCategory = query(
        collection(db, 'items'),
        where("cat", "==", id)
      );

      getDocs(queryCategory).then(({ docs }) => {
        setproducto(docs.map(items => ({ id: items.id, ...items.data() })));

        setloading(false);

      });
    }


  }, [id])


  //manejo de error temprano
  if (error) {
    return <h1>NO SE PUEDEN CARGAR LOS PRODUCTOS</h1>
  }

  return (

      <div className='container items'>
        <section>
          <div className='items'>

            {
              loading ? <div className='spinner'><Spinner animation="border" size="lg" className='loading' /></div> : <ItemList prod={producto} />
            }
          </div>
        </section>
      </div>
    
  )
}
