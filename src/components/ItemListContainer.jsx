import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import '././services/promesa'
import ItemList from './ItemList/ItemList';
import { Spinner } from 'react-bootstrap';


export default function ItemListContainer() {

  // let product = ['Zapatillas','Remeras','Conjunto','Medias'] ;
  let product = [ { id: 1, name: 'Urbanas', des: 'Blancas con tiras negras', precio: 9999, code: 'cod001', stock: 0 },
                  { id: 2, name: 'Urbanas negras', des: 'Negras con tiras blancas', precio: 9999, code: 'cod002', stock: 3 },
                  { id: 3, name: 'Urbanas color', des: 'Blancas con tiras azules y rojas', precio: 7999, code: 'cod003', stock: 2 },
                  { id: 4, name: 'Remera Argentina ', des: 'Camiseta original de la selección Argentina', precio: 15999, code: 'cod004', stock: 25 },
                  { id: 5, name: 'Remera Argentina Suplente', des: 'Camiseta alternativa de la selección Argentina', precio: 12999, code: 'cod005', stock: 35 },
                  { id: 6, name: 'Remera negra', des: 'Remera deportiva negra con tiras blancas', precio: 7999, code: 'cod006', stock: 50 },
                  { id: 7, name: 'Conjunto AFA', des: 'Conjunto deportivo oficial AFA', precio: 18999, code: 'cod007', stock: 15 },
                  { id: 8, name: 'Conjunto deportivo', des: 'Conjunto deportivo', precio: 7999, code: 'cod008', stock: 23 },
                  { id: 9, name: 'Conjunto AFA blanco', des: 'Conjunto deportivo oficial AFA color blanco', precio: 17999, code: 'cod009', stock: 17 },
                  { id: 10, name: 'Pack medias negras', des: 'Pack de medias negras', precio: 2999, code: 'cod010', stock: 27 },
                  { id: 11, name: 'Medis Originals', des: 'Pack de medias negras originals', precio: 2399, code: 'cod011', stock: 10 },
                  { id: 12, name: 'Pack medias blancas', des: 'Pack de medias x3 blancas', precio: 1999, code: 'cod012', stock: 7 }
                   ];

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
      }, 5000);
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
