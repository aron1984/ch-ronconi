import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import '././services/promesa'
import ItemList from './ItemList/ItemList';
import { Spinner } from 'react-bootstrap';

//Import productos
// import {product} from './services/productos';
import Productos from './services/productos.json';
import { useParams } from 'react-router-dom';


export default function ItemListContainer() {

  const { id } = useParams();
  //useStates (puede haber varios)

  const [producto, setproducto] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  //useEffect

  useEffect(() => {

    setloading(true);

    const traerListaItem = new Promise((res, rej) => {
      setTimeout(() => {


        /***************** acá estamos trabajando ************* */
        // si cambio manualmente el id por futbol o hockey, me funciona el filtro en la app
        if (id === undefined) {

          res(Productos)
          console.log(id)

        } else {
          const prodProd = Productos.filter(prod => prod.cat === id)
          res(prodProd)
          console.log(id)
          // setproducto(prod)
          console.log(res)

        }

        /******************************************************** */

      }, 2000);
    })
    console.log(traerListaItem)
    traerListaItem
      .then((result) => {
        setproducto(result)
        setloading(false)
        console.log(Productos)
        // console.log(product)
      })
      .catch((err) => {
        console.log(err)
        seterror(false)
      })

  }, [id])


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
