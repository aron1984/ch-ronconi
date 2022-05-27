import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'

import { doc, getDoc, getFirestore } from 'firebase/firestore';

import LoadingSpinner from '../Loading/LoadingSpinner';

export default function ItemDetailContainer() {
    //useParams
    let { id } = useParams();
    // id = parseInt(id)
    console.log(id)


    //useState
    // const [item, setitem] = useState('')
    const [item, setitem] = useState([]);
    const [loading, setloading] = useState(false);

    //useEffect
    useEffect(() => {

        setloading(true)

        const db = getFirestore();

        
        const _item = doc(db, 'items', id); //referencia al documento
        getDoc(_item).then((snapshot) => {
            console.log(snapshot.id);
            console.log(snapshot.data());

            setitem({ id: snapshot.id, ...snapshot.data() });
            console.log(item)
            setloading(false)

        });
        
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
