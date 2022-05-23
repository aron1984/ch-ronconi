import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
// import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'

//Import productos
import Producto1 from '../../components/services/productos.json';
import LoadingSpinner from '../Loading/LoadingSpinner';

export default function ItemDetailContainer() {
    //useParams
    let { id } = useParams();
    id = parseInt(id)
    // console.log(id)


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
                    const filteredProduct = Producto1.find(product => product.id === id)
                    // console.log(id)

                    res(filteredProduct)
                    // console.log('promsea + producto: ', product)
                }, 2000);
            })
            // console.log(traerItemId)
            traerItemId
                .then((result) => {
                    // console.log("result de la promesa", result);
                    setitem(result)
                    setloading(false)
                    // const x = id
                    // console.log(x)

                })
                .catch((err) => {
                    console.log(err)
                    //   seterror(false)
                })
        }

        getItem()
    }, [id])

    //Render
    return (
        <>
            <div className='mainDetailContainer'>
                {
                    loading && <LoadingSpinner />
                }

                {

                    loading || <ItemDetail id={id} item={item} />
                }
            </div>
        </>
    )
}
