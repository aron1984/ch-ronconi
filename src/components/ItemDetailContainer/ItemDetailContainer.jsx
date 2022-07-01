import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ItemDetail from '../ItemDetail/ItemDetail';
import LoadingSpinner from '../Loading/LoadingSpinner';

import './ItemDetailContainer.css';

export default function ItemDetailContainer() {
    //useParams
    let { id } = useParams();

    //useState
    const [item, setitem] = useState([]);
    const [loading, setloading] = useState(false);

    //useEffect
    useEffect(() => {

        setloading(true)

        const db = getFirestore();
        
        const _item = doc(db, 'items', id); //referencia al documento
        getDoc(_item).then((snapshot) => {
           
            setitem({ id: snapshot.id, ...snapshot.data() });
           
            setloading(false)

        });
        
    }, [id])


    return (
        
            <div className='mainDetailContainer'>
                {loading && <LoadingSpinner />}

                {loading || <ItemDetail id={id} item={item} />}
            </div>
        
    )
}
