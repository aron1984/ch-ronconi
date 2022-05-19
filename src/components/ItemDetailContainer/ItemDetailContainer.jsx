import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { Spinner } from 'react-bootstrap';

//Import productos
import { product } from '../../components/services/productos';

export default function ItemDetailContainer() {

    //useState
    // const [item, setitem] = useState('')
    const [item, setitem] = useState([]);
    const [loading, setloading] = useState(false);

    //useEffect
    useEffect(() => {

        setloading(true)

        const getItem = () => {
            const traerItemId = new Promise((res, rej) => {
                setTimeout(() => {
                    res(product)
                    // console.log('promsea + producto: ', product)
                }, 3000);
            })
            // console.log(traerItemId)
            traerItemId
                .then((result) => {
                    console.log("result de la promesa");
                    setitem(result[1])
                    setloading(false)
                    const x = item
                    console.log(x)

                })
                .catch((err) => {
                    console.log(err)
                    //   seterror(false)
                })
        }

        getItem()
    }, [])

    //Render
    return (
        <>
            {
                loading && <Spinner animation="border" size="lg" className='loading' />
            }

            {
                loading || <ItemDetail item={item} />
            }
           
        </>
    )
}
