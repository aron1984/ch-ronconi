import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';

export default function ItemDetailContainer(product) {

    //useState
    const [item, setitem] = useState('')

    //useEffect
    useEffect(() => {
        const getItem = () => {
            const itemPromise = new Promise((res, rej) => {
                setTimeout(() => {
                    res(console.log('Acá me va a llegar algo'))
                }, 2000);
            });
        };

        getItem
        .then((resp) => {
            resp(setitem(resp));
            console.log(item)
        })
        .catch((err)=>{console.log(err)})

        }, []);

    //Render
    return (
        <>
        <ItemDetail item={item}/>
        </>
    )
}
