import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import '././services/promesa'
import ItemList from './ItemList/ItemList';
import { Spinner } from 'react-bootstrap';

import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

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

    // Acá vamos a pedir las cosas a FIREBASE

    const db = getFirestore();

    if (id === undefined) {

      const myproducts = collection(db, 'items'); //referencia al documento
      getDocs(myproducts).then(({ docs }) => {
        setproducto(docs.map(items => ({ id: items.id, ...items.data() })));
        // console.log(snapshot.data());

        setloading(false)

      });

    } else {

      const queryCategory = query(
        collection(db, 'items'),
        where("cat", "==", id)
      );

      getDocs(queryCategory).then(({ docs }) => {
        setproducto(docs.map(items => ({ id: items.id, ...items.data() })));
        // console.log(snapshot.data());

        setloading(false);

      });
    }

    console.log(producto);

    // **************************************

    // const traerListaItem = new Promise((res, rej) => {
    //   setTimeout(() => {


    //     /***************** acá estamos trabajando ************* */
    //     // si cambio manualmente el id por futbol o hockey, me funciona el filtro en la app
    //     if (id === undefined) {

    //       res(Productos)
    //       // console.log(id)   // Esto me da undefined y muestro todos los productos

    //     } else {
    //       const prodProd = Productos.filter(prod => prod.cat === id)
    //       res(prodProd)
    //       // console.log(id)  // si viene con otro string match con category/:id sino va salir pagina de error
    //       // setproducto(prod)
    //       // console.log(res)

    //     }

    //     /******************************************************** */

    //   }, 2000);
    // })
    // // console.log(traerListaItem)
    // traerListaItem
    //   .then((result) => {
    //     setproducto(result)
    //     setloading(false)
    //     // console.log(Productos)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //     seterror(false)
    //   })

  }, [id])


  //manejo de error temprano
  if (error) {
    return <>NO SE PUEDEN CARGAR LOS PRODUCTOS</>
  }

  //Render
  return (
    <>
      {/* {loading && <div className='spinner'><Spinner animation="border" size="lg" className='loading' /></div>} */}

      <div className='container items'>
        <section>
          <div className='items'>

            {
              loading ? <div className='spinner'><Spinner animation="border" size="lg" className='loading' /></div> : <ItemList prod={producto} />
            }
          </div>
        </section>
      </div>
    </>
  )
}
