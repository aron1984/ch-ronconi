import React from 'react'


export default function ItemListContainer() {
    // aca puede ir una logica de iteración

    for(let i = 0; i < 5; i++){
        console.log(i)
    }

    let _name= "feliciano";
    
  return (
    <div>ItemListContainer
        <ul>
            <li>Esto será una lista</li>
            <li>{_name}</li>
        </ul>
    </div>
  )
}
