// crear el objeto

const listProd = [
    { id: 1, name: 'Zapatilla', descrip: 'Azules y blancas', stock: 5 },
    { id: 2, name: 'Medias', descrip: 'Blancas', stock: 3 },
    { id: 3, name: 'Remera', descrip: 'Negra estampada', stock: 0 },
]

export const listar = new Promise ((resolve, reject) =>{

    setTimeout(()=>{
        resolve(listProd)
    },3000)
})



// y el resto then, catch, finally en el otro archivo dónde importamos esto