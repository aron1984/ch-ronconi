import React from 'react';
import './ItemListContainer.css';
import '././services/promesa'
import ItemList from './ItemList/ItemList';


export default function ItemListContainer() {

  // let product = ['Zapatillas','Remeras','Conjunto','Medias'] ;
  let product = [{ id: 1, name: 'Zapatillas', stock: 0 }, { id: 2, name: 'Remeras', stock: 5 }, { id: 3, name: 'Conjunto', stock: 7 }, { id: 4, name: 'Medias', stock: 0 }];

  //ACÁ VA LA PROMESA  QUE TRAE CON SET TIME OUT LA LISTA
  //ItemList recupera esto por props y le hace un MAP (HAY QUE LLEVAR ESTE MAP A ItemList)

  // const [liPro, setliPro] = useState([])

  // const getProduct = () => {
  //   setTimeout(() => {
  //     console.log(product)
  //     // setliPro(product)


  //   }, 3000);
  // }
  // useEffect(() => {
  //   getProduct();

  //   return() =>{
  //     const productPromise = product;
  //     console.log(productPromise);
  //   }

  // }, [])


  return (
    <>
    <section>
      
      <div className='items'>
        <ItemList algo={product} />
      </div>
      </section>
    </>
  )
}
