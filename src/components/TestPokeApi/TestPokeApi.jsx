import React, { useEffect, useState } from "react";

export default function TestFetch() {
    
  const [pokemons, setpokemons] = useState([])
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if(res.results){
            setpokemons( res.results );
        } else {
            throw new Error ('esto es un erro cualquiera')
        }
        
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {  pokemons && 
          pokemons.map( (pokemon, index) => {
          return (
          <div key={ index }>
          <p> #{index + 1} - {pokemon.name}</p>
          <img alt={ pokemon.name } src={`https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon/${index + 1}.png`} />
          </div>
          )})
      }
    </div>
  );
}
