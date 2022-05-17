import React from 'react'

export default function EjClaseCinco() {

    const listProd = [
        { id: 1, name: 'Zapatilla', descrip: 'Azules y blancas', stock: 5 },
        { id: 2, name: 'Medias', descrip: 'Blancas', stock: 3 },
        { id: 3, name: 'Remera', descrip: 'Negra estampada', stock: 0 },
    ]

    const listar = () => {

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                // listProd.map(producto => console.log(producto));
                resolve(listProd.map(producto => console.log(producto)))
            }, 3000)
        });

        promise.then(res => {
            console.log('promise: ', res)
        }, err => {
            console.log('Reject', err)
        }).catch(error => {
            console.log('Algún error ')
        }).finally()
    }



    return (
        <div>
            <button onClick={() => listar()}>Click</button>
        </div>
    )
}
